/**
    Module: @mitchallen/grid
      Test: hexagon-smoke-test
    Author: Mitch Allen
*/

"use strict";

const { describe, it, before, after, beforeEach, afterEach } = require('node:test');
const assert = require('node:assert');
const modulePath = "../../src/index";

describe('Hexagon smoke test', function() {

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

    it('module should exist', function() {
        assert.ok(_module != null);
    });

    it('Hexagon method with no spec should return object', function() {
        var grid = _module.Hexagon();
        assert.ok(grid != null);
    });

    it('Hexagon method with valid x and y parameters should return object', function() {
        var grid = _module.Hexagon({ x: 5, y: 5 });
        assert.ok(grid != null);
    });

    it('xSize should return size of x dimension', function() {
        let sizeX = 5;
        let sizeY = 6;
        var grid = _module.Hexagon({ x: sizeX, y: sizeY });
        assert.deepStrictEqual(grid.xSize, sizeX);
    });

    it('ySize should return size of y dimension', function() {
        let sizeX = 5;
        let sizeY = 6;
        var grid = _module.Hexagon({ x: sizeX, y: sizeY });
        assert.deepStrictEqual(grid.ySize, sizeY);
    });

    it('isCell method with valid x and y parameters should return true', function() {
        let sizeX = 5;
        let sizeY = 5;
        var grid = _module.Hexagon({ x: sizeX, y: sizeY });
        assert.ok(grid != null);
        var result = grid.isCell(sizeX-1, sizeY-1);
        assert.deepStrictEqual(result, true);
    });

    it('set method with valid parameter should return true', function() {
        var grid = _module.Hexagon({ x: 1, y: 1 });
        assert.ok(grid != null);
        var result = grid.set(0,0,5);
        assert.deepStrictEqual(result, true);
    });

    it('get method with valid parameter should return value', function() {
        var grid = _module.Hexagon({ x: 1, y: 1 });
        assert.ok(grid != null);
        let tX = 0;
        let tY = 0;
        let tValue = 5;
        var condition = grid.set(tX,tY,tValue);
        assert.deepStrictEqual(condition, true);
        var result = grid.get(tX,tY);
        assert.deepStrictEqual(result, tValue);
    });

    it('fill method with valid integer should fill grid with integer', function() {
        let xSize = 5;
        let ySize = 10;
        var grid = _module.Hexagon({ x: xSize, y: ySize });
        assert.ok(grid != null);
        let tValue = 999;
        var result = grid.fill(tValue);
        for(var x = 0; x < xSize; x++ ) {
            for(var y = 0; y < ySize; y++ ) {
                assert.deepStrictEqual(grid.get(x,y), tValue);
            }
        }
    });

   it('cloneArray method should return a clone of the internal array', function() {
        var grid = _module.Hexagon({ x: 1, y: 1 });
        assert.ok(grid != null);
        let tX = 0;
        let tY = 0;
        let tValue = 100;
        var result = grid.set(tX,tY,tValue);
        assert.deepStrictEqual(result, true);
        var arr = grid.cloneArray();
        assert.deepStrictEqual(arr[tX][tY], tValue);
    });

    it('log method should not throw exception', function() {
        let xSize = 4;
        let ySize = 5;
        var grid = _module.Hexagon({ x: xSize, y: ySize });
        assert.ok(grid != null);
        grid.fill(10)
        grid.set(0,0,20);
        grid.set(xSize - 1, ySize - 1,30);
        grid.log();
    });

    it('getNeighborDirs should return correct lists', function() {
        var grid = _module.Hexagon({ x: 5, y: 5 });
        assert.ok(grid != null);
        assert.deepStrictEqual(grid.getNeighborDirs(1,1), [ "N", "S", "E", "W", "SW", "SE" ]);
        assert.deepStrictEqual(grid.getNeighborDirs(2,1), [ "N", "S", "E", "W", "NW", "NE" ]);
    });

    it('getShuffledNeighborDirs should return shuffled list', function() {
        var grid = _module.Hexagon({ x: 5, y: 5 });
        assert.ok(grid != null);
        let tX = 1;
        let tY = 2;
        var shuffled = grid.getShuffledNeighborDirs(tX,tY);
        assert.deepStrictEqual(shuffled.length, 6);
        // Now and then it does return same list ...
        // assert.notDeepStrictEqual(shuffled, grid.getNeighborDirs(tX,tY));
    });

    it('markVisited should return true for valid cell', function() {
        var grid = _module.Hexagon({ x: 3, y: 3 });
        assert.ok(grid != null);
        let tX = 0;
        let tY = 0;
        let VISITED = 0x01;
        var result = grid.markVisited(tX,tY);
        assert.deepStrictEqual(result, true);
        assert.deepStrictEqual(grid.get(tX,tY), VISITED);
    });

    it('visited should return true for a visited cell', function() {
        var grid = _module.Hexagon({ x: 3, y: 3 });
        assert.ok(grid != null);
        let tX = 0;
        let tY = 0;
        assert.deepStrictEqual(grid.markVisited(tX,tY), true);
        assert.deepStrictEqual(grid.visited(tX,tY), true);
    });

    it('hasConnections should return false when nothing connected', function() {
        var grid = _module.Hexagon({ x: 3, y: 3 });
        assert.ok(grid != null);
        let tX = 0;
        let tY = 0;
        assert.deepStrictEqual(grid.hasConnections(tX,tY), false);
    });

    it('getNeighbor should return neighbor x and y values', function() {
        var grid = _module.Hexagon({ x: 5, y: 5 });
        assert.ok(grid != null);
        let tX = 2;
        let tY = 3;
        let list = ["N","S","E","W"];
        for( var key in list ) {
            var sDir = list[key];
            var cell = grid.getNeighbor(tX,tY,sDir);
            assert.ok(cell != null);
            assert.deepStrictEqual((cell.x >= tX - 1 && cell.x <= tX + 1), true);
            assert.deepStrictEqual((cell.y >= tY - 1 && cell.y <= tY + 1), true);
        }
    });

    it('connect should return true for valid parameters and set cell value to direction', function() {
        var grid = _module.Hexagon({ x: 3, y: 3 });
        assert.ok(grid != null);
        let tX = 0;
        let tY = 0;
        assert.deepStrictEqual(grid.connect(tX,tY,"S"), true);
        let dirMap = grid.dirMap;  
        assert.deepStrictEqual(grid.get(tX,tY), dirMap.S);
    });

    it('connectUndirected should return true for valid parameters and set cell values to direction', function() {
        var grid = _module.Hexagon({ x: 3, y: 3 });
        assert.ok(grid != null);
        let tX = 0;
        let tY = 0;
        let status = grid.connectUndirected(tX,tY,"S");
        assert.deepStrictEqual(status, true);
        let dirMap = grid.dirMap;
        assert.deepStrictEqual(grid.get(tX,tY), dirMap.S);
        // Verify S neighbor points back to N neighbor
        var n = grid.getNeighbor(tX,tY,"S");
        assert.ok(n != null);
        assert.deepStrictEqual(grid.get(n.x,n.y), dirMap.N);
    });

    it('connects should return true for valid connection in direction', function() {
        var grid = _module.Hexagon({ x: 3, y: 3 });
        assert.ok(grid != null);
        let tX = 0;
        let tY = 0;
        assert.deepStrictEqual(grid.connect(tX,tY,"S"), true);
        assert.deepStrictEqual(grid.connects(tX,tY,"S"), true);
    });

    it('connects should return false for invalid connection in direction', function() {
        var grid = _module.Hexagon({ x: 3, y: 3 });
        assert.ok(grid != null);
        let tX = 0;
        let tY = 0;
        assert.deepStrictEqual(grid.connect(tX,tY,"S"), true);
        assert.deepStrictEqual(grid.connects(tX,tY,"N"), false);
    });

    it('isMasked should return true for a masked cell', function() {
        var grid = _module.Hexagon({ x: 3, y: 3 });
        assert.ok(grid != null);
        let tX = 0;
        let tY = 0;
        assert.deepStrictEqual(grid.mask(tX,tY), true);
        assert.deepStrictEqual(grid.isMasked(tX,tY), true);
    });

    it('getOppositeDir should return opposite neighbor', function() {
        var grid = _module.Hexagon({ x: 5, y: 5 });
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

    it('connectsAny should return false for empty list', function() {
        let xSize = 5, ySize = 6;
        var grid = _module.Hexagon({ x: xSize, y: ySize });
        assert.ok(grid != null);
        let x = 1;
        let y = 1;
        assert.deepStrictEqual(grid.connectsAny(x,y,[]), false);
    });

    it('connectsAny should return false for invalid connection in direction', function() {
        let xSize = 5, ySize = 6;
        var grid = _module.Hexagon({ x: xSize, y: ySize });
        assert.ok(grid != null);
        let x = 1;
        let y = 1;
        assert.deepStrictEqual(grid.connectsAny(x,y,["N"]), false);
    });

    it('connectsAny should return false if direction not in list', function() {
        let xSize = 5, ySize = 6;
        var grid = _module.Hexagon({ x: xSize, y: ySize });
        assert.ok(grid != null);
        let x = 1;
        let y = 1;
        assert.deepStrictEqual(grid.connect(x,y,"N"), true);
        assert.deepStrictEqual(grid.connectsAny(x,y,["E","S","W"]), false);
    });

    it('connectsAny should return true for valid connection in direction', function() {
        let xSize = 5, ySize = 6;
        var grid = _module.Hexagon({ x: xSize, y: ySize });
        assert.ok(grid != null);
        let x = 1;
        let y = 1;
        assert.deepStrictEqual(grid.connect(x,y,"N"), true);
        assert.deepStrictEqual(grid.connectsAny(x,y,["N"]), true);
    });

    it('connectsAny should return true for any valid connection in direction', function() {
        let xSize = 5, ySize = 6;
        var grid = _module.Hexagon({ x: xSize, y: ySize });
        assert.ok(grid != null);
        let x = 1;
        let y = 1;
        assert.deepStrictEqual(grid.connect(x,y,"N"), true);
        assert.deepStrictEqual(grid.connectsAny(x,y,["S","N","E"]), true);
    });

    it('connectsAny should return false for non-existant direction in list', function() {
        let xSize = 5, ySize = 6;
        var grid = _module.Hexagon({ x: xSize, y: ySize });
        assert.ok(grid != null);
        let x = 1;
        let y = 1;
        assert.deepStrictEqual(grid.connect(x,y,"N"), true);
        assert.deepStrictEqual(grid.connectsAny(x,y,["E","X","W"]), false);
    });

    it('exercises getNeighborDirs and getNeighbor for every cell', function() {
        var grid = _module.Hexagon({ x: 5, y: 5 });
        assert.ok(grid != null);
        const dirs = ["N", "S", "E", "W", "NW", "NE", "SW", "SE"];
        for (let x = 0; x < grid.xSize; x++) {
            for (let y = 0; y < grid.ySize; y++) {
                assert.ok(Array.isArray(grid.getNeighborDirs(x, y)));
                for (let dir of dirs) {
                    // returns a neighbor cell or null at grid edges
                    grid.getNeighbor(x, y, dir);
                }
            }
        }
        // invalid cell and invalid direction both return null
        assert.strictEqual(grid.getNeighbor(-1, -1, "N"), null);
        assert.strictEqual(grid.getNeighbor(0, 0, "ZZ"), null);
    });
});
