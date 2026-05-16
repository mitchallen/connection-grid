"use strict";
var MitchAllen = MitchAllen || {};
MitchAllen.ConnectionGrid = (() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });
  var __commonJS = (cb, mod) => function __require2() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // node_modules/@mitchallen/connection-grid-square/dist/connection-grid-square.js
  var require_connection_grid_square = __commonJS({
    "node_modules/@mitchallen/connection-grid-square/dist/connection-grid-square.js"(exports, module) {
      (function(f) {
        if (typeof exports === "object" && typeof module !== "undefined") {
          module.exports = f();
        } else if (typeof define === "function" && define.amd) {
          define([], f);
        } else {
          var g;
          if (typeof window !== "undefined") {
            g = window;
          } else if (typeof global !== "undefined") {
            g = global;
          } else if (typeof self !== "undefined") {
            g = self;
          } else {
            g = this;
          }
          (g.MitchAllen || (g.MitchAllen = {})).ConnectionGridSquare = f();
        }
      })(function() {
        var define2, module2, exports2;
        return (/* @__PURE__ */ (function() {
          function r(e, n, t) {
            function o(i2, f) {
              if (!n[i2]) {
                if (!e[i2]) {
                  var c = "function" == typeof __require && __require;
                  if (!f && c) return c(i2, true);
                  if (u) return u(i2, true);
                  var a = new Error("Cannot find module '" + i2 + "'");
                  throw a.code = "MODULE_NOT_FOUND", a;
                }
                var p = n[i2] = { exports: {} };
                e[i2][0].call(p.exports, function(r2) {
                  var n2 = e[i2][1][r2];
                  return o(n2 || r2);
                }, p, p.exports, r, e, n, t);
              }
              return n[i2].exports;
            }
            for (var u = "function" == typeof __require && __require, i = 0; i < t.length; i++) o(t[i]);
            return o;
          }
          return r;
        })())({ 1: [function(_dereq_, module3, exports3) {
          (function(global2) {
            (function() {
              (function(f) {
                if (typeof exports3 === "object" && typeof module3 !== "undefined") {
                  module3.exports = f();
                } else if (typeof define2 === "function" && define2.amd) {
                  define2([], f);
                } else {
                  var g;
                  if (typeof window !== "undefined") {
                    g = window;
                  } else if (typeof global2 !== "undefined") {
                    g = global2;
                  } else if (typeof self !== "undefined") {
                    g = self;
                  } else {
                    g = this;
                  }
                  (g.MitchAllen || (g.MitchAllen = {})).ConnectionGridCore = f();
                }
              })(function() {
                var define3, module4, exports4;
                return (/* @__PURE__ */ (function() {
                  function r(e, n, t) {
                    function o(i2, f) {
                      if (!n[i2]) {
                        if (!e[i2]) {
                          var c = "function" == typeof _dereq_ && _dereq_;
                          if (!f && c) return c(i2, true);
                          if (u) return u(i2, true);
                          var a = new Error("Cannot find module '" + i2 + "'");
                          throw a.code = "MODULE_NOT_FOUND", a;
                        }
                        var p = n[i2] = { exports: {} };
                        e[i2][0].call(p.exports, function(r2) {
                          var n2 = e[i2][1][r2];
                          return o(n2 || r2);
                        }, p, p.exports, r, e, n, t);
                      }
                      return n[i2].exports;
                    }
                    for (var u = "function" == typeof _dereq_ && _dereq_, i = 0; i < t.length; i++) o(t[i]);
                    return o;
                  }
                  return r;
                })())({ 1: [function(_dereq_2, module5, exports5) {
                  (function(global3) {
                    (function() {
                      (function(f) {
                        if (typeof exports5 === "object" && typeof module5 !== "undefined") {
                          module5.exports = f();
                        } else if (typeof define3 === "function" && define3.amd) {
                          define3([], f);
                        } else {
                          var g;
                          if (typeof window !== "undefined") {
                            g = window;
                          } else if (typeof global3 !== "undefined") {
                            g = global3;
                          } else if (typeof self !== "undefined") {
                            g = self;
                          } else {
                            g = this;
                          }
                          (g.MitchAllen || (g.MitchAllen = {})).Shuffle = f();
                        }
                      })(function() {
                        var define4, module6, exports6;
                        return (function e(t, n, r) {
                          function s(o2, u) {
                            if (!n[o2]) {
                              if (!t[o2]) {
                                var a = typeof _dereq_2 == "function" && _dereq_2;
                                if (!u && a) return a(o2, true);
                                if (i) return i(o2, true);
                                var f = new Error("Cannot find module '" + o2 + "'");
                                throw f.code = "MODULE_NOT_FOUND", f;
                              }
                              var l = n[o2] = { exports: {} };
                              t[o2][0].call(l.exports, function(e2) {
                                var n2 = t[o2][1][e2];
                                return s(n2 ? n2 : e2);
                              }, l, l.exports, e, t, n, r);
                            }
                            return n[o2].exports;
                          }
                          var i = typeof _dereq_2 == "function" && _dereq_2;
                          for (var o = 0; o < r.length; o++) s(r[o]);
                          return s;
                        })({ 1: [function(_dereq_3, module7, exports7) {
                          "use strict";
                          module7.exports.create = function(spec) {
                            if (!spec) {
                              return null;
                            }
                            if (!spec.array) {
                              return null;
                            }
                            var _array = spec.array.slice(0);
                            return {
                              shuffle: function shuffle() {
                                var i = 0, j = 0, temp = null;
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
                        }, {}] }, {}, [1])(1);
                      });
                    }).call(this);
                  }).call(this, typeof global2 !== "undefined" ? global2 : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
                }, {}], 2: [function(_dereq_2, module5, exports5) {
                  "use strict";
                  var shuffleFactory = _dereq_2("@mitchallen/shuffle");
                  module5.exports.create = function(spec) {
                    spec = spec || {};
                    var _grid = spec.grid;
                    var _DIR_MAP = spec.dirMap || {};
                    var _OPPOSITE = spec.oppositeMap || {};
                    if (!_grid) {
                      return null;
                    }
                    var VISITED = 1;
                    var MASKED = 2;
                    var RED = 4;
                    var GREEN = 8;
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
                      isDir: function isDir(dir) {
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
                      getOppositeDir: function getOppositeDir(dir) {
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
                      getNeighbor: function getNeighbor(x, y, dir) {
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
                      getNeighborDirs: function getNeighborDirs(x, y) {
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
                      getShuffledNeighborDirs: function getShuffledNeighborDirs(x, y) {
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
                      setFlag: function setFlag(x, y, flag) {
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
                      clearFlag: function clearFlag(x, y, flag) {
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
                      isFlagSet: function isFlagSet(x, y, flag) {
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
                      markVisited: function markVisited(x, y) {
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
                      clearVisited: function clearVisited(x, y) {
                        return this.clearFlag(x, y, VISITED);
                      },
                      /** Clear all visited flag from grid
                        * @function
                        * @instance
                        * @memberof module:connection-grid-core
                        * @example <caption>usage</caption>
                        * core.clearAllVisited();
                       */
                      clearAllVisited: function clearAllVisited() {
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
                      visited: function visited(x, y) {
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
                      mask: function mask(x, y) {
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
                      clearMask: function clearMask(x, y) {
                        return this.clearFlag(x, y, MASKED);
                      },
                      /** Clear all mask flags from grid
                        * @function
                        * @instance
                        * @memberof module:connection-grid-core
                        * @example <caption>usage</caption>
                        * core.clearAllMasks();
                       */
                      clearAllMasks: function clearAllMasks() {
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
                      isMasked: function isMasked(x, y) {
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
                      markRed: function markRed(x, y) {
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
                      clearRed: function clearRed(x, y) {
                        return this.clearFlag(x, y, RED);
                      },
                      /** Clear all red flags from grid
                        * @function
                        * @instance
                        * @memberof module:connection-grid-core
                        * @example <caption>usage</caption>
                        * core.clearAllRed();
                       */
                      clearAllRed: function clearAllRed() {
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
                      isRed: function isRed(x, y) {
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
                      markGreen: function markGreen(x, y) {
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
                      clearGreen: function clearGreen(x, y) {
                        return this.clearFlag(x, y, GREEN);
                      },
                      /** Clear all green flags from grid
                        * @function
                        * @instance
                        * @memberof module:connection-grid-core
                        * @example <caption>usage</caption>
                        * core.clearAllGreen();
                       */
                      clearAllGreen: function clearAllGreen() {
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
                      isGreen: function isGreen(x, y) {
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
                      hasConnections: function hasConnections(x, y) {
                        var cell = this.get(x, y);
                        if (cell === null) {
                          return false;
                        }
                        cell = cell & ~(VISITED | MASKED | RED | GREEN);
                        if (cell === 0) {
                          return false;
                        }
                        var list = this.getNeighborDirs(x, y);
                        var _iteratorNormalCompletion = true;
                        var _didIteratorError = false;
                        var _iteratorError = void 0;
                        try {
                          for (var _iterator = list[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                            var sDir = _step.value;
                            if (!this.isDir(sDir)) {
                              console.error("hasConnections unknown direction: ", sDir);
                              return false;
                            }
                            var iDir = _DIR_MAP[sDir];
                            if ((cell & iDir) !== 0) {
                              return true;
                            }
                          }
                        } catch (err) {
                          _didIteratorError = true;
                          _iteratorError = err;
                        } finally {
                          try {
                            if (!_iteratorNormalCompletion && _iterator.return) {
                              _iterator.return();
                            }
                          } finally {
                            if (_didIteratorError) {
                              throw _iteratorError;
                            }
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
                      open: function open(x, y, dir) {
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
                      close: function close(x, y, dir) {
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
                      connect: function connect(x, y, dir) {
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
                      disconnect: function disconnect(x, y, dir) {
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
                      connectUndirected: function connectUndirected(x, y, sDir) {
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
                      disconnectUndirected: function disconnectUndirected(x, y, sDir) {
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
                      connectsAny: function connectsAny(x, y, list) {
                        var _this = this;
                        var connects = false;
                        list.forEach(function(el) {
                          if (_this.connects(x, y, el)) {
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
                      getMaxDistance: function getMaxDistance(x, y) {
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
                      getDistance: function getDistance(x, y, distance) {
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
                        var cell = this.get(x, y);
                        var list = this.getNeighborDirs(x, y);
                        var _iteratorNormalCompletion2 = true;
                        var _didIteratorError2 = false;
                        var _iteratorError2 = void 0;
                        try {
                          for (var _iterator2 = list[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                            var sDir = _step2.value;
                            if (!this.isDir(sDir)) {
                              console.error("getDistance unknown direction: ", sDir);
                              return;
                            }
                            var iDir = _DIR_MAP[sDir];
                            if ((cell & iDir) != 0) {
                              var neighbor = this.getNeighbor(x, y, sDir);
                              if (neighbor.x == -1) return;
                              this.getDistance(
                                neighbor.x,
                                neighbor.y,
                                /* ++distance */
                                distance + 1
                              );
                            }
                          }
                        } catch (err) {
                          _didIteratorError2 = true;
                          _iteratorError2 = err;
                        } finally {
                          try {
                            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                              _iterator2.return();
                            }
                          } finally {
                            if (_didIteratorError2) {
                              throw _iteratorError2;
                            }
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
                      connectionCount: function connectionCount(x, y) {
                        if (!this.hasConnections(x, y)) return;
                        var cell = this.get(x, y);
                        var list = this.getNeighborDirs(x, y);
                        var connections = 0;
                        var _iteratorNormalCompletion3 = true;
                        var _didIteratorError3 = false;
                        var _iteratorError3 = void 0;
                        try {
                          for (var _iterator3 = list[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                            var sDir = _step3.value;
                            if (!this.isDir(sDir)) {
                              console.error("connectionCount unknown direction: ", sDir);
                              return 0;
                            }
                            var iDir = _DIR_MAP[sDir];
                            if ((cell & iDir) != 0) {
                              connections++;
                            }
                          }
                        } catch (err) {
                          _didIteratorError3 = true;
                          _iteratorError3 = err;
                        } finally {
                          try {
                            if (!_iteratorNormalCompletion3 && _iterator3.return) {
                              _iterator3.return();
                            }
                          } finally {
                            if (_didIteratorError3) {
                              throw _iteratorError3;
                            }
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
                      isLeaf: function isLeaf(x, y) {
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
                      reset: function reset(x, y) {
                        if (!this.isCell(x, y)) {
                          return false;
                        }
                        var list = this.getNeighborDirs(x, y);
                        var _iteratorNormalCompletion4 = true;
                        var _didIteratorError4 = false;
                        var _iteratorError4 = void 0;
                        try {
                          for (var _iterator4 = list[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                            var sDir = _step4.value;
                            if (!this.isDir(sDir)) {
                              console.error(".reset unknown direction: ", sDir);
                              return false;
                            }
                            this.disconnectUndirected(x, y, sDir);
                          }
                        } catch (err) {
                          _didIteratorError4 = true;
                          _iteratorError4 = err;
                        } finally {
                          try {
                            if (!_iteratorNormalCompletion4 && _iterator4.return) {
                              _iterator4.return();
                            }
                          } finally {
                            if (_didIteratorError4) {
                              throw _iteratorError4;
                            }
                          }
                        }
                        this.clearMask(x, y);
                        this.clearVisited(x, y);
                        this.clearRed(x, y);
                        this.clearGreen(x, y);
                        return true;
                      }
                    });
                  };
                }, { "@mitchallen/shuffle": 1 }] }, {}, [2])(2);
              });
            }).call(this);
          }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
        }, {}], 2: [function(_dereq_, module3, exports3) {
          (function(global2) {
            (function() {
              (function(f) {
                if (typeof exports3 === "object" && typeof module3 !== "undefined") {
                  module3.exports = f();
                } else if (typeof define2 === "function" && define2.amd) {
                  define2([], f);
                } else {
                  var g;
                  if (typeof window !== "undefined") {
                    g = window;
                  } else if (typeof global2 !== "undefined") {
                    g = global2;
                  } else if (typeof self !== "undefined") {
                    g = self;
                  } else {
                    g = this;
                  }
                  (g.MitchAllen || (g.MitchAllen = {})).GridSquare = f();
                }
              })(function() {
                var define3, module4, exports4;
                return (/* @__PURE__ */ (function() {
                  function r(e, n, t) {
                    function o(i2, f) {
                      if (!n[i2]) {
                        if (!e[i2]) {
                          var c = "function" == typeof _dereq_ && _dereq_;
                          if (!f && c) return c(i2, true);
                          if (u) return u(i2, true);
                          var a = new Error("Cannot find module '" + i2 + "'");
                          throw a.code = "MODULE_NOT_FOUND", a;
                        }
                        var p = n[i2] = { exports: {} };
                        e[i2][0].call(p.exports, function(r2) {
                          var n2 = e[i2][1][r2];
                          return o(n2 || r2);
                        }, p, p.exports, r, e, n, t);
                      }
                      return n[i2].exports;
                    }
                    for (var u = "function" == typeof _dereq_ && _dereq_, i = 0; i < t.length; i++) o(t[i]);
                    return o;
                  }
                  return r;
                })())({ 1: [function(_dereq_2, module5, exports5) {
                  (function(global3) {
                    (function() {
                      (function(f) {
                        if (typeof exports5 === "object" && typeof module5 !== "undefined") {
                          module5.exports = f();
                        } else if (typeof define3 === "function" && define3.amd) {
                          define3([], f);
                        } else {
                          var g;
                          if (typeof window !== "undefined") {
                            g = window;
                          } else if (typeof global3 !== "undefined") {
                            g = global3;
                          } else if (typeof self !== "undefined") {
                            g = self;
                          } else {
                            g = this;
                          }
                          (g.MitchAllen || (g.MitchAllen = {})).GridCore = f();
                        }
                      })(function() {
                        var define4, module6, exports6;
                        return (/* @__PURE__ */ (function() {
                          function r(e, n, t) {
                            function o(i2, f) {
                              if (!n[i2]) {
                                if (!e[i2]) {
                                  var c = "function" == typeof _dereq_2 && _dereq_2;
                                  if (!f && c) return c(i2, true);
                                  if (u) return u(i2, true);
                                  var a = new Error("Cannot find module '" + i2 + "'");
                                  throw a.code = "MODULE_NOT_FOUND", a;
                                }
                                var p = n[i2] = { exports: {} };
                                e[i2][0].call(p.exports, function(r2) {
                                  var n2 = e[i2][1][r2];
                                  return o(n2 || r2);
                                }, p, p.exports, r, e, n, t);
                              }
                              return n[i2].exports;
                            }
                            for (var u = "function" == typeof _dereq_2 && _dereq_2, i = 0; i < t.length; i++) o(t[i]);
                            return o;
                          }
                          return r;
                        })())({ 1: [function(_dereq_3, module7, exports7) {
                          "use strict";
                          module7.exports.create = function() {
                            var spec = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                            var _spec$rows = spec.rows, _rows = _spec$rows === void 0 ? 0 : _spec$rows;
                            _rows = Math.max(_rows, 0);
                            var _array = [];
                            while (_array.push([]) < _rows) {
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
                                while (_clone.push([]) < _rows) {
                                }
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
                        }, {}] }, {}, [1])(1);
                      });
                    }).call(this);
                  }).call(this, typeof global2 !== "undefined" ? global2 : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
                }, {}], 2: [function(_dereq_2, module5, exports5) {
                  "use strict";
                  var coreGrid = _dereq_2("@mitchallen/grid-core");
                  module5.exports.create = function() {
                    var spec = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                    var _spec$x = spec.x, _x = _spec$x === void 0 ? 0 : _spec$x, _spec$y = spec.y, _y = _spec$y === void 0 ? 0 : _spec$y;
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
                }, { "@mitchallen/grid-core": 1 }] }, {}, [2])(2);
              });
            }).call(this);
          }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
        }, {}], 3: [function(_dereq_, module3, exports3) {
          "use strict";
          var gridFactory = _dereq_("@mitchallen/grid-square"), baseGrid = _dereq_("@mitchallen/connection-grid-core").create;
          module3.exports.create = function() {
            var spec = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            var _spec$x = spec.x, _x = _spec$x === void 0 ? 0 : _spec$x, _spec$y = spec.y, _y = _spec$y === void 0 ? 0 : _spec$y;
            var _grid = gridFactory.create(spec);
            _grid.fill(0);
            var _dirMap = {
              "N": 16,
              "S": 32,
              "E": 64,
              "W": 128
            };
            var _oppositeMap = { "E": "W", "W": "E", "N": "S", "S": "N" };
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
              getNeighbor: function getNeighbor(x, y, dir) {
                if (!this.isCell(x, y)) {
                  return null;
                }
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
              getNeighborDirs: function getNeighborDirs(x, y) {
                return ["N", "S", "E", "W"];
              }
            });
            return obj;
          };
        }, { "@mitchallen/connection-grid-core": 1, "@mitchallen/grid-square": 2 }] }, {}, [3])(3);
      });
    }
  });

  // node_modules/@mitchallen/grid/dist/grid.js
  var require_grid = __commonJS({
    "node_modules/@mitchallen/grid/dist/grid.js"(exports, module) {
      (function(f) {
        if (typeof exports === "object" && typeof module !== "undefined") {
          module.exports = f();
        } else if (typeof define === "function" && define.amd) {
          define([], f);
        } else {
          var g;
          if (typeof window !== "undefined") {
            g = window;
          } else if (typeof global !== "undefined") {
            g = global;
          } else if (typeof self !== "undefined") {
            g = self;
          } else {
            g = this;
          }
          (g.MitchAllen || (g.MitchAllen = {})).Grid = f();
        }
      })(function() {
        var define2, module2, exports2;
        return (/* @__PURE__ */ (function() {
          function r(e, n, t) {
            function o(i2, f) {
              if (!n[i2]) {
                if (!e[i2]) {
                  var c = "function" == typeof __require && __require;
                  if (!f && c) return c(i2, true);
                  if (u) return u(i2, true);
                  var a = new Error("Cannot find module '" + i2 + "'");
                  throw a.code = "MODULE_NOT_FOUND", a;
                }
                var p = n[i2] = { exports: {} };
                e[i2][0].call(p.exports, function(r2) {
                  var n2 = e[i2][1][r2];
                  return o(n2 || r2);
                }, p, p.exports, r, e, n, t);
              }
              return n[i2].exports;
            }
            for (var u = "function" == typeof __require && __require, i = 0; i < t.length; i++) o(t[i]);
            return o;
          }
          return r;
        })())({ 1: [function(_dereq_, module3, exports3) {
          (function(global2) {
            (function() {
              (function(f) {
                if (typeof exports3 === "object" && typeof module3 !== "undefined") {
                  module3.exports = f();
                } else if (typeof define2 === "function" && define2.amd) {
                  define2([], f);
                } else {
                  var g;
                  if (typeof window !== "undefined") {
                    g = window;
                  } else if (typeof global2 !== "undefined") {
                    g = global2;
                  } else if (typeof self !== "undefined") {
                    g = self;
                  } else {
                    g = this;
                  }
                  (g.MitchAllen || (g.MitchAllen = {})).GridCore = f();
                }
              })(function() {
                var define3, module4, exports4;
                return (/* @__PURE__ */ (function() {
                  function r(e, n, t) {
                    function o(i2, f) {
                      if (!n[i2]) {
                        if (!e[i2]) {
                          var c = "function" == typeof _dereq_ && _dereq_;
                          if (!f && c) return c(i2, true);
                          if (u) return u(i2, true);
                          var a = new Error("Cannot find module '" + i2 + "'");
                          throw a.code = "MODULE_NOT_FOUND", a;
                        }
                        var p = n[i2] = { exports: {} };
                        e[i2][0].call(p.exports, function(r2) {
                          var n2 = e[i2][1][r2];
                          return o(n2 || r2);
                        }, p, p.exports, r, e, n, t);
                      }
                      return n[i2].exports;
                    }
                    for (var u = "function" == typeof _dereq_ && _dereq_, i = 0; i < t.length; i++) o(t[i]);
                    return o;
                  }
                  return r;
                })())({ 1: [function(_dereq_2, module5, exports5) {
                  "use strict";
                  module5.exports.create = function() {
                    var spec = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                    var _spec$rows = spec.rows, _rows = _spec$rows === void 0 ? 0 : _spec$rows;
                    _rows = Math.max(_rows, 0);
                    var _array = [];
                    while (_array.push([]) < _rows) {
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
                        while (_clone.push([]) < _rows) {
                        }
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
                }, {}] }, {}, [1])(1);
              });
            }).call(this);
          }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
        }, {}], 2: [function(_dereq_, module3, exports3) {
          (function(global2) {
            (function() {
              (function(f) {
                if (typeof exports3 === "object" && typeof module3 !== "undefined") {
                  module3.exports = f();
                } else if (typeof define2 === "function" && define2.amd) {
                  define2([], f);
                } else {
                  var g;
                  if (typeof window !== "undefined") {
                    g = window;
                  } else if (typeof global2 !== "undefined") {
                    g = global2;
                  } else if (typeof self !== "undefined") {
                    g = self;
                  } else {
                    g = this;
                  }
                  (g.MitchAllen || (g.MitchAllen = {})).GridSquare = f();
                }
              })(function() {
                var define3, module4, exports4;
                return (/* @__PURE__ */ (function() {
                  function r(e, n, t) {
                    function o(i2, f) {
                      if (!n[i2]) {
                        if (!e[i2]) {
                          var c = "function" == typeof _dereq_ && _dereq_;
                          if (!f && c) return c(i2, true);
                          if (u) return u(i2, true);
                          var a = new Error("Cannot find module '" + i2 + "'");
                          throw a.code = "MODULE_NOT_FOUND", a;
                        }
                        var p = n[i2] = { exports: {} };
                        e[i2][0].call(p.exports, function(r2) {
                          var n2 = e[i2][1][r2];
                          return o(n2 || r2);
                        }, p, p.exports, r, e, n, t);
                      }
                      return n[i2].exports;
                    }
                    for (var u = "function" == typeof _dereq_ && _dereq_, i = 0; i < t.length; i++) o(t[i]);
                    return o;
                  }
                  return r;
                })())({ 1: [function(_dereq_2, module5, exports5) {
                  (function(global3) {
                    (function() {
                      (function(f) {
                        if (typeof exports5 === "object" && typeof module5 !== "undefined") {
                          module5.exports = f();
                        } else if (typeof define3 === "function" && define3.amd) {
                          define3([], f);
                        } else {
                          var g;
                          if (typeof window !== "undefined") {
                            g = window;
                          } else if (typeof global3 !== "undefined") {
                            g = global3;
                          } else if (typeof self !== "undefined") {
                            g = self;
                          } else {
                            g = this;
                          }
                          (g.MitchAllen || (g.MitchAllen = {})).GridCore = f();
                        }
                      })(function() {
                        var define4, module6, exports6;
                        return (/* @__PURE__ */ (function() {
                          function r(e, n, t) {
                            function o(i2, f) {
                              if (!n[i2]) {
                                if (!e[i2]) {
                                  var c = "function" == typeof _dereq_2 && _dereq_2;
                                  if (!f && c) return c(i2, true);
                                  if (u) return u(i2, true);
                                  var a = new Error("Cannot find module '" + i2 + "'");
                                  throw a.code = "MODULE_NOT_FOUND", a;
                                }
                                var p = n[i2] = { exports: {} };
                                e[i2][0].call(p.exports, function(r2) {
                                  var n2 = e[i2][1][r2];
                                  return o(n2 || r2);
                                }, p, p.exports, r, e, n, t);
                              }
                              return n[i2].exports;
                            }
                            for (var u = "function" == typeof _dereq_2 && _dereq_2, i = 0; i < t.length; i++) o(t[i]);
                            return o;
                          }
                          return r;
                        })())({ 1: [function(_dereq_3, module7, exports7) {
                          "use strict";
                          module7.exports.create = function() {
                            var spec = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                            var _spec$rows = spec.rows, _rows = _spec$rows === void 0 ? 0 : _spec$rows;
                            _rows = Math.max(_rows, 0);
                            var _array = [];
                            while (_array.push([]) < _rows) {
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
                                while (_clone.push([]) < _rows) {
                                }
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
                        }, {}] }, {}, [1])(1);
                      });
                    }).call(this);
                  }).call(this, typeof global2 !== "undefined" ? global2 : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
                }, {}], 2: [function(_dereq_2, module5, exports5) {
                  "use strict";
                  var coreGrid = _dereq_2("@mitchallen/grid-core");
                  module5.exports.create = function() {
                    var spec = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                    var _spec$x = spec.x, _x = _spec$x === void 0 ? 0 : _spec$x, _spec$y = spec.y, _y = _spec$y === void 0 ? 0 : _spec$y;
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
                }, { "@mitchallen/grid-core": 1 }] }, {}, [2])(2);
              });
            }).call(this);
          }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
        }, {}], 3: [function(_dereq_, module3, exports3) {
          "use strict";
          var coreGrid = _dereq_("@mitchallen/grid-core");
          module3.exports = function() {
            var spec = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            var _spec$rings = spec.rings, _rings = _spec$rings === void 0 ? 0 : _spec$rings;
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
              ringSize: function ringSize(ring) {
                return this.rowSize(ring);
              }
            });
          };
        }, { "@mitchallen/grid-core": 1 }], 4: [function(_dereq_, module3, exports3) {
          "use strict";
          var squareGrid = _dereq_("@mitchallen/grid-square").create, circleGrid = _dereq_("./circle");
          var createGrid = function createGrid2(spec) {
            console.warn("@mitchallen/grid: .create is deprecated. Use .Square instead.");
            return squareGrid(spec);
          };
          module3.exports = {
            create: createGrid,
            Square: squareGrid,
            Circle: circleGrid,
            // For future expansion (mapped to square for now)
            Hexagon: squareGrid,
            Triangle: squareGrid
          };
        }, { "./circle": 3, "@mitchallen/grid-square": 2 }] }, {}, [4])(4);
      });
    }
  });

  // node_modules/@mitchallen/connection-grid-core/dist/connection-grid-core.js
  var require_connection_grid_core = __commonJS({
    "node_modules/@mitchallen/connection-grid-core/dist/connection-grid-core.js"(exports, module) {
      (function(f) {
        if (typeof exports === "object" && typeof module !== "undefined") {
          module.exports = f();
        } else if (typeof define === "function" && define.amd) {
          define([], f);
        } else {
          var g;
          if (typeof window !== "undefined") {
            g = window;
          } else if (typeof global !== "undefined") {
            g = global;
          } else if (typeof self !== "undefined") {
            g = self;
          } else {
            g = this;
          }
          (g.MitchAllen || (g.MitchAllen = {})).ConnectionGridCore = f();
        }
      })(function() {
        var define2, module2, exports2;
        return (/* @__PURE__ */ (function() {
          function r(e, n, t) {
            function o(i2, f) {
              if (!n[i2]) {
                if (!e[i2]) {
                  var c = "function" == typeof __require && __require;
                  if (!f && c) return c(i2, true);
                  if (u) return u(i2, true);
                  var a = new Error("Cannot find module '" + i2 + "'");
                  throw a.code = "MODULE_NOT_FOUND", a;
                }
                var p = n[i2] = { exports: {} };
                e[i2][0].call(p.exports, function(r2) {
                  var n2 = e[i2][1][r2];
                  return o(n2 || r2);
                }, p, p.exports, r, e, n, t);
              }
              return n[i2].exports;
            }
            for (var u = "function" == typeof __require && __require, i = 0; i < t.length; i++) o(t[i]);
            return o;
          }
          return r;
        })())({ 1: [function(_dereq_, module3, exports3) {
          (function(global2) {
            (function() {
              (function(f) {
                if (typeof exports3 === "object" && typeof module3 !== "undefined") {
                  module3.exports = f();
                } else if (typeof define2 === "function" && define2.amd) {
                  define2([], f);
                } else {
                  var g;
                  if (typeof window !== "undefined") {
                    g = window;
                  } else if (typeof global2 !== "undefined") {
                    g = global2;
                  } else if (typeof self !== "undefined") {
                    g = self;
                  } else {
                    g = this;
                  }
                  (g.MitchAllen || (g.MitchAllen = {})).Shuffle = f();
                }
              })(function() {
                var define3, module4, exports4;
                return (function e(t, n, r) {
                  function s(o2, u) {
                    if (!n[o2]) {
                      if (!t[o2]) {
                        var a = typeof _dereq_ == "function" && _dereq_;
                        if (!u && a) return a(o2, true);
                        if (i) return i(o2, true);
                        var f = new Error("Cannot find module '" + o2 + "'");
                        throw f.code = "MODULE_NOT_FOUND", f;
                      }
                      var l = n[o2] = { exports: {} };
                      t[o2][0].call(l.exports, function(e2) {
                        var n2 = t[o2][1][e2];
                        return s(n2 ? n2 : e2);
                      }, l, l.exports, e, t, n, r);
                    }
                    return n[o2].exports;
                  }
                  var i = typeof _dereq_ == "function" && _dereq_;
                  for (var o = 0; o < r.length; o++) s(r[o]);
                  return s;
                })({ 1: [function(_dereq_2, module5, exports5) {
                  "use strict";
                  module5.exports.create = function(spec) {
                    if (!spec) {
                      return null;
                    }
                    if (!spec.array) {
                      return null;
                    }
                    var _array = spec.array.slice(0);
                    return {
                      shuffle: function shuffle() {
                        var i = 0, j = 0, temp = null;
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
                }, {}] }, {}, [1])(1);
              });
            }).call(this);
          }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
        }, {}], 2: [function(_dereq_, module3, exports3) {
          "use strict";
          var shuffleFactory = _dereq_("@mitchallen/shuffle");
          module3.exports.create = function(spec) {
            spec = spec || {};
            var _grid = spec.grid;
            var _DIR_MAP = spec.dirMap || {};
            var _OPPOSITE = spec.oppositeMap || {};
            if (!_grid) {
              return null;
            }
            var VISITED = 1;
            var MASKED = 2;
            var RED = 4;
            var GREEN = 8;
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
              isDir: function isDir(dir) {
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
              getOppositeDir: function getOppositeDir(dir) {
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
              getNeighbor: function getNeighbor(x, y, dir) {
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
              getNeighborDirs: function getNeighborDirs(x, y) {
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
              getShuffledNeighborDirs: function getShuffledNeighborDirs(x, y) {
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
              setFlag: function setFlag(x, y, flag) {
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
              clearFlag: function clearFlag(x, y, flag) {
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
              isFlagSet: function isFlagSet(x, y, flag) {
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
              markVisited: function markVisited(x, y) {
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
              clearVisited: function clearVisited(x, y) {
                return this.clearFlag(x, y, VISITED);
              },
              /** Clear all visited flag from grid
                * @function
                * @instance
                * @memberof module:connection-grid-core
                * @example <caption>usage</caption>
                * core.clearAllVisited();
               */
              clearAllVisited: function clearAllVisited() {
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
              visited: function visited(x, y) {
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
              mask: function mask(x, y) {
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
              clearMask: function clearMask(x, y) {
                return this.clearFlag(x, y, MASKED);
              },
              /** Clear all mask flags from grid
                * @function
                * @instance
                * @memberof module:connection-grid-core
                * @example <caption>usage</caption>
                * core.clearAllMasks();
               */
              clearAllMasks: function clearAllMasks() {
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
              isMasked: function isMasked(x, y) {
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
              markRed: function markRed(x, y) {
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
              clearRed: function clearRed(x, y) {
                return this.clearFlag(x, y, RED);
              },
              /** Clear all red flags from grid
                * @function
                * @instance
                * @memberof module:connection-grid-core
                * @example <caption>usage</caption>
                * core.clearAllRed();
               */
              clearAllRed: function clearAllRed() {
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
              isRed: function isRed(x, y) {
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
              markGreen: function markGreen(x, y) {
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
              clearGreen: function clearGreen(x, y) {
                return this.clearFlag(x, y, GREEN);
              },
              /** Clear all green flags from grid
                * @function
                * @instance
                * @memberof module:connection-grid-core
                * @example <caption>usage</caption>
                * core.clearAllGreen();
               */
              clearAllGreen: function clearAllGreen() {
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
              isGreen: function isGreen(x, y) {
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
              hasConnections: function hasConnections(x, y) {
                var cell = this.get(x, y);
                if (cell === null) {
                  return false;
                }
                cell = cell & ~(VISITED | MASKED | RED | GREEN);
                if (cell === 0) {
                  return false;
                }
                var list = this.getNeighborDirs(x, y);
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = void 0;
                try {
                  for (var _iterator = list[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var sDir = _step.value;
                    if (!this.isDir(sDir)) {
                      console.error("hasConnections unknown direction: ", sDir);
                      return false;
                    }
                    var iDir = _DIR_MAP[sDir];
                    if ((cell & iDir) !== 0) {
                      return true;
                    }
                  }
                } catch (err) {
                  _didIteratorError = true;
                  _iteratorError = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                      _iterator.return();
                    }
                  } finally {
                    if (_didIteratorError) {
                      throw _iteratorError;
                    }
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
              open: function open(x, y, dir) {
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
              close: function close(x, y, dir) {
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
              connect: function connect(x, y, dir) {
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
              disconnect: function disconnect(x, y, dir) {
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
              connectUndirected: function connectUndirected(x, y, sDir) {
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
              disconnectUndirected: function disconnectUndirected(x, y, sDir) {
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
              connectsAny: function connectsAny(x, y, list) {
                var _this = this;
                var connects = false;
                list.forEach(function(el) {
                  if (_this.connects(x, y, el)) {
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
              getMaxDistance: function getMaxDistance(x, y) {
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
              getDistance: function getDistance(x, y, distance) {
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
                var cell = this.get(x, y);
                var list = this.getNeighborDirs(x, y);
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = void 0;
                try {
                  for (var _iterator2 = list[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var sDir = _step2.value;
                    if (!this.isDir(sDir)) {
                      console.error("getDistance unknown direction: ", sDir);
                      return;
                    }
                    var iDir = _DIR_MAP[sDir];
                    if ((cell & iDir) != 0) {
                      var neighbor = this.getNeighbor(x, y, sDir);
                      if (neighbor.x == -1) return;
                      this.getDistance(
                        neighbor.x,
                        neighbor.y,
                        /* ++distance */
                        distance + 1
                      );
                    }
                  }
                } catch (err) {
                  _didIteratorError2 = true;
                  _iteratorError2 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                      _iterator2.return();
                    }
                  } finally {
                    if (_didIteratorError2) {
                      throw _iteratorError2;
                    }
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
              connectionCount: function connectionCount(x, y) {
                if (!this.hasConnections(x, y)) return;
                var cell = this.get(x, y);
                var list = this.getNeighborDirs(x, y);
                var connections = 0;
                var _iteratorNormalCompletion3 = true;
                var _didIteratorError3 = false;
                var _iteratorError3 = void 0;
                try {
                  for (var _iterator3 = list[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var sDir = _step3.value;
                    if (!this.isDir(sDir)) {
                      console.error("connectionCount unknown direction: ", sDir);
                      return 0;
                    }
                    var iDir = _DIR_MAP[sDir];
                    if ((cell & iDir) != 0) {
                      connections++;
                    }
                  }
                } catch (err) {
                  _didIteratorError3 = true;
                  _iteratorError3 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                      _iterator3.return();
                    }
                  } finally {
                    if (_didIteratorError3) {
                      throw _iteratorError3;
                    }
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
              isLeaf: function isLeaf(x, y) {
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
              reset: function reset(x, y) {
                if (!this.isCell(x, y)) {
                  return false;
                }
                var list = this.getNeighborDirs(x, y);
                var _iteratorNormalCompletion4 = true;
                var _didIteratorError4 = false;
                var _iteratorError4 = void 0;
                try {
                  for (var _iterator4 = list[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                    var sDir = _step4.value;
                    if (!this.isDir(sDir)) {
                      console.error(".reset unknown direction: ", sDir);
                      return false;
                    }
                    this.disconnectUndirected(x, y, sDir);
                  }
                } catch (err) {
                  _didIteratorError4 = true;
                  _iteratorError4 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
                      _iterator4.return();
                    }
                  } finally {
                    if (_didIteratorError4) {
                      throw _iteratorError4;
                    }
                  }
                }
                this.clearMask(x, y);
                this.clearVisited(x, y);
                this.clearRed(x, y);
                this.clearGreen(x, y);
                return true;
              }
            });
          };
        }, { "@mitchallen/shuffle": 1 }] }, {}, [2])(2);
      });
    }
  });

  // src/hexagon.js
  var require_hexagon = __commonJS({
    "src/hexagon.js"(exports, module) {
      "use strict";
      var gridFactory = require_grid();
      var baseGrid = require_connection_grid_core().create;
      module.exports = (spec) => {
        spec = spec || {};
        let _x = spec.x || 0;
        let _y = spec.y || 0;
        let _grid = gridFactory.Hexagon({
          x: _x,
          y: _y
        });
        if (!_grid) {
          return null;
        }
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
  var require_circle = __commonJS({
    "src/circle.js"(exports, module) {
      "use strict";
      var gridFactory = require_grid();
      var baseGrid = require_connection_grid_core().create;
      module.exports = (spec) => {
        spec = spec || {};
        let _rings = spec.rings || 0;
        let _grid = gridFactory.Circle({
          rings: _rings
        });
        if (!_grid) {
          return null;
        }
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
    }
  });

  // src/triangle.js
  var require_triangle = __commonJS({
    "src/triangle.js"(exports, module) {
      "use strict";
      var gridFactory = require_grid();
      var baseGrid = require_connection_grid_core().create;
      module.exports = (spec) => {
        spec = spec || {};
        let _x = spec.x || 0;
        let _y = spec.y || 0;
        let _grid = gridFactory.Square({
          x: _x,
          y: _y
        });
        if (!_grid) {
          return null;
        }
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
      var squareGrid = require_connection_grid_square().create;
      var hexagonGrid = require_hexagon();
      var circleGrid = require_circle();
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
