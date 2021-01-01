/**
    Module: @mitchallen/connection-grid/src/triangle.js
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

    let _grid = gridFactory.Square({
        x: _x,
        y: _y
    });

    if(!_grid) {
        return null;
    }

    _grid.fill(0);

    let UP = 0x01,
        DOWN = 0x02;

    let _dirMap = { 
        "N": 0x010, 
        "S": 0x020, 
        "E": 0x040, 
        "W": 0x080 };

    let _oppositeMap = { "E": "W", "W": "E", "N": "S", "S": "N" };

    let obj = baseGrid( {
        grid: _grid,
        dirMap: _dirMap,
        oppositeMap: _oppositeMap
    });

    Object.assign( obj, {
        getNeighbor: function(x, y, dir) {
            if(!this.isCell(x, y)) { return null; }
            // dir must be string and in dirmap
            if(!this.isDir(dir)) { return null; }
            let _DX = { "E": 1, "W": -1, "N": 0, "S": 0 };
            let _DY = { "E": 0, "W": 0, "N": -1, "S": 1 };
            let nx = x + _DX[dir];
            let ny = y + _DY[dir];
            if(!this.isCell(nx, ny)) { 
                return null; 
            }
            return { x: nx, y: ny };
        },
        getNeighborDirs: function(x, y) {
 
            let tDir = ( ( x + y ) % 2 === 0 ) ? UP : DOWN; 
            /*
                list the vertical direction twice. Otherwise the horizontal direction (E/W)
                will be selected more often (66% of the time), resulting in mazes with a
                horizontal bias.
            */
            let vertical = (tDir === DOWN ? "N": "S");

            // return [ vertical, vertical, "E", "W ];
            return [ vertical, "E", "W" ];
        },
    });

    return obj;
};