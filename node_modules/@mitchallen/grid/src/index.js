/**
    Module: @mitchallen/grid
    Author: Mitch Allen
*/

/*jshint node: true */
/*jshint esversion: 6 */

"use strict";

var squareGrid = require('@mitchallen/grid-square').create,
    circleGrid = require('./circle');
 
var createGrid = (spec) => {
    console.warn("@mitchallen/grid: .create is deprecated. Use .Square instead.");
    return squareGrid( spec );
};

module.exports = {
    create: createGrid,
    Square: squareGrid,
    Circle: circleGrid,
    // For future expansion (mapped to square for now)
    Hexagon: squareGrid,
    Triangle: squareGrid,
};

