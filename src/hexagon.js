/**
    Module: @mitchallen/connection-grid/src/hexagon.js
    Author: Mitch Allen
*/

/*jshint node: true */
/*jshint esversion: 6 */

"use strict";

let gridFactory = require("@mitchallen/grid"),
    baseGrid = require("@mitchallen/connection-grid-core").create;

module.exports = (spec) => {
    
    spec = spec || {};
    let _x = spec.x || 0;
    let _y = spec.y || 0;

    let _grid = gridFactory.Hexagon({
        x: _x,
        y: _y
    });

    if(!_grid) {
        return null;
    }

    _grid.fill(0);

    let _dirMap = { 
        "N":  0x010, 
        "S":  0x020, 
        "E":  0x040, 
        "W":  0x080,
        "NW": 0x100,
        "NE": 0x200,
        "SW": 0x400,
        "SE": 0x800 };

    let _oppositeMap = {  
        "N": "S",  "S": "N",  "E": "W",  "W": "E", 
        "NE": "SW", "NW": "SE", "SE": "NW", "SW": "NE" 
    };
 
    let obj = baseGrid( {
        grid: _grid,
        dirMap: _dirMap,
        oppositeMap: _oppositeMap
    });

    Object.assign( obj, {
        getNeighborDirs: function(x, y) {
            // Classic ignores x and y, but other derived classes may not
            // return [ "N", "S", "E", "W" ];
            if( x % 2 === 0 ) { 
                return [ "N", "S", "E", "W", "NW", "NE" ];
            } 
            return [ "N", "S", "E", "W", "SW", "SE" ];
        },
        getNeighbor: function(x, y, dir) {
            if(!this.isCell(x, y)) { return null; }
            // dir must be string and in dirmap
            if(!this.isDir(dir)) { return null; }
            let _DX = { 
                "E": 1,  "NE":  1, "SE":  1,
                "W": -1, "NW": -1, "SW": -1,
                "N":  0,  "S": 0 
            };
            let _DY = {
                "S":  1, "SE":  1, "SW":  1,
                "N": -1, "NE": -1, "NW": -1,
                "E":  0, "W":   0
            };
            let nx = x + _DX[dir];
            let ny = y + _DY[dir];
            if(!this.isCell(nx, ny)) { 
                return null; 
            }
            return { x: nx, y: ny };
        }
    });

    return obj;
};