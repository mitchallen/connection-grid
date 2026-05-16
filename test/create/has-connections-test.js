/**
    Module: @mitchallen/grid
      Test: has-connections-test
    Author: Mitch Allen
*/

"use strict";

const { describe, it, before, after, beforeEach, afterEach } = require('node:test');
const assert = require('node:assert');
const modulePath = "../../src/index";

describe('hasConnections', function() {

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

    it('should return false when nothing connected', function() {
        var grid = _module.create({ x: 3, y: 3 });
        assert.ok(grid != null);
        let tX = 0;
        let tY = 0;
        assert.deepStrictEqual(grid.hasConnections(tX,tY), false);
    });

    it('marked should return false when nothing connected and marked visited', function() {
        var grid = _module.create({ x: 3, y: 3 });
        assert.ok(grid != null);
        let tX = 0;
        let tY = 0;
        assert.deepStrictEqual(grid.markVisited(tX,tY), true);
        assert.deepStrictEqual(grid.hasConnections(tX,tY), false);
    });

    it('should return true when connected', function() {
        var grid = _module.create({ x: 3, y: 3 });
        assert.ok(grid != null);
        let tX = 0;
        let tY = 0;
        grid.connect(tX,tY,"S");
        assert.deepStrictEqual(grid.hasConnections(tX,tY), true);
    });


    it('should return true when connected and marked visited', function() {
        var grid = _module.create({ x: 3, y: 3 });
        assert.ok(grid != null);
        let tX = 0;
        let tY = 0;
        grid.connect(tX,tY,"S");
        assert.deepStrictEqual(grid.markVisited(tX,tY), true);
        assert.deepStrictEqual(grid.hasConnections(tX,tY), true);
    });

});
