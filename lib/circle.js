/**
    Module: @mitchallen/connection-grid/lib/circle.js
    Author: Mitch Allen
*/

/*jshint node: true */
/*jshint esversion: 6 */

"use strict";

var gridFactory = require("@mitchallen/grid"),
    baseGrid = require("../lib/base");

module.exports = (spec) => {

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
                return ["A0"];
            }

            if( ring === 1 && pos !== 0 ) {
                // Ring 1 - only let 0 connect to center (for now)
                return ["CCW", "CW", "A0", "A1" ];
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