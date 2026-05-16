/**
    Module: @mitchallen/grid
      Test: multi-test
    Author: Mitch Allen
*/

"use strict";

const { describe, it, before, after, beforeEach, afterEach } = require('node:test');
const assert = require('node:assert');
const modulePath = "../../src/index";

describe('multiple grids', function() {

    var _module = null;

    before(function() {
        // Call before all tests
        delete require.cache[require.resolve(modulePath)];
        _module = require(modulePath);
    });

    after(function() {
        // Call after all tests
    });

    beforeEach(function() {
        // Call before each test
    });

    afterEach(function() {
        // Call after eeach test
    });

    it('should not interere with each other', function() {
        let sizeX = 20;
        let sizeY = 10;
        var grid0 = _module.create({ x: sizeX, y: sizeY });
        assert.ok(grid0 != null);
        var grid1 = _module.create({ x: sizeX, y: sizeY });
        assert.ok(grid1 != null);
        let tX = sizeX-1;
        let tY = sizeY-1;
        let tValues = [ 100, 200 ];
        // Set values
        var condition0 = grid0.set(tX,tY,tValues[0]);
        assert.deepStrictEqual(condition0, true);
        var condition1 = grid1.set(tX,tY,tValues[1]);
        assert.deepStrictEqual(condition1, true);
        // Get and test values
        var result0 = grid0.get(tX,tY);
        assert.deepStrictEqual(result0, tValues[0]);
        var result1 = grid1.get(tX,tY);
        assert.deepStrictEqual(result1, tValues[1]);
    });

});
