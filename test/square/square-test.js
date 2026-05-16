/**
    Module: @mitchallen/grid
      Test: square-test
    Author: Mitch Allen
*/

"use strict";

const { describe, it, before, after, beforeEach, afterEach } = require('node:test');
const assert = require('node:assert');
const modulePath = "../../src/index";

describe('Square method', function() {

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

    it('should return obj when missing spec parameter', function() {
        var obj = _module.Square();
        assert.ok(obj != null);
    });

    it('should return object when called no spec x parameter', function() {
        var obj = _module.Square({ y: 5 });
        assert.ok(obj != null);
        assert.deepStrictEqual(obj.xSize, 0);
    });

    it('should return object when called no spec y parameter', function() {
        var obj = _module.Square({ x: 5 });
        assert.ok(obj != null);
        assert.deepStrictEqual(obj.ySize, 0);
    });

    it('should return object when called with valid x and y parameters', function() {
        var obj = _module.Square({ x: 5, y: 5 });
        assert.ok(obj != null);
    });

    it('should return null when called with x and y spec parameters set to zero (0) ', function() {
        var obj = _module.Square({ x: 0, y: 0 });
        assert.ok(obj != null);
        assert.deepStrictEqual(obj.xSize, 0);
        assert.deepStrictEqual(obj.ySize, 0);
    });

    it('should return null when called with a spec x parameter set to zero (0)', function() {
        var obj = _module.Square({ x: 0, y: 1 });
        assert.ok(obj != null);
        assert.deepStrictEqual(obj.xSize, 0);
    });

    it('should return object when called with a spec y parameter set to zero (0)', function() {
        var obj = _module.Square({ x: 1, y: 0 });
        assert.ok(obj != null);
        assert.deepStrictEqual(obj.ySize, 0);
    });

    it('should return an object when called with x and y set to one (1)', function() {
        var obj = _module.Square({ x: 1, y: 1 });
        assert.ok(obj != null);
    });

    it('should return object when called with x and y set to negative value', function() {
        var obj = _module.Square({ x: -1, y: -1 });
        assert.ok(obj != null);
        assert.deepStrictEqual(obj.xSize, 0);
        assert.deepStrictEqual(obj.ySize, 0);
    });

    it('should return object when called with x set to negative value', function() {
        var obj = _module.Square({ x: -1, y: 1 });
        assert.ok(obj != null);
        assert.deepStrictEqual(obj.xSize, 0);
    });

    it('should return object when called with y set to negative value', function() {
        var obj = _module.Square({ x: 1, y: -1 });
        assert.ok(obj != null);
        assert.deepStrictEqual(obj.ySize, 0);
    });
});
