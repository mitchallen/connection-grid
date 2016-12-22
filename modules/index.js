/**
    Module: @mitchallen/connection-grid
    Author: Mitch Allen
*/

/*jshint node: true */
/*jshint esversion: 6 */

"use strict";

var gridFactory = require("@mitchallen/grid"),
    baseGrid = require('./base'),
    squareGrid = require('./square'),
    hexagonGrid = require('./hexagon'),
    circleGrid = require('./circle'),
    triangleGrid = require('./triangle');

var createGrid = (spec) => {
    console.warn("@mitchallen/connection-grid: .create is deprecated. Use .Square instead.");
    return squareGrid( spec );
};

module.exports = {
    create: createGrid,
    Square: squareGrid,
    Hexagon: hexagonGrid,
    Circle: circleGrid,
    Triangle: triangleGrid,
};