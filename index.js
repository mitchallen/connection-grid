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
    _grid.fill(0);

    // bit masks
    let N = 1; 
    let S = 2; 
    let E = 4;
    let W = 8;

    // Default square configuration
    let DX = { E: 1, W: -1, N: 0, S: 0 };
    let DY = { E: 0, W: 0, N: -1, S: 1 };
    let OPPOSITE = { E: W, W: E, N: S, S: N };

    return Object.assign( _grid, {
        log: function() { 
            console.log( this.cloneArray() ); 
        },
        getNeighbors: function( x, y ) {
            // Classic ignores x and y, but other derived classes may not
            return [ N, S, E, W ];
        }
    });
};
