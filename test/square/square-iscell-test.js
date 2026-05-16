/**
    Module: @mitchallen/grid
      Test: square-iscell-test
    Author: Mitch Allen
*/

"use strict";

const { describe, it, before, after, beforeEach, afterEach } = require('node:test');
const assert = require('node:assert');
const modulePath = "../../src/index";

describe('Square isCell method', function() {

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

    it('should return true when called with valid x and y parameters', function() {
        let sizeX = 5;
        let sizeY = 5;
        var obj = _module.Square({ x: sizeX, y: sizeY });
        assert.ok(obj != null);
        var result = obj.isCell(sizeX-1, sizeY-1);
        assert.deepStrictEqual(result, true);
    });

    it('should return true when called with x and y parameters set to zero', function() {
        let sizeX = 1;
        let sizeY = 1;
        var obj = _module.Square({ x: sizeX, y: sizeY });
        assert.ok(obj != null);
        var result = obj.isCell(0, 0);
        assert.deepStrictEqual(result, true);
    });

    it('should return true when called with x and y parameters set to size minus one', function() {
        let sizeX = 10;
        let sizeY = 5;
        var obj = _module.Square({ x: sizeX, y: sizeY });
        assert.ok(obj != null);
        var result = obj.isCell(sizeX-1, sizeY-1);
        assert.deepStrictEqual(result, true);
    });

    it('should return false when called with negative x and y parameters', function() {
        let sizeX = 5;
        let sizeY = 5;
        var obj = _module.Square({ x: sizeX, y: sizeY });
        assert.ok(obj != null);
        var result = obj.isCell(-1, -1);
        assert.deepStrictEqual(result, false);
    });

    it('should return false when called with negative x parameter', function() {
        let sizeX = 5;
        let sizeY = 5;
        var obj = _module.Square({ x: sizeX, y: sizeY });
        assert.ok(obj != null);
        var result = obj.isCell(-1, sizeY-1);
        assert.deepStrictEqual(result, false);
    });

    it('should return false when called with negative y parameter', function() {
        let sizeX = 5;
        let sizeY = 5;
        var obj = _module.Square({ x: sizeX, y: sizeY });
        assert.ok(obj != null);
        var result = obj.isCell(sizeX-1, -1);
        assert.deepStrictEqual(result, false);
    });

});
