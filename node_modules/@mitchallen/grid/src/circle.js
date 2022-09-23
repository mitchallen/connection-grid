/**
    Module: @mitchallen/grid/modules/circle.js
    Author: Mitch Allen
*/

/*jshint node: true */
/*jshint esversion: 6 */

"use strict";

var coreGrid = require('@mitchallen/grid-core');

module.exports = (spec = {}) => {

    let {
      rings: _rings = 0,
    } = spec;

    _rings = Math.max( _rings, 0 );

    var obj = coreGrid.create( { rows: _rings } );

    // prepare grid

    // Single cell on row 0.
    obj.set(0,0,0);

    // rings are rows
    var rowHeight = 1.0 / _rings;

    for( var i = 1; i < _rings; i++ ) {
        // console.log("row: %d", i );
        var radius = i / _rings;
        // console.log(" ... row: %d, radius: %d", i, radius );
        var circumference = 2 * Math.PI * radius;
        // console.log(" ... circumference:", circumference );
        var previousCount = obj.rowSize( i - 1 );
        // console.log(" ... previousCount:", previousCount );
        var estimatedCellWidth = circumference / previousCount;
        // console.log(" ... estimatedCellWidth:", estimatedCellWidth );
        var ratio = Math.round( estimatedCellWidth / rowHeight);
        // console.log(" ... ratio:", ratio );
        var cells = previousCount * ratio;
        // console.log(" ... cells:", cells );
        for(var j = 0; j < cells; j++ ) {
            // _array[i].push(0);
            obj.set(i,j,0);
        }
        // console.log(_array[i]);
    }

    Object.defineProperties( obj, {
        "rings": {
            writeable: false,
            value: _rings,
            enumerable: true
        },
    });

    return Object.assign( obj, {
        ringSize: function(ring) {
            // rings equal rows in base class
            return this.rowSize(ring);
        },
    });

};