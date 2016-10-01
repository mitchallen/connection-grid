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
    // place holder example
    _grid.hello = function() { console.log("Hello grid!"); }
    return _grid;
};
