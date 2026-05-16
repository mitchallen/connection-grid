/**
    Module: @mitchallen/grid
      Test: square-fill-test
    Author: Mitch Allen
*/

"use strict";

const { describe, it, before, after, beforeEach, afterEach } = require('node:test');
const assert = require('node:assert');
const modulePath = "../../src/index";

describe('Square fill method', function() {

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

    it('should fill grid with integer when called with integer', function() {
        let xSize = 5;
        let ySize = 10;
        var obj = _module.Square({ x: xSize, y: ySize });
        assert.ok(obj != null);
        let fillValue = 999;
        var result = obj.fill(fillValue);
        for(var x = 0; x < xSize; x++ ) {
            for(var y = 0; y < ySize; y++ ) {
                assert.deepStrictEqual(obj.get(x,y), fillValue);
            }
        }
    });

    it('should not change grid when called with no argument', function() {
        let xSize = 5;
        let ySize = 10;
        var obj = _module.Square({ x: xSize, y: ySize });
        assert.ok(obj != null);
        var result = obj.fill();
        for(var x = 0; x < xSize; x++ ) {
            for(var y = 0; y < ySize; y++ ) {
                assert.ok(obj.get(x,y) == null);
            }
        }
    });

    it('should override existing values', function() {
        let xSize = 5;
        let ySize = 10;
        var obj = _module.Square({ x: xSize, y: ySize });
        assert.ok(obj != null);
        let tX = 3;
        let tY = 4;
        let tValue = 100;
        assert.deepStrictEqual(obj.set(tX,tY,tValue), true);
        let fillValue = 999;
        var result = obj.fill(fillValue);
        assert.deepStrictEqual(obj.get(tX,tY), fillValue);
    });

    it('should fill grid with string when called with a string', function() {
        let xSize = 5;
        let ySize = 10;
        var obj = _module.Square({ x: xSize, y: ySize });
        assert.ok(obj != null);
        let fillValue = "foo";
        var result = obj.fill(fillValue);
        for(var x = 0; x < xSize; x++ ) {
            for(var y = 0; y < ySize; y++ ) {
                assert.deepStrictEqual(obj.get(x,y), fillValue);
            }
        }
    });

    it('should fill grid with object when called with a object', function() {
        let xSize = 5;
        let ySize = 10;
        var obj = _module.Square({ x: xSize, y: ySize });
        assert.ok(obj != null);
        let tName = "foo";
        let fillValue = { name: tName };
        var result = obj.fill(fillValue);
        for(var x = 0; x < xSize; x++ ) {
            for(var y = 0; y < ySize; y++ ) {
                var result = obj.get(x,y);
                assert.deepStrictEqual(result, fillValue);
                assert.deepStrictEqual(result.name, tName);
            }
        }
    });
});
