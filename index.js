/**
    Module: @mitchallen/connection-grid
    Author: Mitch Allen
*/

/*jshint esversion: 6 */

"use strict";

var gridFactory = require("@mitchallen/grid");

module.exports.create = function (spec) {
    if(!spec) {
        return null;
    }
    if(!spec.x || !spec.y) {
        return null;
    }
    let _x = spec.x;
    let _y = spec.y;
    let _gridSpec = {
        x: _x,
        y: _y
    }
    var _grid = gridFactory.create(_gridSpec);
    if(!_grid) {
        return null;
    }
    _grid.fill(0);

    // bit masks
    let VISITED = 0x01;
    let START   = 0x02;
    let GOAL    = 0x03;

    let _N = 0x010;
    let _S = 0x020;
    let _E = 0x040;
    let _W = 0x080;

    // let NW = 0x100
    // let NE = 0x200
    // let SW = 0x400
    // let SE = 0x800

    let _DIR_MAP = { "N": _N, "S": _S, "E": _E, "W": _W };

    // Default square configuration
    let _DX = { "E": 1, "W": -1, "N": 0, "S": 0 };
    let _DY = { "E": 0, "W": 0, "N": -1, "S": 1 };
    let _OPPOSITE = { "E": "W", "W": "E", "N": "S", "S": "N" };


    return Object.assign( _grid, {

        N: _N,
        S: _S,
        E: _E,
        W: _W,

        getNeighborDirs: function( x, y ) {
            // Classic ignores x and y, but other derived classes may not
            return [ _N, _S, _E, _W ];
        },
        markVisited: function( x, y )  {
            return this.set( x,y, this.get(x,y) | VISITED );
            return true;
        },
        visited: function(x, y) {
            if(!this.isCell(x, y)) { return false; }
            return ( ( this.get(x,y) & VISITED ) != 0 );
        },
        hasConnections: function(x, y) {
            // Need to discount visited flag, etc
            let cell = this.get(x,y);
            if(!cell) { return false; }
            let list = this.getNeighborDirs(x, y);
            for(var dir in list) {
                console.log(cell, dir, cell & dir);
                if((cell & dir) != 0) {
                    return true;
                }
            }
            return false;
        },
        getNeighbor: function(x, y, dir) {
            if(!this.isCell(x, y)) { return null; }
            // dir must be string and in dirmap
            if(!_DIR_MAP[dir]) { return null; }
            var nx = x + _DX[dir];
            var ny = y + _DY[dir];
            if(!this.isCell(nx, ny)) { 
                return null; 
            }
            return { x: nx, y: ny }
        },
        connect: function( x, y, dir ) {
            // dir must be string
            // Connect cell to neighbor (one way)}
            if(!this.getNeighbor(x,y,dir)) return false;
            return this.set(x, y, this.get(x,y) | _DIR_MAP[dir]);
        },
        connectUndirected: function( x, y, dir) {
            // dir must be a string
            if(!this.connect(x, y, dir)) { 
                return false; 
            }
            var n = this.getNeighbor(x, y, dir);
            if(!this.connect( n.x, n.y, _OPPOSITE[dir])) {
                return false;
            }
            return true;
    }
    });
};
