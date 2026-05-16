/**
    Module: @mitchallen/grid
      Test: set-test
    Author: Mitch Allen
*/

"use strict";

const { describe, it, before, after, beforeEach, afterEach } = require('node:test');
const assert = require('node:assert');
const modulePath = "../../src/index";

describe('set method', function() {

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

    it('should return true when called with valid parameters', function() {
        var obj = _module.create({ x: 1, y: 1 });
        assert.ok(obj != null);
        var result = obj.set(0,0,5);
        assert.deepStrictEqual(result, true);
    });

    it('should return second value when called twice with same x and y values', function() {
        var obj = _module.create({ x: 1, y: 1 });
        assert.ok(obj != null);
        let tX = 0;
        let tY = 0;
        let tValues = [ 5, 10 ];
        var condition = obj.set(tX,tY,tValues[0]);
        assert.deepStrictEqual(condition, true);
        condition = obj.set(tX,tY,tValues[1]);
        assert.deepStrictEqual(condition, true);
        var result = obj.get(tX,tY);
        assert.deepStrictEqual(result, tValues[1]);
    });

    it('should return true when called with x and y parameters set to size minus one', function() {
        let sizeX = 10;
        let sizeY = 20;
        var obj = _module.create({ x: sizeX, y: sizeY });
        assert.ok(obj != null);
        var result = obj.set(sizeX-1,sizeY-1,5);
        assert.deepStrictEqual(result, true);
    });

    it('should return true when called with negative cell value', function() {
        var obj = _module.create({ x: 1, y: 1 });
        assert.ok(obj != null);
        var result = obj.set(0,0,-1);
        assert.deepStrictEqual(result, true);
    });

    it('should return true when called with string value', function() {
        var obj = _module.create({ x: 1, y: 1 });
        assert.ok(obj != null);
        var result = obj.set(0,0,"foo");
        assert.deepStrictEqual(result, true);
    });

    it('should return true when called with object value', function() {
        var obj = _module.create({ x: 1, y: 1 });
        assert.ok(obj != null);
        var result = obj.set(0,0,{ name: "foo" });
        assert.deepStrictEqual(result, true);
    });
});
