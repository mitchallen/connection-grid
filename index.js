/**
    Module: @mitchallen/connection-grid
    Author: Mitch Allen
*/

/*jshint node: true */
/*jshint esversion: 6 */

"use strict";

var gridFactory = require("@mitchallen/grid"),
    shuffleFactory = require("@mitchallen/shuffle");

var baseGrid = (spec) => {

    spec = spec || {};
    var _grid = spec.grid;
    var _DIR_MAP = spec.dirMap || {};
    var _OPPOSITE = spec.oppositeMap || {};

    if(!_grid) {
        return null;
    }

    // bit masks
    let VISITED = 0x01;
    let MASKED  = 0x02;

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

var createGrid = (spec) => {
    console.warn("@mitchallen/grid: .create is deprecated. Use .Square instead.");
    return squareGrid( spec );
};

var squareGrid = (spec) => {

    spec = spec || {};
    let _x = spec.x || 0;
    let _y = spec.y || 0;

    var _grid = gridFactory.Square({
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

    return baseGrid( {
        grid: _grid,
        dirMap: _dirMap,
        oppositeMap: _oppositeMap
    });
};

var hexagonGrid = (spec) => {

    spec = spec || {};
    let _x = spec.x || 0;
    let _y = spec.y || 0;

    var _grid = gridFactory.Hexagon({
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
 
    var obj = baseGrid( {
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
            var nx = x + _DX[dir];
            var ny = y + _DY[dir];
            if(!this.isCell(nx, ny)) { 
                return null; 
            }
            return { x: nx, y: ny };
        },
    });

    return obj;
};

var circleGrid = (spec) => {

    spec = spec || {};
    let _rings = spec.rings || 0;
  
    var _grid = gridFactory.Circle({
        rings: _rings
    });

    if(!_grid) {
        return null;
    }

    _grid.fill(0);

    var _dirMap = { 
        "CCW": 0x010,   // Counter-Clockwise 
         "CW": 0x020,   // Clockwise
          "A": 0x040,   // Away from Center (1:1)
          "T": 0x080,   // Toward Center (1:1)
         "A0": 0x100,   // Away 0 (2:1)
         "T0": 0x200,   // Toward 0 (2:1)
         "A1": 0x400,   // Away 1 
         "T2": 0x800    // Toward
    };

    let _oppositeMap = { 
        "CCW": "CW",
         "CW": "CCW",
          "A": "T",
          "T": "A",
         "A0": "T0",
         "T0": "A0", 
         "A1": "T1",
         "T1": "A1",
    };

    var obj = baseGrid( {
        grid: _grid,
        dirMap: _dirMap,
        oppositeMap: _oppositeMap
    });

    Object.assign( obj, {
        getNeighborDirs: function(ring, pos) {
            // Classic ignores x and y, but other derived classes may not
            // return [ "N", "S", "E", "W" ];

            if( ring === 0 && pos === 0 ) {
                // one neighbor, away from center.
                // center may be expanded to have more than one as an option
                return ["A"];
            }

            var aSize = this.ringSize(ring + 1);    // 0 means current ring is outer
            var rSize = this.ringSize(ring);
            var tSize = this.ringSize(ring - 1);

            if( rSize === tSize ) {
                // | * |
                // | T |
                if( aSize === 0 ) {
                    // Current ring is outer ring
                    // | CCW | * | CW |
                    //       | T |
                    return ["CCW", "CW", "T" ];
                }
                if( aSize > rSize ) {
                    // |     | A0 | A1 |
                    // | CCW |    *    | CW |
                    //       |    T    |
                    return ["CCW", "CW", "A0", "A1", "T" ];
                }
                //       | A |
                // | CCW | * | CW |
                //       | T |
                return ["CCW", "CW", "A", "T" ];
            } 
            // | *? | *? |
            // | T0 | T1 |  
            if( pos % 2 === 0 ) {
                 // | * |  |
                 // | T0   |
                if( aSize === 0 ) {
                    // | CCW | * | CW |
                    //       | T0     |
                    return ["CCW", "CW", "T0" ];
                }
                if( aSize > rSize ) {
                    // |     | A0 | A1 |
                    // | CCW |    *    | CW |
                    //       | T0           |
                    return ["CCW", "CW", "A0", "A1", "T0" ];
                }
                // |     | A  |
                // | CCW | *  | CW |
                //       | T0      |
                return ["CCW", "CW", "A", "T0" ];
            }

            // |   | *  |
            // |     T1 |
            if( aSize === 0 ) {
                // | CCW | * | CW |
                // |      T1 |
                return ["CCW", "CW", "T1" ];
            }
            if( aSize > rSize ) {
                // |     | A0 | A1 |
                // | CCW |    *    | CW |
                // |          T1   |
                return ["CCW", "CW", "A0", "A1", "T1" ];
            }
            // |     | A  |
            // | CCW | *  | CW |
            // |       T1 |
            return ["CCW", "CW", "A", "T1" ];
        },
        getNeighbor: function(ring, pos, dir) {
            if(!this.isCell(ring, pos)) { return null; }
            // dir must be string and in dirmap
            if(!this.isDir(dir)) { return null; }

            var ringSize = this.ringSize(ring),
                nr = 0, // neighbor ring
                np = 0; // neighbor position

            switch(dir) {
                case "CCW":
                    nr = ring;
                    np = pos === 0 ? ringSize - 1 : pos - 1;
                    break;
                case "CW":
                    nr = ring;
                    np = pos === ringSize ? 0 : pos + 1;
                    break;
                case "A":
                    if( ring >= ringSize ) {
                        console.error("A neighbor set for outerring");
                        return;
                    }
                    nr = ring + 1;
                    np = pos;
                    break;
                case "A0":
                    if( ring >= ringSize ) {
                        console.error("A0 neighbor set for outerring");
                        return;
                    }
                    nr = ring + 1;
                    np = pos * 2;
                    break;
                case "A1":
                    if( ring >= ringSize ) {
                        console.error("A1 neighbor set for outerring");
                        return;
                    }
                    nr = ring + 1;
                    np = pos * 2 + 1;
                    break;
                case "T":
                    if( ring === 0 ) {
                        console.error("T neighbor set for center");
                        return;
                    }
                    nr = ring - 1;
                    np = pos;
                    break;
                case "T0":
                    if( ring === 0 ) {
                        console.error("T0 neighbor set for center");
                        return;
                    }
                    nr = ring - 1;
                    np = pos / 2;
                    break;
                case "T0":
                    if( ring === 0 ) {
                        console.error("T0 neighbor set for center");
                        return;
                    }
                    nr = ring - 1;
                    np = (pos - 1) / 2;
                    break;
                default: 
                    break;
            }

            if(!this.isCell(nr, np)) { 
                return null; 
            }
            // return x and y for now.
            return { x: nr, y: np };
        },
    });

    return obj;

};

module.exports = {
    create: createGrid,
    Square: squareGrid,
    Hexagon: hexagonGrid,
    Circle: circleGrid
};
