/**
    Module: @mitchallen/connection-grid/src/circle.js
    Author: Mitch Allen
*/

/*jshint node: true */
/*jshint esversion: 6 */

"use strict";

let gridFactory = require("@mitchallen/grid"),
    baseGrid = require("@mitchallen/connection-grid-core").create;

module.exports = (spec) => {

    spec = spec || {};
    let _rings = spec.rings || 0;
  
    let _grid = gridFactory.Circle({
        rings: _rings
    });

    if(!_grid) {
        return null;
    }

    _grid.fill(0);

    let _dirMap = { 
        "CCW": 0x010,   // Counter-Clockwise 
         "CW": 0x020,   // Clockwise
          "A": 0x040,   // Away from Center (1:1)
          "T": 0x080,   // Toward Center (1:1)
         "A0": 0x100,   // Away 0 (2:1)
         "T0": 0x200,   // Toward 0 (2:1)
         "A1": 0x400,   // Away 1 
         "T1": 0x800    // Toward
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

    let obj = baseGrid( {
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

            let aSize = this.ringSize(ring + 1);    // 0 means current ring is outer
            let rSize = this.ringSize(ring);
            let tSize = this.ringSize(ring - 1);

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

            let ringSize = this.ringSize(ring);
                // nr = 0, // neighbor ring
                // np = 0; // neighbor position

            let NEIGHBOR_MAP = {
                "CCW": { x: ring,     y: pos === 0 ? ringSize - 1 : pos - 1 },
                 "CW": { x: ring,     y: (pos + 1) % ringSize },
                  "A": { x: ring + 1, y: pos },
                 "A0": { x: ring + 1, y: pos * 2 },
                 "A1": { x: ring + 1, y: pos * 2 + 1 },
                  "T": { x: ring - 1, y: pos },
                 "T0": { x: ring - 1, y: pos / 2 },
                 "T1": { x: ring - 1, y: (pos - 1) / 2 }
            };

            let nc = NEIGHBOR_MAP[dir];

            if(!nc) {
                return null;
            }

            if(!this.isCell(nc.x, nc.y)) { 
                return null; 
            }

            return nc;
        },
    });

    return obj;

};