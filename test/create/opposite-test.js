/**
    Module: @mitchallen/grid
      Test: opposite-test
    Author: Mitch Allen
*/

"use strict";

const { describe, it, before, after, beforeEach, afterEach } = require('node:test');
const assert = require('node:assert');
const modulePath = "../../src/index";

describe('getOppositeDir', function() {

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

    it('should return opposite neighbor', function() {
        var grid = _module.create({ x: 5, y: 5 });
        assert.ok(grid != null);
        let tX = 2;
        let tY = 3;
        let list = ["N","S","E","W"];
        let opps = ["S","N","W","E"];
        for( var key in list ) {
            var sDir = list[key];
            var oDir = grid.getOppositeDir(sDir);
            assert.deepStrictEqual(oDir, opps[key]);
        }
    });

    it('should return null for invalid dir', function() {
        var grid = _module.create({ x: 5, y: 5 });
        assert.ok(grid != null);
        var sDir = "X";
        var oDir = grid.getOppositeDir(sDir);
        assert.ok(oDir == null);
    });

    it('should return null for null dir', function() {
        var grid = _module.create({ x: 5, y: 5 });
        assert.ok(grid != null);
        var sDir = null;
        var oDir = grid.getOppositeDir(sDir);
        assert.ok(oDir == null);
    });
});
