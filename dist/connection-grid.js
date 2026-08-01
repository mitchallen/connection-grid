"use strict";
var MitchAllen = MitchAllen || {};
MitchAllen.ConnectionGrid = (() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    try {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    } catch (e) {
      throw mod = 0, e;
    }
  };

  // node_modules/@mitchallen/grid-square/dist/grid-square.js
  var require_grid_square = __commonJS({
    "node_modules/@mitchallen/grid-square/dist/grid-square.js"(exports, module) {
      "use strict";
      var __getOwnPropNames2 = Object.getOwnPropertyNames;
      var __commonJS2 = (cb, mod) => function __require() {
        try {
          return mod || (0, cb[__getOwnPropNames2(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
        } catch (e) {
          throw mod = 0, e;
        }
      };
      var require_grid_core_cjs2 = __commonJS2({
        "node_modules/@mitchallen/grid-core/dist/grid-core.cjs.js"(exports2, module2) {
          "use strict";
          module2.exports.create = (u = {}) => {
            let { rows: t = 0 } = u;
            t = Math.max(t, 0);
            for (var i = []; i.push([]) < t; ) ;
            var a = Object.create({}, { rows: { writeable: false, value: t, enumerable: true } });
            return Object.assign(a, { log: function() {
              console.log("size: %d: ", t), console.log(i);
            }, rowSize: function(e) {
              return e < 0 || e >= t ? 0 : i[e].length;
            }, isCell: function(e, r) {
              var l = this.rowSize(e);
              return e >= 0 && e < t && r >= 0 && r < l;
            }, set: function(e, r, l) {
              return e < 0 || r < 0 ? false : (i[e][r] = l, true);
            }, get: function(e, r) {
              return this.isCell(e, r) ? i[e][r] : null;
            }, fill: function(e) {
              for (var r = 0; r < t; r++) for (var l = this.rowSize(r), n = 0; n < l; n++) i[r][n] = e;
            }, cloneArray: function() {
              for (var e = []; e.push([]) < t; ) ;
              for (var r = 0; r < t; r++) for (var l = this.rowSize(r), n = 0; n < l; n++) e[r][n] = i[r][n];
              return e;
            } });
          };
        }
      });
      var coreGrid = require_grid_core_cjs2();
      module.exports.create = (spec = {}) => {
        let {
          x: _x = 0,
          y: _y = 0
        } = spec;
        _x = Math.max(_x, 0);
        _y = Math.max(_y, 0);
        var obj = coreGrid.create({ rows: _x });
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
    }
  });

  // node_modules/@mitchallen/shuffle/dist/shuffle.cjs.js
  var require_shuffle_cjs = __commonJS({
    "node_modules/@mitchallen/shuffle/dist/shuffle.cjs.js"(exports, module) {
      "use strict";
      module.exports.create = (a) => {
        if (!a || !a.array) return null;
        var r = a.array.slice(0);
        return { shuffle: function() {
          var t = 0, n = 0, e = null;
          for (t = r.length - 1; t > 0; t -= 1) n = Math.floor(Math.random() * (t + 1)), e = r[t], r[t] = r[n], r[n] = e;
          return r;
        } };
      };
    }
  });

  // node_modules/@mitchallen/connection-grid-core/src/index.js
  var require_src = __commonJS({
    "node_modules/@mitchallen/connection-grid-core/src/index.js"(exports, module) {
      "use strict";
      var shuffleFactory = require_shuffle_cjs();
      module.exports.create = (spec) => {
        spec = spec || {};
        var _grid = spec.grid;
        var _DIR_MAP = spec.dirMap || {};
        var _OPPOSITE = spec.oppositeMap || {};
        if (!_grid) {
          return null;
        }
        let VISITED = 1;
        let MASKED = 2;
        let RED = 4;
        let GREEN = 8;
        Object.defineProperties(_grid, {
          "dirMap": {
            writeable: false,
            value: _DIR_MAP,
            enumerable: true,
            configurable: true
          }
        });
        return Object.assign(_grid, {
          /** Returns true if string is found in DIR_MAP array.
            * @param {string} dir A string representing a direction
            * @function
            * @instance
            * @memberof module:connection-grid-core
            * @returns {boolean}
            * @example <caption>usage</caption>
            * if(core.isDir("N")) ...
           */
          isDir: function(dir) {
            if (typeof dir === "string") {
              return _DIR_MAP[dir] !== void 0;
            }
            return false;
          },
          /** Returns opposite direction based on OPPOSITE array.
            * @param {string} dir A string representing a direction
            * @function
            * @instance
            * @memberof module:connection-grid-core
            * @returns {string}
            * @example <caption>usage</caption>
            * core.getOppositeDir("N").should.eql("S");
           */
          getOppositeDir: function(dir) {
            if (!this.isDir(dir)) {
              return null;
            }
            return _OPPOSITE[dir];
          },
          /** Returns the neighbor in a particular direction for a cell at x,y.
            * <b>This should be overriden by derived class</b>
            * @param {number} x The x coordinate
            * @param {number} y The y coordinate
            * @param {string} dir A string representing a direction
            * @function
            * @instance
            * @memberof module:connection-grid-core
            * @returns {string}
            * @example <caption>usage</caption>
            * var neighbor = core.getNeighbor(1,2,"N");
           */
          getNeighbor: function(x, y, dir) {
            console.log("getNeighbor should be overriden by derived class");
            return null;
          },
          /** Returns the neighbor directions for a cell at x,y.
            * <b>This should be overriden by derived class</b>.
            * Classic square grids ignore x and y, but other derived classes, like hexagon, may not.
            * @param {number} x The x coordinate
            * @param {number} y The y coordinate
            * @function
            * @instance
            * @memberof module:connection-grid-core
            * @example <caption>usage</caption>
            * var neighbors = core.getNeighborDirs(1,2);
           */
          getNeighborDirs: function(x, y) {
            console.log("getNeighborDirs should be overriden by derived class");
            return [];
          },
          /** Returns a shuffled list of neighbors for a cell at x,y.
            * Useful for generating random mazes.
            * @param {number} x The x coordinate
            * @param {number} y The y coordinate
            * @function
            * @instance
            * @memberof module:connection-grid-core
            * @example <caption>usage</caption>
            * var neighbors = core.getShuffledNeighborDirs(1,2);
           */
          getShuffledNeighborDirs: function(x, y) {
            var shuffler = shuffleFactory.create({ array: this.getNeighborDirs(x, y) });
            return shuffler.shuffle();
          },
          /** Sets a flag in a cell at x,y
              * @param {number} x The x coordinate
              * @param {number} y The y coordinate
              * @function
              * @instance
              * @returns {boolean}
              * @memberof module:connection-grid-core
              * @example <caption>usage</caption>
              * core.setFlag(1,2,VISITED);
             */
          setFlag: function(x, y, flag) {
            if (!this.isCell(x, y)) {
              return false;
            }
            return this.set(x, y, this.get(x, y) | flag);
          },
          /** Clears a flag from cell
             * @param {number} x The x coordinate
             * @param {number} y The y coordinate
             * @function
             * @instance
             * @returns {boolean}
             * @memberof module:connection-grid-core
             * @example <caption>usage</caption>
             * core.clearFlag(1,2,flag);
            */
          clearFlag: function(x, y, flag) {
            if (!this.isCell(x, y)) {
              return false;
            }
            return this.set(x, y, this.get(x, y) & ~flag);
          },
          /** Returns true if a cell at x,y exists and flag has been set.
           * @param {number} x The x coordinate
           * @param {number} y The y coordinate
           * @function
           * @instance
           * @returns {boolean}
           * @memberof module:connection-grid-core
           * @example <caption>usage</caption>
           * if(core.isFlagSet(x,y,VISITED)) ...
          */
          isFlagSet: function(x, y, flag) {
            if (!this.isCell(x, y)) {
              return false;
            }
            return (this.get(x, y) & flag) !== 0;
          },
          /** Marks a cell at x,y as visited.
            * @param {number} x The x coordinate
            * @param {number} y The y coordinate
            * @function
            * @instance
            * @returns {boolean}
            * @memberof module:connection-grid-core
            * @example <caption>usage</caption>
            * core.markVisited(1,2);
           */
          markVisited: function(x, y) {
            return this.setFlag(x, y, VISITED);
          },
          /** Clears visit flag from cell
            * @param {number} x The x coordinate
            * @param {number} y The y coordinate
            * @function
            * @instance
            * @returns {boolean}
            * @memberof module:connection-grid-core
            * @example <caption>usage</caption>
            * core.clearVisited(1,2);
           */
          clearVisited: function(x, y) {
            return this.clearFlag(x, y, VISITED);
          },
          /** Clear all visited flag from grid
            * @function
            * @instance
            * @memberof module:connection-grid-core
            * @example <caption>usage</caption>
            * core.clearAllVisited();
           */
          clearAllVisited: function() {
            for (var row = 0; row < this.rows; row++) {
              var rs = this.rowSize(row);
              for (var pos = 0; pos < rs; pos++) {
                this.clearVisited(row, pos);
              }
            }
          },
          /** Returns true if a cell at x,y exists and it has been marked as visited.
            * @param {number} x The x coordinate
            * @param {number} y The y coordinate
            * @function
            * @instance
            * @returns {boolean}
            * @memberof module:connection-grid-core
            * @example <caption>usage</caption>
            * if(core.visited(x)) ...
           */
          visited: function(x, y) {
            if (!this.isCell(x, y)) {
              return false;
            }
            return this.isFlagSet(x, y, VISITED);
          },
          /** Marks a cell at x,y as masked.
            * Useful for maze generators to mark cells to skip
            * @param {number} x The x coordinate
            * @param {number} y The y coordinate
            * @function
            * @instance
            * @returns {boolean}
            * @memberof module:connection-grid-core
            * @example <caption>usage</caption>
            * core.mask(1,2)
           */
          mask: function(x, y) {
            return this.setFlag(x, y, MASKED);
          },
          /** Clear the mask flag from cell at x,y.
            * Useful for maze generators to mark and clear cells to skip
            * @param {number} x The x coordinate
            * @param {number} y The y coordinate
            * @function
            * @instance
            * @returns {boolean}
            * @memberof module:connection-grid-core
            * @example <caption>usage</caption>
            * core.clearMask(1,2)
           */
          clearMask: function(x, y) {
            return this.clearFlag(x, y, MASKED);
          },
          /** Clear all mask flags from grid
            * @function
            * @instance
            * @memberof module:connection-grid-core
            * @example <caption>usage</caption>
            * core.clearAllMasks();
           */
          clearAllMasks: function() {
            for (var row = 0; row < this.rows; row++) {
              var rs = this.rowSize(row);
              for (var pos = 0; pos < rs; pos++) {
                this.clearMask(row, pos);
              }
            }
          },
          /** Returns true if a cell at x,y has been marked using [mask]{@link module:connection-grid-core#mask}.
            * @param {number} x The x coordinate
            * @param {number} y The y coordinate
            * @function
            * @instance
            * @returns {boolean}
            * @memberof module:connection-grid-core
            * @example <caption>usage</caption>
            * if(core.isMasked(1,2)) ...
           */
          isMasked: function(x, y) {
            if (!this.isCell(x, y)) {
              return false;
            }
            return this.isFlagSet(x, y, MASKED);
          },
          /** Marks a cell at x,y as red.
            * @param {number} x The x coordinate
            * @param {number} y The y coordinate
            * @function
            * @instance
            * @returns {boolean}
            * @memberof module:connection-grid-core
            * @example <caption>usage</caption>
            * core.markRed(1,2)
           */
          markRed: function(x, y) {
            return this.setFlag(x, y, RED);
          },
          /** Clear the red flag from cell at x,y.
            * @param {number} x The x coordinate
            * @param {number} y The y coordinate
            * @function
            * @instance
            * @returns {boolean}
            * @memberof module:connection-grid-core
            * @example <caption>usage</caption>
            * core.clearRed(1,2)
           */
          clearRed: function(x, y) {
            return this.clearFlag(x, y, RED);
          },
          /** Clear all red flags from grid
            * @function
            * @instance
            * @memberof module:connection-grid-core
            * @example <caption>usage</caption>
            * core.clearAllRed();
           */
          clearAllRed: function() {
            for (var row = 0; row < this.rows; row++) {
              var rs = this.rowSize(row);
              for (var pos = 0; pos < rs; pos++) {
                this.clearRed(row, pos);
              }
            }
          },
          /** Returns true if a cell at x,y has been set red using [markRed]{@link module:connection-grid-core#markRed}.
            * @param {number} x The x coordinate
            * @param {number} y The y coordinate
            * @function
            * @instance
            * @returns {boolean}
            * @memberof module:connection-grid-core
            * @example <caption>usage</caption>
            * if(core.isRed(1,2)) ...
           */
          isRed: function(x, y) {
            if (!this.isCell(x, y)) {
              return false;
            }
            return this.isFlagSet(x, y, RED);
          },
          /** Marks a cell at x,y as green.
            * @param {number} x The x coordinate
            * @param {number} y The y coordinate
            * @function
            * @instance
            * @returns {boolean}
            * @memberof module:connection-grid-core
            * @example <caption>usage</caption>
            * core.markGreen(1,2)
           */
          markGreen: function(x, y) {
            return this.setFlag(x, y, GREEN);
          },
          /** Clear the green flag from cell at x,y.
            * @param {number} x The x coordinate
            * @param {number} y The y coordinate
            * @function
            * @instance
            * @returns {boolean}
            * @memberof module:connection-grid-core
            * @example <caption>usage</caption>
            * core.clearGreen(1,2)
           */
          clearGreen: function(x, y) {
            return this.clearFlag(x, y, GREEN);
          },
          /** Clear all green flags from grid
            * @function
            * @instance
            * @memberof module:connection-grid-core
            * @example <caption>usage</caption>
            * core.clearAllGreen();
           */
          clearAllGreen: function() {
            for (var row = 0; row < this.rows; row++) {
              var rs = this.rowSize(row);
              for (var pos = 0; pos < rs; pos++) {
                this.clearGreen(row, pos);
              }
            }
          },
          /** Returns true if a cell at x,y has been set green using [markGreen]{@link module:connection-grid-core#markGreen}.
            * @param {number} x The x coordinate
            * @param {number} y The y coordinate
            * @function
            * @instance
            * @returns {boolean}
            * @memberof module:connection-grid-core
            * @example <caption>usage</caption>
            * if(core.isGreen(1,2)) ...
           */
          isGreen: function(x, y) {
            if (!this.isCell(x, y)) {
              return false;
            }
            return this.isFlagSet(x, y, GREEN);
          },
          /** Returns true if a cell at x,y has connections.
            * @param {number} x The x coordinate
            * @param {number} y The y coordinate
            * @function
            * @instance
            * @returns {boolean}
            * @memberof module:connection-grid-core
            * @example <caption>usage</caption>
            * if(core.hasConnections(1,2)) ...
           */
          hasConnections: function(x, y) {
            let cell = this.get(x, y);
            if (cell === null) {
              return false;
            }
            cell = cell & ~(VISITED | MASKED | RED | GREEN);
            if (cell === 0) {
              return false;
            }
            let list = this.getNeighborDirs(x, y);
            for (let sDir of list) {
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
          /** Maps a connection for a cell at x,y in a particular direction.
            * Unlike [connect]{@link module:connection-grid-core#connect} a cell in the direction does not have to exist.
            * Useful for mazes that need to open up border walls.
            * @param {number} x The x coordinate
            * @param {number} y The y coordinate
            * @param {string} dir A string representing a direction
            * @function
            * @instance
            * @memberof module:connection-grid-core
            * @example <caption>usage</caption>
            * core.open(0,0,"N");
           */
          open: function(x, y, dir) {
            if (!this.isDir(dir)) {
              return false;
            }
            return this.setFlag(x, y, _DIR_MAP[dir]);
          },
          /** Removes a connection for a cell at x,y in a particular direction.
            * Unlike [connect]{@link module:connection-grid-core#connect} a cell in the direction does not have to exist.
            * @param {number} x The x coordinate
            * @param {number} y The y coordinate
            * @param {string} dir A string representing a direction
            * @function
            * @instance
            * @memberof module:connection-grid-core
            * @example <caption>usage</caption>
            * core.close(0,0,"N");
           */
          close: function(x, y, dir) {
            if (!this.isDir(dir)) {
              return false;
            }
            return this.clearFlag(x, y, _DIR_MAP[dir]);
          },
          /** Maps a connection for a cell at x,y in a particular direction.
            * Returns false if the cell in the target direction does not exist.
            * @param {number} x The x coordinate
            * @param {number} y The y coordinate
            * @param {string} dir A string representing a direction
            * @function
            * @instance
            * @returns {boolean}
            * @memberof module:connection-grid-core
            * @example <caption>usage</caption>
            * if(core.connect(1,2,"N")) ...
           */
          connect: function(x, y, dir) {
            if (!this.getNeighbor(x, y, dir)) return false;
            return this.open(x, y, dir);
          },
          /** Removes connection for a cell at x,y in a particular direction.
            * Returns false if the cell in the target direction does not exist.
            * @param {number} x The x coordinate
            * @param {number} y The y coordinate
            * @param {string} dir A string representing a direction
            * @function
            * @instance
            * @returns {boolean}
            * @memberof module:connection-grid-core
            * @example <caption>usage</caption>
            * if(core.disconnect(1,2,"N")) ...
           */
          disconnect: function(x, y, dir) {
            if (!this.getNeighbor(x, y, dir)) return false;
            return this.close(x, y, dir);
          },
          /** Maps a connection for a cell at x,y in a particular direction.
            * Also maps a connection from the target cell back to the source cell.
            * Returns false if the cell in the target direction does not exist.
            * @param {number} x The x coordinate
            * @param {number} y The y coordinate
            * @param {string} dir A string representing a direction
            * @function
            * @instance
            * @returns {boolean}
            * @memberof module:connection-grid-core
            * @example <caption>usage</caption>
            * if(core.connectUndirected(1,2,"N")) ...
           */
          connectUndirected: function(x, y, sDir) {
            if (!this.connect(x, y, sDir)) {
              return false;
            }
            var n = this.getNeighbor(x, y, sDir);
            if (!this.connect(n.x, n.y, _OPPOSITE[sDir])) {
              return false;
            }
            return true;
          },
          /** Removes a connection for a cell at x,y in a particular direction.
            * Also removes a connection from the target cell back from the source cell.
            * Returns false if the cell in the target direction does not exist.
            * @param {number} x The x coordinate
            * @param {number} y The y coordinate
            * @param {string} dir A string representing a direction
            * @function
            * @instance
            * @returns {boolean}
            * @memberof module:connection-grid-core
            * @example <caption>usage</caption>
            * if(core.disconnectUndirected(1,2,"N")) ...
           */
          disconnectUndirected: function(x, y, sDir) {
            if (!this.disconnect(x, y, sDir)) {
              return false;
            }
            var n = this.getNeighbor(x, y, sDir);
            if (!this.disconnect(n.x, n.y, _OPPOSITE[sDir])) {
              return false;
            }
            return true;
          },
          /** Returns true if a cell connects to a neighbor cell in a particular direction.
            * It does not matter if a the target cell exists such as when [open]{@link module:connection-grid-core#open} maps a connection to a non-existant cell.
            * @param {number} x The x coordinate
            * @param {number} y The y coordinate
            * @param {string} dir A string representing a direction
            * @returns {boolean}
            * @function
            * @instance
            * @memberof module:connection-grid-core
            * @example <caption>usage</caption>
            * if(core.connects(1,2,"N")) ...
           */
          connects: function(x, y, sDir) {
            if (!this.isDir(sDir)) {
              console.error("connects unknown direction: ", sDir);
              return false;
            }
            let cell = this.get(x, y);
            if (cell === null) {
              return false;
            }
            var iDir = _DIR_MAP[sDir];
            return (cell & iDir) !== 0;
          },
          /** Returns true if a cell connects to a neighbor cell in any direction in the list.
            * @param {number} x The x coordinate
            * @param {number} y The y coordinate
            * @param {array} list An array of strings that each represent a direction
            * @function
            * @instance
            * @returns {boolean}
            * @memberof module:connection-grid-core
            * @example <caption>usage</caption>
            * if(core.connectsAny(1,2,["N","W"]) ...
           */
          connectsAny: function(x, y, list) {
            var connects = false;
            list.forEach((el) => {
              if (this.connects(x, y, el)) {
                connects = true;
              }
            });
            return connects;
          },
          /** Returns cell that is max distance from x,y.
            * @param {number} x The x coordinate
            * @param {number} y The y coordinate
            * @function
            * @instance
            * @returns {MaxDistance}
            * @memberof module:connection-grid-core
            * @example <caption>usage</caption>
            * let d = core.getMaxDistance(1,2)
            * console.log( "DISTANCE: " + d.x + ", " + d.y + " = " + d.distance );
           */
          getMaxDistance(x, y) {
            this.clearAllVisited();
            this.maxDistance = {
              x: 0,
              y: 0,
              distance: 0
            };
            this.getDistance(x, y, 0);
            this.clearAllVisited();
            return this.maxDistance;
          },
          /** Internal recursive function that update internal maxDistance 
            * @param {number} x The x coordinate
            * @param {number} y The y coordinate
            * @function
            * @instance
            * @returns {MaxDistance}
            * @memberof module:connection-grid-core
           */
          getDistance(x, y, distance) {
            if (this.visited(x, y)) {
              return;
            }
            this.markVisited(x, y);
            if (this.maxDistance.distance < distance) {
              this.maxDistance.x = x;
              this.maxDistance.y = y;
              this.maxDistance.distance = distance;
            }
            if (!this.hasConnections(x, y)) return;
            let cell = this.get(x, y);
            let list = this.getNeighborDirs(x, y);
            for (let sDir of list) {
              if (!this.isDir(sDir)) {
                console.error("getDistance unknown direction: ", sDir);
                return;
              }
              let iDir = _DIR_MAP[sDir];
              if ((cell & iDir) != 0) {
                let neighbor = this.getNeighbor(x, y, sDir);
                if (neighbor.x == -1) return;
                this.getDistance(
                  neighbor.x,
                  neighbor.y,
                  /* ++distance */
                  distance + 1
                );
              }
            }
          },
          /** Returns number of connections for cell
            * @param {number} x The x coordinate
            * @param {number} y The y coordinate
            * @function
            * @instance
            * @returns {number}
            * @memberof module:connection-grid-core
            * @example <caption>usage</caption>
            * let count = core.connectionCount(1,2)
            */
          connectionCount(x, y) {
            if (!this.hasConnections(x, y)) return;
            let cell = this.get(x, y);
            let list = this.getNeighborDirs(x, y);
            let connections = 0;
            for (let sDir of list) {
              if (!this.isDir(sDir)) {
                console.error("connectionCount unknown direction: ", sDir);
                return 0;
              }
              let iDir = _DIR_MAP[sDir];
              if ((cell & iDir) != 0) {
                connections++;
              }
            }
            return connections;
          },
          /** Returns true or false if cell is a dead end / leaf node (only one connection)
            * @param {number} x The x coordinate
            * @param {number} y The y coordinate
            * @function
            * @instance
            * @returns {boolean}
            * @memberof module:connection-grid-core
            * @example <caption>usage</caption>
            * let flag = core.isLeaf(1,2);
            */
          isLeaf(x, y) {
            return this.connectionCount(x, y) == 1;
          },
          /** Clears all connections and flags from cell 
            * @param {number} x The x coordinate
            * @param {number} y The y coordinate
            * @function
            * @instance
            * @returns {boolean}
            * @memberof module:connection-grid-core
            * @example <caption>usage</caption>
            * let isCell = core.reset(1,2);
            */
          reset(x, y) {
            if (!this.isCell(x, y)) {
              return false;
            }
            let list = this.getNeighborDirs(x, y);
            for (let sDir of list) {
              if (!this.isDir(sDir)) {
                console.error(".reset unknown direction: ", sDir);
                return false;
              }
              this.disconnectUndirected(x, y, sDir);
            }
            this.clearMask(x, y);
            this.clearVisited(x, y);
            this.clearRed(x, y);
            this.clearGreen(x, y);
            return true;
          }
        });
      };
    }
  });

  // node_modules/@mitchallen/connection-grid-square/src/index.js
  var require_src2 = __commonJS({
    "node_modules/@mitchallen/connection-grid-square/src/index.js"(exports, module) {
      "use strict";
      var gridFactory = require_grid_square();
      var baseGrid = require_src().create;
      module.exports.create = (spec = {}) => {
        let { x: _x = 0, y: _y = 0 } = spec;
        var _grid = gridFactory.create(spec);
        _grid.fill(0);
        var _dirMap = {
          "N": 16,
          "S": 32,
          "E": 64,
          "W": 128
        };
        let _oppositeMap = { "E": "W", "W": "E", "N": "S", "S": "N" };
        var obj = baseGrid({
          grid: _grid,
          dirMap: _dirMap,
          oppositeMap: _oppositeMap
        });
        Object.assign(obj, {
          /** Returns neighbor for direction
            * @param {string} dir A string representing a direction
            * @function
            * @instance
            * @memberof module:connection-grid-square
            * @returns {string}
            * @example <caption>usage</caption>
            * var cell = grid.getNeighbor(1,1,"S"); 
           */
          getNeighbor: function(x, y, dir) {
            if (!this.isCell(x, y)) {
              return null;
            }
            if (!this.isDir(dir)) {
              return null;
            }
            let _DX = { "E": 1, "W": -1, "N": 0, "S": 0 };
            let _DY = { "E": 0, "W": 0, "N": -1, "S": 1 };
            var nx = x + _DX[dir];
            var ny = y + _DY[dir];
            if (!this.isCell(nx, ny)) {
              return null;
            }
            return { x: nx, y: ny };
          },
          /** Returns an array of neighbors for the cell at x,y
            * @param {number} x X coordinate of cell
            * @param {number} y Y coordinate of cell
            * @function
            * @instance
            * @memberof module:connection-grid-square
            * @returns {array} 
            * @example <caption>usage</caption>
            * var list = grid.getNeighborDirs(1,1); 
           */
          getNeighborDirs: function(x, y) {
            return ["N", "S", "E", "W"];
          }
        });
        return obj;
      };
    }
  });

  // node_modules/@mitchallen/grid-core/dist/grid-core.cjs.js
  var require_grid_core_cjs = __commonJS({
    "node_modules/@mitchallen/grid-core/dist/grid-core.cjs.js"(exports, module) {
      "use strict";
      module.exports.create = (u = {}) => {
        let { rows: t = 0 } = u;
        t = Math.max(t, 0);
        for (var i = []; i.push([]) < t; ) ;
        var a = Object.create({}, { rows: { writeable: false, value: t, enumerable: true } });
        return Object.assign(a, { log: function() {
          console.log("size: %d: ", t), console.log(i);
        }, rowSize: function(e) {
          return e < 0 || e >= t ? 0 : i[e].length;
        }, isCell: function(e, r) {
          var l = this.rowSize(e);
          return e >= 0 && e < t && r >= 0 && r < l;
        }, set: function(e, r, l) {
          return e < 0 || r < 0 ? false : (i[e][r] = l, true);
        }, get: function(e, r) {
          return this.isCell(e, r) ? i[e][r] : null;
        }, fill: function(e) {
          for (var r = 0; r < t; r++) for (var l = this.rowSize(r), n = 0; n < l; n++) i[r][n] = e;
        }, cloneArray: function() {
          for (var e = []; e.push([]) < t; ) ;
          for (var r = 0; r < t; r++) for (var l = this.rowSize(r), n = 0; n < l; n++) e[r][n] = i[r][n];
          return e;
        } });
      };
    }
  });

  // node_modules/@mitchallen/grid/src/circle.js
  var require_circle = __commonJS({
    "node_modules/@mitchallen/grid/src/circle.js"(exports, module) {
      "use strict";
      var coreGrid = require_grid_core_cjs();
      module.exports = (spec = {}) => {
        let {
          rings: _rings = 0
        } = spec;
        _rings = Math.max(_rings, 0);
        var obj = coreGrid.create({ rows: _rings });
        obj.set(0, 0, 0);
        var rowHeight = 1 / _rings;
        for (var i = 1; i < _rings; i++) {
          var radius = i / _rings;
          var circumference = 2 * Math.PI * radius;
          var previousCount = obj.rowSize(i - 1);
          var estimatedCellWidth = circumference / previousCount;
          var ratio = Math.round(estimatedCellWidth / rowHeight);
          var cells = previousCount * ratio;
          for (var j = 0; j < cells; j++) {
            obj.set(i, j, 0);
          }
        }
        Object.defineProperties(obj, {
          "rings": {
            writeable: false,
            value: _rings,
            enumerable: true
          }
        });
        return Object.assign(obj, {
          ringSize: function(ring) {
            return this.rowSize(ring);
          }
        });
      };
    }
  });

  // node_modules/@mitchallen/grid/src/index.js
  var require_src3 = __commonJS({
    "node_modules/@mitchallen/grid/src/index.js"(exports, module) {
      "use strict";
      var squareGrid = require_grid_square().create;
      var circleGrid = require_circle();
      var createGrid = (spec) => {
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
    }
  });

  // src/hexagon.js
  var require_hexagon = __commonJS({
    "src/hexagon.js"(exports, module) {
      "use strict";
      var gridFactory = require_src3();
      var baseGrid = require_src().create;
      module.exports = (spec) => {
        spec = spec || {};
        let _x = spec.x || 0;
        let _y = spec.y || 0;
        let _grid = gridFactory.Hexagon({
          x: _x,
          y: _y
        });
        _grid.fill(0);
        let _dirMap = {
          "N": 16,
          "S": 32,
          "E": 64,
          "W": 128,
          "NW": 256,
          "NE": 512,
          "SW": 1024,
          "SE": 2048
        };
        let _oppositeMap = {
          "N": "S",
          "S": "N",
          "E": "W",
          "W": "E",
          "NE": "SW",
          "NW": "SE",
          "SE": "NW",
          "SW": "NE"
        };
        let obj = baseGrid({
          grid: _grid,
          dirMap: _dirMap,
          oppositeMap: _oppositeMap
        });
        Object.assign(obj, {
          getNeighborDirs: function(x, y) {
            if (x % 2 === 0) {
              return ["N", "S", "E", "W", "NW", "NE"];
            }
            return ["N", "S", "E", "W", "SW", "SE"];
          },
          getNeighbor: function(x, y, dir) {
            if (!this.isCell(x, y)) {
              return null;
            }
            if (!this.isDir(dir)) {
              return null;
            }
            let _DX = {
              "E": 1,
              "NE": 1,
              "SE": 1,
              "W": -1,
              "NW": -1,
              "SW": -1,
              "N": 0,
              "S": 0
            };
            let _DY = {
              "S": 1,
              "SE": 1,
              "SW": 1,
              "N": -1,
              "NE": -1,
              "NW": -1,
              "E": 0,
              "W": 0
            };
            let nx = x + _DX[dir];
            let ny = y + _DY[dir];
            if (!this.isCell(nx, ny)) {
              return null;
            }
            return { x: nx, y: ny };
          }
        });
        return obj;
      };
    }
  });

  // src/circle.js
  var require_circle2 = __commonJS({
    "src/circle.js"(exports, module) {
      "use strict";
      var gridFactory = require_src3();
      var baseGrid = require_src().create;
      module.exports = (spec) => {
        spec = spec || {};
        let _rings = spec.rings || 0;
        let _grid = gridFactory.Circle({
          rings: _rings
        });
        _grid.fill(0);
        let _dirMap = {
          "CCW": 16,
          // Counter-Clockwise 
          "CW": 32,
          // Clockwise
          "A": 64,
          // Away from Center (1:1)
          "T": 128,
          // Toward Center (1:1)
          "A0": 256,
          // Away 0 (2:1)
          "T0": 512,
          // Toward 0 (2:1)
          "A1": 1024,
          // Away 1 
          "T1": 2048
          // Toward
        };
        let _oppositeMap = {
          "CCW": "CW",
          "CW": "CCW",
          "A": "T",
          "T": "A",
          "A0": "T0",
          "T0": "A0",
          "A1": "T1",
          "T1": "A1"
        };
        let obj = baseGrid({
          grid: _grid,
          dirMap: _dirMap,
          oppositeMap: _oppositeMap
        });
        Object.assign(obj, {
          getNeighborDirs: function(ring, pos) {
            if (ring === 0 && pos === 0) {
              return ["A0"];
            }
            if (ring === 1 && pos !== 0) {
              return ["CCW", "CW", "A0", "A1"];
            }
            let aSize = this.ringSize(ring + 1);
            let rSize = this.ringSize(ring);
            let tSize = this.ringSize(ring - 1);
            if (rSize === tSize) {
              if (aSize === 0) {
                return ["CCW", "CW", "T"];
              }
              if (aSize > rSize) {
                return ["CCW", "CW", "A0", "A1", "T"];
              }
              return ["CCW", "CW", "A", "T"];
            }
            if (pos % 2 === 0) {
              if (aSize === 0) {
                return ["CCW", "CW", "T0"];
              }
              if (aSize > rSize) {
                return ["CCW", "CW", "A0", "A1", "T0"];
              }
              return ["CCW", "CW", "A", "T0"];
            }
            if (aSize === 0) {
              return ["CCW", "CW", "T1"];
            }
            if (aSize > rSize) {
              return ["CCW", "CW", "A0", "A1", "T1"];
            }
            return ["CCW", "CW", "A", "T1"];
          },
          getNeighbor: function(ring, pos, dir) {
            if (!this.isCell(ring, pos)) {
              return null;
            }
            if (!this.isDir(dir)) {
              return null;
            }
            let ringSize = this.ringSize(ring);
            let NEIGHBOR_MAP = {
              "CCW": { x: ring, y: pos === 0 ? ringSize - 1 : pos - 1 },
              "CW": { x: ring, y: (pos + 1) % ringSize },
              "A": { x: ring + 1, y: pos },
              "A0": { x: ring + 1, y: pos * 2 },
              "A1": { x: ring + 1, y: pos * 2 + 1 },
              "T": { x: ring - 1, y: pos },
              "T0": { x: ring - 1, y: pos / 2 },
              "T1": { x: ring - 1, y: (pos - 1) / 2 }
            };
            let nc = NEIGHBOR_MAP[dir];
            if (!this.isCell(nc.x, nc.y)) {
              return null;
            }
            return nc;
          }
        });
        return obj;
      };
    }
  });

  // src/triangle.js
  var require_triangle = __commonJS({
    "src/triangle.js"(exports, module) {
      "use strict";
      var gridFactory = require_src3();
      var baseGrid = require_src().create;
      module.exports = (spec) => {
        spec = spec || {};
        let _x = spec.x || 0;
        let _y = spec.y || 0;
        let _grid = gridFactory.Square({
          x: _x,
          y: _y
        });
        _grid.fill(0);
        let UP = 1, DOWN = 2;
        let _dirMap = {
          "N": 16,
          "S": 32,
          "E": 64,
          "W": 128
        };
        let _oppositeMap = { "E": "W", "W": "E", "N": "S", "S": "N" };
        let obj = baseGrid({
          grid: _grid,
          dirMap: _dirMap,
          oppositeMap: _oppositeMap
        });
        Object.assign(obj, {
          getNeighbor: function(x, y, dir) {
            if (!this.isCell(x, y)) {
              return null;
            }
            if (!this.isDir(dir)) {
              return null;
            }
            let _DX = { "E": 1, "W": -1, "N": 0, "S": 0 };
            let _DY = { "E": 0, "W": 0, "N": -1, "S": 1 };
            let nx = x + _DX[dir];
            let ny = y + _DY[dir];
            if (!this.isCell(nx, ny)) {
              return null;
            }
            return { x: nx, y: ny };
          },
          getNeighborDirs: function(x, y) {
            let tDir = (x + y) % 2 === 0 ? UP : DOWN;
            let vertical = tDir === DOWN ? "N" : "S";
            return [vertical, "E", "W"];
          }
        });
        return obj;
      };
    }
  });

  // src/index.js
  var require_index = __commonJS({
    "src/index.js"(exports, module) {
      var squareGrid = require_src2().create;
      var hexagonGrid = require_hexagon();
      var circleGrid = require_circle2();
      var triangleGrid = require_triangle();
      var createGrid = (spec) => {
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
    }
  });
  return require_index();
})();
