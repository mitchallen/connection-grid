/**
    Module: @mitchallen/grid
      Test: square-get-test
    Author: Mitch Allen
*/

"use strict";

const { describe, it, before, after, beforeEach, afterEach } = require('node:test');
const assert = require('node:assert');
const modulePath = "../../src/index";

describe('Square get method', function() {

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

    it('should return value when called with valid x and y parameters', function() {
        var obj = _module.Square({ x: 1, y: 1 });
        assert.ok(obj != null);
        let tX = 0;
        let tY = 0;
        let tValue = 5;
        var condition = obj.set(tX,tY,tValue);
        assert.deepStrictEqual(condition, true);
        var result = obj.get(tX,tY);
        assert.deepStrictEqual(result, tValue);
    });

    it('should return value when called with x and y parameters set to size minus one', function() {
        let sizeX = 20;
        let sizeY = 10;
        var obj = _module.Square({ x: sizeX, y: sizeY });
        assert.ok(obj != null);
        let tX = sizeX-1;
        let tY = sizeY-1;
        let tValue = 5;
        var condition = obj.set(tX,tY,tValue);
        assert.deepStrictEqual(condition, true);
        var result = obj.get(tX,tY);
        assert.deepStrictEqual(result, tValue);
    });

    it('should return negative value', function() {
        let sizeX = 20;
        let sizeY = 10;
        var obj = _module.Square({ x: sizeX, y: sizeY });
        assert.ok(obj != null);
        let tX = sizeX-1;
        let tY = sizeY-1;
        let tValue = -5;
        var condition = obj.set(tX,tY,tValue);
        assert.deepStrictEqual(condition, true);
        var result = obj.get(tX,tY);
        assert.deepStrictEqual(result, tValue);
    });

    it('should return string', function() {
        let sizeX = 20;
        let sizeY = 10;
        var obj = _module.Square({ x: sizeX, y: sizeY });
        assert.ok(obj != null);
        let tX = sizeX-1;
        let tY = sizeY-1;
        let tValue = "foo";
        var condition = obj.set(tX,tY,tValue);
        assert.deepStrictEqual(condition, true);
        var result = obj.get(tX,tY);
        assert.deepStrictEqual(result, tValue);
    });

    it('should return object', function() {
        let sizeX = 20;
        let sizeY = 10;
        var obj = _module.Square({ x: sizeX, y: sizeY });
        assert.ok(obj != null);
        let tX = sizeX-1;
        let tY = sizeY-1;
        let data = "foo";
        let tValue = { name: data };
        var condition = obj.set(tX,tY,tValue);
        assert.deepStrictEqual(condition, true);
        var result = obj.get(tX,tY);
        assert.deepStrictEqual(result, tValue);
        assert.ok(result.name != null);
        assert.deepStrictEqual(result.name, data);
    });

    it('should return date', function() {
        let sizeX = 20;
        let sizeY = 10;
        var obj = _module.Square({ x: sizeX, y: sizeY });
        assert.ok(obj != null);
        let tX = sizeX-1;
        let tY = sizeY-1;
        let tValue = new Date();
        var condition = obj.set(tX,tY,tValue);
        assert.deepStrictEqual(condition, true);
        var result = obj.get(tX,tY);
        assert.deepStrictEqual(result, tValue);
    });

    it('should return function', function() {
        let sizeX = 20;
        let sizeY = 10;
        var obj = _module.Square({ x: sizeX, y: sizeY });
        assert.ok(obj != null);
        let tX = sizeX-1;
        let tY = sizeY-1;
        let fReturn = 123;
        let tValue = function() { return fReturn; };
        var condition = obj.set(tX,tY,tValue);
        assert.deepStrictEqual(condition, true);
        var result = obj.get(tX,tY);
        assert.deepStrictEqual(result, tValue);
        assert.deepStrictEqual(result(), fReturn);
    });
});
