/**
    Module: @mitchallen/connection-grid
    Author: Mitch Allen
*/

/*jshint node: true */
/*jshint esversion: 6 */

"use strict";

var gridFactory = require("@mitchallen/grid"),
    shuffleFactory = require("@mitchallen/shuffle");

module.exports.create = (spec) => {

    spec = spec || {};
    let _x = spec.x || 0;
    let _y = spec.y || 0;

    let _gridSpec = {
        x: _x,
        y: _y
    };
    var _grid = gridFactory.Square(_gridSpec);
    if(!_grid) {
        return null;
    }
    _grid.fill(0);

    // bit masks
    let VISITED = 0x01;
    let MASKED  = 0x02;

    let _DIR_MAP = { 
        "N": 0x010, 
        "S": 0x020, 
        "E": 0x040, 
        "W": 0x080 };

    // let NW = 0x100
    // let NE = 0x200
    // let SW = 0x400
    // let SE = 0x800

    // Default square configuration
    let _DX = { "E": 1, "W": -1, "N": 0, "S": 0 };
    let _DY = { "E": 0, "W": 0, "N": -1, "S": 1 };
    let _OPPOSITE = { "E": "W", "W": "E", "N": "S", "S": "N" };

    Object.defineProperties( _grid, {
        "dirMap": {
            writeable: false,
            value: _DIR_MAP,
            enumerable: true,
            configurable: true
        },
    });

    return Object.assign( _grid, {

        isDir: function(dir) {
            if(typeof dir === 'string') {
                return(_DIR_MAP[dir]!==null);
            }
            return false;
        },
        getOppositeDir: function(dir) {
            if(!this.isDir(dir)) { return null; }
            return _OPPOSITE[dir];
        },
        getNeighbor: function(x, y, dir) {
            if(!this.isCell(x, y)) { return null; }
            // dir must be string and in dirmap
            if(!this.isDir(dir)) { return null; }
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
        getShuffledNeighborDirs: function( x, y ) {
            var shuffler = shuffleFactory.create( { array: this.getNeighborDirs(x,y) } );
            return shuffler.shuffle();
        },
        markVisited: function( x, y )  {
            return this.set( x,y, this.get(x,y) | VISITED );
        },
        visited: function(x, y) {
            if(!this.isCell(x, y)) { return false; }
            return ( ( this.get(x,y) & VISITED ) !== 0 );
        },
        mask: function( x, y )  {
            return this.set( x,y, this.get(x,y) | MASKED );
        },
        isMasked: function( x, y )  {
            if(!this.isCell(x, y)) { return false; }
            return ( ( this.get(x,y) & MASKED ) !== 0 );
        },
        hasConnections: function(x, y) {
            // Need to discount visited flag, etc
            let cell = this.get(x,y);
            if(cell===null) { return false; }
            if(cell===0) { return false;}
            let list = this.getNeighborDirs(x, y);
            for(var key in list) {
                let sDir = list[key];
                if(!this.isDir(sDir)) {
                    console.error("hasConnections unknown direction: ", sDir);
                    return false;
                }
                var iDir = _DIR_MAP[sDir];
                if((cell & iDir) !== 0) {
                    return true;
                }
            }
            return false;
        },
        connect: function( x, y, dir ) {
            // dir must be string
            // Connect cell to neighbor (one way)}
            if(!this.getNeighbor(x,y,dir)) return false;
            return this.set(x, y, this.get(x,y) | _DIR_MAP[dir]);
        },
        connectUndirected: function(x, y, sDir) {
            // dir must be a string
            if(!this.connect(x, y, sDir)) { 
                return false; 
            }
            var n = this.getNeighbor(x, y, sDir);
            if(!this.connect( n.x, n.y, _OPPOSITE[sDir])) {
                return false;
            }
            return true;
        },
        connects: function(x,y,sDir) {
            if(!this.isDir(sDir)) {
                console.error("connects unknown direction: ", sDir);
                return false;
            }
            let cell = this.get(x,y);
            if(cell===null) { return false; }
            var iDir = _DIR_MAP[sDir];
            return((cell & iDir) !== 0);
        }
    });
};
