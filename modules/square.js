/**
    Module: @mitchallen/connection-grid/lib/square.js
    Author: Mitch Allen
*/

/*jshint node: true */
/*jshint esversion: 6 */

"use strict";

var gridFactory = require("@mitchallen/grid-square"),
    baseGrid = require("@mitchallen/connection-grid-core").create;

module.exports = (spec) => {

    spec = spec || {};
    let _x = spec.x || 0;
    let _y = spec.y || 0;

    var _grid = gridFactory.create({
        x: _x,
        y: _y
    });

    if(!_grid) {
        return null;
    }

    _grid.fill(0);

    var _dirMap = { 
        "N": 0x010, 
        "S": 0x020, 
        "E": 0x040, 
        "W": 0x080 };

    let _oppositeMap = { "E": "W", "W": "E", "N": "S", "S": "N" };

    var obj = baseGrid( {
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
            var nx = x + _DX[dir];
            var ny = y + _DY[dir];
            if(!this.isCell(nx, ny)) { 
                return null; 
            }
            return { x: nx, y: ny };
        },
        getNeighborDirs: function(x, y) {
            // Classic ignores x and y, but other derived classes may not
            return [ "N", "S", "E", "W" ];
        },
    });

    return obj;
};