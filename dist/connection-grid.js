(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}(g.MitchAllen || (g.MitchAllen = {})).ConnectionGrid = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
/**
    Module: @mitchallen/connection-grid/lib/base.js
    Author: Mitch Allen
*/

/*jshint node: true */
/*jshint esversion: 6 */

"use strict";

var shuffleFactory = _dereq_("@mitchallen/shuffle");

module.exports = function (spec) {

    spec = spec || {};
    var _grid = spec.grid;
    var _DIR_MAP = spec.dirMap || {};
    var _OPPOSITE = spec.oppositeMap || {};

    if (!_grid) {
        return null;
    }

    // bit masks
    var VISITED = 0x01;
    var MASKED = 0x02;

    Object.defineProperties(_grid, {
        "dirMap": {
            writeable: false,
            value: _DIR_MAP,
            enumerable: true,
            configurable: true
        }
    });

    return Object.assign(_grid, {

        isDir: function isDir(dir) {
            if (typeof dir === 'string') {
                return _DIR_MAP[dir] !== undefined;
            }
            return false;
        },
        getOppositeDir: function getOppositeDir(dir) {
            if (!this.isDir(dir)) {
                return null;
            }
            return _OPPOSITE[dir];
        },
        getNeighbor: function getNeighbor(x, y, dir) {
            // derived should override
            console.log("getNeighbor should be overriden by derived class");
            return null;
        },
        getNeighborDirs: function getNeighborDirs(x, y) {
            // derived should override
            // Classic ignores x and y, but other derived classes may not
            console.log("getNeighborDirs should be overriden by derived class");
            return [];
        },
        getShuffledNeighborDirs: function getShuffledNeighborDirs(x, y) {
            var shuffler = shuffleFactory.create({ array: this.getNeighborDirs(x, y) });
            return shuffler.shuffle();
        },
        markVisited: function markVisited(x, y) {
            return this.set(x, y, this.get(x, y) | VISITED);
        },
        visited: function visited(x, y) {
            if (!this.isCell(x, y)) {
                return false;
            }
            return (this.get(x, y) & VISITED) !== 0;
        },
        mask: function mask(x, y) {
            return this.set(x, y, this.get(x, y) | MASKED);
        },
        isMasked: function isMasked(x, y) {
            if (!this.isCell(x, y)) {
                return false;
            }
            return (this.get(x, y) & MASKED) !== 0;
        },
        hasConnections: function hasConnections(x, y) {
            // Need to discount visited flag, etc
            var cell = this.get(x, y);
            if (cell === null) {
                return false;
            }
            if (cell === 0) {
                return false;
            }
            var list = this.getNeighborDirs(x, y);
            for (var key in list) {
                var sDir = list[key];
                if (!this.isDir(sDir)) {
                    console.error("hasConnections unknown direction: ", sDir);
                    return false;
                }
                var iDir = _DIR_MAP[sDir];
                if ((cell & iDir) !== 0) {
                    return true;
                }
            }
            return false;
        },
        connect: function connect(x, y, dir) {
            // dir must be string
            // Connect cell to neighbor (one way)}
            if (!this.getNeighbor(x, y, dir)) return false;
            return this.set(x, y, this.get(x, y) | _DIR_MAP[dir]);
        },
        connectUndirected: function connectUndirected(x, y, sDir) {
            // dir must be a string
            if (!this.connect(x, y, sDir)) {
                return false;
            }
            var n = this.getNeighbor(x, y, sDir);
            if (!this.connect(n.x, n.y, _OPPOSITE[sDir])) {
                return false;
            }
            return true;
        },
        connects: function connects(x, y, sDir) {
            if (!this.isDir(sDir)) {
                console.error("connects unknown direction: ", sDir);
                return false;
            }
            var cell = this.get(x, y);
            if (cell === null) {
                return false;
            }
            var iDir = _DIR_MAP[sDir];
            return (cell & iDir) !== 0;
        },
        connectsAny: function connectsAny(x, y, list) {
            var _this = this;

            var connects = false;
            list.forEach(function (el) {
                if (_this.connects(x, y, el)) {
                    connects = true;
                }
            });
            return connects;
        }
    });
};

},{"@mitchallen/shuffle":8}],2:[function(_dereq_,module,exports){
/**
    Module: @mitchallen/connection-grid/lib/circle.js
    Author: Mitch Allen
*/

/*jshint node: true */
/*jshint esversion: 6 */

"use strict";

var gridFactory = _dereq_("@mitchallen/grid"),
    baseGrid = _dereq_("./base");

module.exports = function (spec) {

    spec = spec || {};
    var _rings = spec.rings || 0;

    var _grid = gridFactory.Circle({
        rings: _rings
    });

    if (!_grid) {
        return null;
    }

    _grid.fill(0);

    var _dirMap = {
        "CCW": 0x010, // Counter-Clockwise 
        "CW": 0x020, // Clockwise
        "A": 0x040, // Away from Center (1:1)
        "T": 0x080, // Toward Center (1:1)
        "A0": 0x100, // Away 0 (2:1)
        "T0": 0x200, // Toward 0 (2:1)
        "A1": 0x400, // Away 1 
        "T1": 0x800 // Toward
    };

    var _oppositeMap = {
        "CCW": "CW",
        "CW": "CCW",
        "A": "T",
        "T": "A",
        "A0": "T0",
        "T0": "A0",
        "A1": "T1",
        "T1": "A1"
    };

    var obj = baseGrid({
        grid: _grid,
        dirMap: _dirMap,
        oppositeMap: _oppositeMap
    });

    Object.assign(obj, {
        getNeighborDirs: function getNeighborDirs(ring, pos) {
            // Classic ignores x and y, but other derived classes may not
            // return [ "N", "S", "E", "W" ];

            if (ring === 0 && pos === 0) {
                // one neighbor, away from center.
                // center may be expanded to have more than one as an option
                return ["A0"];
            }

            if (ring === 1 && pos !== 0) {
                // Ring 1 - only let 0 connect to center (for now)
                return ["CCW", "CW", "A0", "A1"];
            }

            var aSize = this.ringSize(ring + 1); // 0 means current ring is outer
            var rSize = this.ringSize(ring);
            var tSize = this.ringSize(ring - 1);

            if (rSize === tSize) {
                // | * |
                // | T |
                if (aSize === 0) {
                    // Current ring is outer ring
                    // | CCW | * | CW |
                    //       | T |
                    return ["CCW", "CW", "T"];
                }
                if (aSize > rSize) {
                    // |     | A0 | A1 |
                    // | CCW |    *    | CW |
                    //       |    T    |
                    return ["CCW", "CW", "A0", "A1", "T"];
                }
                //       | A |
                // | CCW | * | CW |
                //       | T |
                return ["CCW", "CW", "A", "T"];
            }
            // | *? | *? |
            // | T0 | T1 |  
            if (pos % 2 === 0) {
                // | * |  |
                // | T0   |
                if (aSize === 0) {
                    // | CCW | * | CW |
                    //       | T0     |
                    return ["CCW", "CW", "T0"];
                }
                if (aSize > rSize) {
                    // |     | A0 | A1 |
                    // | CCW |    *    | CW |
                    //       | T0           |
                    return ["CCW", "CW", "A0", "A1", "T0"];
                }
                // |     | A  |
                // | CCW | *  | CW |
                //       | T0      |
                return ["CCW", "CW", "A", "T0"];
            }

            // |   | *  |
            // |     T1 |
            if (aSize === 0) {
                // | CCW | * | CW |
                // |      T1 |
                return ["CCW", "CW", "T1"];
            }
            if (aSize > rSize) {
                // |     | A0 | A1 |
                // | CCW |    *    | CW |
                // |          T1   |
                return ["CCW", "CW", "A0", "A1", "T1"];
            }
            // |     | A  |
            // | CCW | *  | CW |
            // |       T1 |
            return ["CCW", "CW", "A", "T1"];
        },
        getNeighbor: function getNeighbor(ring, pos, dir) {
            if (!this.isCell(ring, pos)) {
                return null;
            }
            // dir must be string and in dirmap
            if (!this.isDir(dir)) {
                return null;
            }

            var ringSize = this.ringSize(ring);
            // nr = 0, // neighbor ring
            // np = 0; // neighbor position

            var NEIGHBOR_MAP = {
                "CCW": { x: ring, y: pos === 0 ? ringSize - 1 : pos - 1 },
                "CW": { x: ring, y: (pos + 1) % ringSize },
                "A": { x: ring + 1, y: pos },
                "A0": { x: ring + 1, y: pos * 2 },
                "A1": { x: ring + 1, y: pos * 2 + 1 },
                "T": { x: ring - 1, y: pos },
                "T0": { x: ring - 1, y: pos / 2 },
                "T1": { x: ring - 1, y: (pos - 1) / 2 }
            };

            var nc = NEIGHBOR_MAP[dir];

            if (!nc) {
                return null;
            }

            if (!this.isCell(nc.x, nc.y)) {
                return null;
            }

            return nc;
        }
    });

    return obj;
};

},{"./base":1,"@mitchallen/grid":7}],3:[function(_dereq_,module,exports){
/**
    Module: @mitchallen/connection-grid/lib/hexagon.js
    Author: Mitch Allen
*/

/*jshint node: true */
/*jshint esversion: 6 */

"use strict";

var gridFactory = _dereq_("@mitchallen/grid"),
    baseGrid = _dereq_("./base");

module.exports = function (spec) {

    spec = spec || {};
    var _x = spec.x || 0;
    var _y = spec.y || 0;

    var _grid = gridFactory.Hexagon({
        x: _x,
        y: _y
    });

    if (!_grid) {
        return null;
    }

    _grid.fill(0);

    var _dirMap = {
        "N": 0x010,
        "S": 0x020,
        "E": 0x040,
        "W": 0x080,
        "NW": 0x100,
        "NE": 0x200,
        "SW": 0x400,
        "SE": 0x800 };

    var _oppositeMap = {
        "N": "S", "S": "N", "E": "W", "W": "E",
        "NE": "SW", "NW": "SE", "SE": "NW", "SW": "NE"
    };

    var obj = baseGrid({
        grid: _grid,
        dirMap: _dirMap,
        oppositeMap: _oppositeMap
    });

    Object.assign(obj, {
        getNeighborDirs: function getNeighborDirs(x, y) {
            // Classic ignores x and y, but other derived classes may not
            // return [ "N", "S", "E", "W" ];
            if (x % 2 === 0) {
                return ["N", "S", "E", "W", "NW", "NE"];
            }
            return ["N", "S", "E", "W", "SW", "SE"];
        },
        getNeighbor: function getNeighbor(x, y, dir) {
            if (!this.isCell(x, y)) {
                return null;
            }
            // dir must be string and in dirmap
            if (!this.isDir(dir)) {
                return null;
            }
            var _DX = {
                "E": 1, "NE": 1, "SE": 1,
                "W": -1, "NW": -1, "SW": -1,
                "N": 0, "S": 0
            };
            var _DY = {
                "S": 1, "SE": 1, "SW": 1,
                "N": -1, "NE": -1, "NW": -1,
                "E": 0, "W": 0
            };
            var nx = x + _DX[dir];
            var ny = y + _DY[dir];
            if (!this.isCell(nx, ny)) {
                return null;
            }
            return { x: nx, y: ny };
        }
    });

    return obj;
};

},{"./base":1,"@mitchallen/grid":7}],4:[function(_dereq_,module,exports){
/**
    Module: @mitchallen/connection-grid
    Author: Mitch Allen
*/

/*jshint node: true */
/*jshint esversion: 6 */

"use strict";

var gridFactory = _dereq_("@mitchallen/grid"),
    baseGrid = _dereq_('./base'),
    squareGrid = _dereq_('./square'),
    hexagonGrid = _dereq_('./hexagon'),
    circleGrid = _dereq_('./circle'),
    triangleGrid = _dereq_('./triangle');

var createGrid = function createGrid(spec) {
    console.warn("@mitchallen/connection-grid: .create is deprecated. Use .Square instead.");
    return squareGrid(spec);
};

module.exports = {
    create: createGrid,
    Square: squareGrid,
    Hexagon: hexagonGrid,
    Circle: circleGrid,
    Triangle: triangleGrid
};

},{"./base":1,"./circle":2,"./hexagon":3,"./square":5,"./triangle":6,"@mitchallen/grid":7}],5:[function(_dereq_,module,exports){
/**
    Module: @mitchallen/connection-grid/lib/square.js
    Author: Mitch Allen
*/

/*jshint node: true */
/*jshint esversion: 6 */

"use strict";

var gridFactory = _dereq_("@mitchallen/grid"),
    baseGrid = _dereq_("./base");

module.exports = function (spec) {

    spec = spec || {};
    var _x = spec.x || 0;
    var _y = spec.y || 0;

    var _grid = gridFactory.Square({
        x: _x,
        y: _y
    });

    if (!_grid) {
        return null;
    }

    _grid.fill(0);

    var _dirMap = {
        "N": 0x010,
        "S": 0x020,
        "E": 0x040,
        "W": 0x080 };

    var _oppositeMap = { "E": "W", "W": "E", "N": "S", "S": "N" };

    var obj = baseGrid({
        grid: _grid,
        dirMap: _dirMap,
        oppositeMap: _oppositeMap
    });

    Object.assign(obj, {
        getNeighbor: function getNeighbor(x, y, dir) {
            if (!this.isCell(x, y)) {
                return null;
            }
            // dir must be string and in dirmap
            if (!this.isDir(dir)) {
                return null;
            }
            var _DX = { "E": 1, "W": -1, "N": 0, "S": 0 };
            var _DY = { "E": 0, "W": 0, "N": -1, "S": 1 };
            var nx = x + _DX[dir];
            var ny = y + _DY[dir];
            if (!this.isCell(nx, ny)) {
                return null;
            }
            return { x: nx, y: ny };
        },
        getNeighborDirs: function getNeighborDirs(x, y) {
            // Classic ignores x and y, but other derived classes may not
            return ["N", "S", "E", "W"];
        }
    });

    return obj;
};

},{"./base":1,"@mitchallen/grid":7}],6:[function(_dereq_,module,exports){
/**
    Module: @mitchallen/connection-grid/lib/triangle.js
    Author: Mitch Allen
*/

/*jshint node: true */
/*jshint esversion: 6 */

"use strict";

var gridFactory = _dereq_("@mitchallen/grid"),
    baseGrid = _dereq_("./base");

module.exports = function (spec) {

    spec = spec || {};
    var _x = spec.x || 0;
    var _y = spec.y || 0;

    var _grid = gridFactory.Square({
        x: _x,
        y: _y
    });

    if (!_grid) {
        return null;
    }

    _grid.fill(0);

    var UP = 0x01,
        DOWN = 0x02;

    var _dirMap = {
        "N": 0x010,
        "S": 0x020,
        "E": 0x040,
        "W": 0x080 };

    var _oppositeMap = { "E": "W", "W": "E", "N": "S", "S": "N" };

    var obj = baseGrid({
        grid: _grid,
        dirMap: _dirMap,
        oppositeMap: _oppositeMap
    });

    Object.assign(obj, {
        getNeighbor: function getNeighbor(x, y, dir) {
            if (!this.isCell(x, y)) {
                return null;
            }
            // dir must be string and in dirmap
            if (!this.isDir(dir)) {
                return null;
            }
            var _DX = { "E": 1, "W": -1, "N": 0, "S": 0 };
            var _DY = { "E": 0, "W": 0, "N": -1, "S": 1 };
            var nx = x + _DX[dir];
            var ny = y + _DY[dir];
            if (!this.isCell(nx, ny)) {
                return null;
            }
            return { x: nx, y: ny };
        },
        getNeighborDirs: function getNeighborDirs(x, y) {

            var tDir = (x + y) % 2 === 0 ? UP : DOWN;
            /*
                list the vertical direction twice. Otherwise the horizontal direction (E/W)
                will be selected more often (66% of the time), resulting in mazes with a
                horizontal bias.
            */
            var vertical = tDir === DOWN ? "N" : "S";

            // return [ vertical, vertical, "E", "W ];
            return [vertical, "E", "W"];
        }
    });

    return obj;
};

},{"./base":1,"@mitchallen/grid":7}],7:[function(_dereq_,module,exports){
(function (global){
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}(g.MitchAllen || (g.MitchAllen = {})).Grid = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof _dereq_=="function"&&_dereq_;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof _dereq_=="function"&&_dereq_;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
/**
    Module: @mitchallen/grid/../base.js
    Author: Mitch Allen
*/

/*jshint node: true */
/*jshint esversion: 6 */

"use strict";

module.exports = function (spec) {

    spec = spec || {};

    var _rows = spec.rows || 0;

    _rows = Math.max(_rows, 0);

    var _array = [];
    while (_array.push([]) < _rows) {}
    if (!_array) {
        return null;
    }

    var obj = Object.create({}, {
        "rows": {
            writeable: false,
            value: _rows,
            enumerable: true
        }
    });

    return Object.assign(obj, {

        log: function log() {
            console.log("size: %d: ", _rows);
            console.log(_array);
        },
        rowSize: function rowSize(row) {
            if (row < 0 || row >= _rows) {
                return 0;
            }
            return _array[row].length;
        },
        isCell: function isCell(a, b) {
            var rs = this.rowSize(a);
            return a >= 0 && a < _rows && b >= 0 && b < rs;
        },
        set: function set(a, b, value) {
            // problem for sparse arrays
            // if(!this.isCell(a,b)) { return false; }
            if (a < 0 || b < 0) return false;
            _array[a][b] = value;
            return true;
        },
        get: function get(a, b) {
            if (!this.isCell(a, b)) {
                return null;
            }
            return _array[a][b];
        },
        fill: function fill(value) {
            for (var row = 0; row < _rows; row++) {
                var rs = this.rowSize(row);
                for (var pos = 0; pos < rs; pos++) {
                    _array[row][pos] = value;
                }
            }
        },
        cloneArray: function cloneArray() {
            var _clone = [];
            while (_clone.push([]) < _rows) {}
            for (var row = 0; row < _rows; row++) {
                var rs = this.rowSize(row);
                for (var pos = 0; pos < rs; pos++) {
                    _clone[row][pos] = _array[row][pos];
                }
            }
            return _clone;
        }
    });
};

},{}],2:[function(_dereq_,module,exports){
/**
    Module: @mitchallen/grid/../square.js
    Author: Mitch Allen
*/

/*jshint node: true */
/*jshint esversion: 6 */

"use strict";

var baseGrid = _dereq_('./base');

module.exports = function (spec) {

    spec = spec || {};

    var _rings = spec.rings || 0;

    _rings = Math.max(_rings, 0);

    var obj = baseGrid({ rows: _rings });

    // prepare grid

    // Single cell on row 0.
    obj.set(0, 0, 0);

    // rings are rows
    var rowHeight = 1.0 / _rings;

    for (var i = 1; i < _rings; i++) {
        // console.log("row: %d", i );
        var radius = i / _rings;
        // console.log(" ... row: %d, radius: %d", i, radius );
        var circumference = 2 * Math.PI * radius;
        // console.log(" ... circumference:", circumference );
        var previousCount = obj.rowSize(i - 1);
        // console.log(" ... previousCount:", previousCount );
        var estimatedCellWidth = circumference / previousCount;
        // console.log(" ... estimatedCellWidth:", estimatedCellWidth );
        var ratio = Math.round(estimatedCellWidth / rowHeight);
        // console.log(" ... ratio:", ratio );
        var cells = previousCount * ratio;
        // console.log(" ... cells:", cells );
        for (var j = 0; j < cells; j++) {
            // _array[i].push(0);
            obj.set(i, j, 0);
        }
        // console.log(_array[i]);
    }

    Object.defineProperties(obj, {
        "rings": {
            writeable: false,
            value: _rings,
            enumerable: true
        }
    });

    return Object.assign(obj, {
        ringSize: function ringSize(ring) {
            // rings equal rows in base class
            return this.rowSize(ring);
        }
    });
};

},{"./base":1}],3:[function(_dereq_,module,exports){
/**
    Module: @mitchallen/grid
    Author: Mitch Allen
*/

/*jshint node: true */
/*jshint esversion: 6 */

"use strict";

var baseGrid = _dereq_('./base'),
    squareGrid = _dereq_('./square'),
    circleGrid = _dereq_('./circle');

var createGrid = function createGrid(spec) {
    console.warn("@mitchallen/grid: .create is deprecated. Use .Square instead.");
    return squareGrid(spec);
};

module.exports = {
    create: createGrid,
    Square: squareGrid,
    Circle: circleGrid,
    // For future expansion (mapped to square for now)
    Hexagon: squareGrid,
    Triangle: squareGrid
};

},{"./base":1,"./circle":2,"./square":4}],4:[function(_dereq_,module,exports){
/**
    Module: @mitchallen/grid/../square.js
    Author: Mitch Allen
*/

/*jshint node: true */
/*jshint esversion: 6 */

"use strict";

var baseGrid = _dereq_('./base');

module.exports = function (spec) {

    spec = spec || {};

    var _x = spec.x || 0;
    var _y = spec.y || 0;

    _x = Math.max(_x, 0);
    _y = Math.max(_y, 0);

    var obj = baseGrid({ rows: _x });

    for (var row = 0; row < _x; row++) {
        for (var col = 0; col < _y; col++) {
            obj.set(row, col, 0);
        }
    }

    Object.defineProperties(obj, {
        "xSize": {
            writeable: false,
            value: _x,
            enumerable: true
        },
        "ySize": {
            writeable: false,
            value: _y,
            enumerable: true
        }
    });

    return obj;
};

},{"./base":1}]},{},[3])(3)
});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],8:[function(_dereq_,module,exports){
(function (global){
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}(g.MitchAllen || (g.MitchAllen = {})).Shuffle = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof _dereq_=="function"&&_dereq_;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof _dereq_=="function"&&_dereq_;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
/**
    Module: @mitchallen/shuffle
    Author: Mitch Allen
*/

/*jshint node: true */
/*jshint esversion: 6 */

"use strict";

module.exports.create = function (spec) {
    if (!spec) {
        return null;
    }
    if (!spec.array) {
        return null;
    }
    var _array = spec.array.slice(0);
    return {
        shuffle: function shuffle() {
            var i = 0,
                j = 0,
                temp = null;
            for (i = _array.length - 1; i > 0; i -= 1) {
                j = Math.floor(Math.random() * (i + 1));
                temp = _array[i];
                _array[i] = _array[j];
                _array[j] = temp;
            }
            return _array;
        }
    };
};

},{}]},{},[1])(1)
});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[4])(4)
});