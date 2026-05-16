/**
    Module: @mitchallen/grid
      Test: square-mask-test
    Author: Mitch Allen
*/

"use strict";

const { describe, it, before, after, beforeEach, afterEach } = require('node:test');
const assert = require('node:assert');
const modulePath = "../../src/index";

describe('Square mask', function() {

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

    it('isMasked should return true for a masked cell', function() {
        var grid = _module.Square({ x: 3, y: 3 });
        assert.ok(grid != null);
        let tX = 0;
        let tY = 0;
        assert.deepStrictEqual(grid.mask(tX,tY), true);
        assert.deepStrictEqual(grid.isMasked(tX,tY), true);
    });

    it('isMasked should return false for a non-masked cell', function() {
        var grid = _module.Square({ x: 3, y: 3 });
        assert.ok(grid != null);
        let tX = 0;
        let tY = 0;
        assert.deepStrictEqual(grid.isMasked(tX,tY), false);
    });
});
