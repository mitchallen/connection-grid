/**
    Module: @mitchallen/connection-grid
      Test: circle-smoke-test
    Author: Mitch Allen
*/

"use strict";

const { describe, it, before, after, beforeEach, afterEach } = require('node:test');
const assert = require('node:assert');
const modulePath = "../../src/index";

describe('Circle smoke test', function() {

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

    it('Circle method with no spec should return object', function() {
        var grid = _module.Circle();
        assert.ok(grid != null);
    });

    it('Circle method with valid x and y parameters should return object', function() {
        var grid = _module.Circle({ rings: 5 });
        assert.ok(grid != null);
    });

    it('Rings should return number of rings', function() {
        let rings = 5;
        var grid = _module.Circle({ rings: rings });
        assert.deepStrictEqual(grid.rings, rings);
    });

    it('RingSize should return size of ring', function() {
        let rings = 5;
        var grid = _module.Circle({ rings: rings });
        assert.deepStrictEqual(grid.ringSize(1), 6);
    });

    it('isCell method with valid ring and position parameters should return true', function() {
        let rings = 5;
        var grid = _module.Circle({ rings: rings });
        assert.ok(grid != null);
        var result = grid.isCell(1,5);
        assert.deepStrictEqual(result, true);
    });

    it('set method with valid parameter should return true', function() {
        var grid = _module.Square({ x: 1, y: 1 });
        assert.ok(grid != null);
        var result = grid.set(0,0,5);
        assert.deepStrictEqual(result, true);
    });

    it('get method with valid parameter should return value', function() {
        let rings = 5;
        var grid = _module.Circle({ rings: rings });
        assert.ok(grid != null);
        let ring = 1;
        let pos = 4;
        let tValue = 5;
        var condition = grid.set(ring,pos,tValue);
        assert.deepStrictEqual(condition, true);
        var result = grid.get(ring,pos);
        assert.deepStrictEqual(result, tValue);
    });

    it('fill method with valid integer should fill grid with integer', function() {
        let rings = 5;
        var grid = _module.Circle({ rings: rings });
        assert.ok(grid != null);
        let tValue = 999;
        var result = grid.fill(tValue);
        for(var r = 0; r < rings; r++ ) {
            var rSize = grid.ringSize(r);
            for(var pos = 0; pos < rSize; pos++ ) {
                assert.deepStrictEqual(grid.get(r,pos), tValue);
            }
        }
    });

   it('cloneArray method should return a clone of the internal array', function() {
        let rings = 5;
        var grid = _module.Circle({ rings: rings });
        assert.ok(grid != null);
        let ring = 0;
        let pos = 0;
        let tValue = 100;
        var result = grid.set(ring,pos,tValue);
        assert.deepStrictEqual(result, true);
        var arr = grid.cloneArray();
        assert.deepStrictEqual(arr[ring][pos], tValue);
    });

    it('log method should not throw exception', function() {
        let rings = 3;
        var grid = _module.Circle({ rings: rings });
        assert.ok(grid != null);
        grid.fill(40)
        grid.set(0,0,50);
        var ring = rings - 1;
        var pos = grid.ringSize(ring) - 1;
        grid.set(ring, pos,60);
        grid.log();
    });

    it('ringSize method should return expected values', function() {
        let rings = 7;
        var grid = _module.Circle({ rings: rings });
        assert.ok(grid != null);
        assert.deepStrictEqual(grid.ringSize(0), 1);
        assert.deepStrictEqual(grid.ringSize(1), 6);
        assert.deepStrictEqual(grid.ringSize(2), 12);
        assert.deepStrictEqual(grid.ringSize(3), 24);
        assert.deepStrictEqual(grid.ringSize(4), 24);
        assert.deepStrictEqual(grid.ringSize(5), 24);
        assert.deepStrictEqual(grid.ringSize(6), 48);
    });

    it('getNeighborDirs should return true for valid values', function() {
        let rings = 5;
        var grid = _module.Circle({ rings: rings });
        assert.ok(grid != null);
        assert.deepStrictEqual(grid.isDir("CCW"), true);
        assert.deepStrictEqual(grid.isDir("CW"), true);
        assert.deepStrictEqual(grid.isDir("A"), true);
        assert.deepStrictEqual(grid.isDir("T"), true);
        assert.deepStrictEqual(grid.isDir("A0"), true);
        assert.deepStrictEqual(grid.isDir("T0"), true);
        assert.deepStrictEqual(grid.isDir("A1"), true);
        assert.deepStrictEqual(grid.isDir("T1"), true);
    });

    it('getNeighborDirs should return correct list', function() {
        let rings = 5;
        var grid = _module.Circle({ rings: rings });
        assert.ok(grid != null);
        assert.deepStrictEqual(grid.getNeighborDirs(0,0), [ 'A0' ]);
        // Ring 1
        // Ring 1 should only return T for Position 0
        assert.deepStrictEqual(grid.getNeighborDirs(1,0), [ 'CCW', 'CW', 'A0', 'A1', 'T0' ]);
        assert.deepStrictEqual(grid.getNeighborDirs(1,1), [ 'CCW', 'CW', 'A0', 'A1' ]);
        assert.deepStrictEqual(grid.getNeighborDirs(1,2), [ 'CCW', 'CW', 'A0', 'A1' ]);
        // Ring 2
        assert.deepStrictEqual(grid.getNeighborDirs(2,0), [ 'CCW', 'CW', 'A0', 'A1', 'T0' ]);
        assert.deepStrictEqual(grid.getNeighborDirs(2,1), [ 'CCW', 'CW', 'A0', 'A1', 'T1' ]);
        // Ring 3
        assert.deepStrictEqual(grid.getNeighborDirs(3,0), [ 'CCW', 'CW', 'A', 'T0' ]);
        assert.deepStrictEqual(grid.getNeighborDirs(3,1), [ 'CCW', 'CW', 'A', 'T1' ]);
        // Ring 4
        assert.deepStrictEqual(grid.getNeighborDirs(4,0), [ 'CCW', 'CW', 'T' ]);
        assert.deepStrictEqual(grid.getNeighborDirs(4,1), [ 'CCW', 'CW', 'T' ]);
    });

    it('getShuffledNeighborDirs should return shuffled list', function() {
        let rings = 5;
        var grid = _module.Circle({ rings: rings });
        assert.ok(grid != null);
        let ring = 1;
        let pos = 2;
        var shuffled = grid.getShuffledNeighborDirs(ring,pos);
        console.log(shuffled);
        assert.deepStrictEqual(shuffled.length, 4);
        // Now and then it does return same list ...
        // assert.notDeepStrictEqual(shuffled, grid.getNeighborDirs(tX,tY));
    });

    it('markVisited should return true for valid cell', function() {
        let rings = 5;
        var grid = _module.Circle({ rings: rings });
        assert.ok(grid != null);
        let ring = 0;
        let pos = 0;
        let VISITED = 0x01;
        var result = grid.markVisited(ring,pos);
        assert.deepStrictEqual(result, true);
        assert.deepStrictEqual(grid.get(ring,pos), VISITED);
    });

    it('visited should return true for a visited cell', function() {
        let rings = 5;
        var grid = _module.Circle({ rings: rings });
        assert.ok(grid != null);
        let ring = 0;
        let pos = 0;
        assert.deepStrictEqual(grid.markVisited(ring,pos), true);
        assert.deepStrictEqual(grid.visited(ring,pos), true);
    });

    it('hasConnections should return false when nothing connected', function() {
        let rings = 5;
        var grid = _module.Circle({ rings: rings });
        assert.ok(grid != null);
        let ring = 0;
        let pos = 0;
        assert.deepStrictEqual(grid.hasConnections(ring,pos), false);
    });

    it('getNeighbor should return neighbor x and y values', function() {
        let rings = 5;
        var grid = _module.Circle({ rings: rings });
        assert.ok(grid != null);
        let ring = 1;
        let pos = 1;
        let list = [ 'CCW', 'CW', 'A0', 'A1', 'T1' ];
        for( var key in list ) {
            var sDir = list[key];
            var cell = grid.getNeighbor(ring,pos,sDir);
            assert.ok(cell != null);
            // For now letting getNeighbor return x and y.
            assert.deepStrictEqual((cell.x >= ring - 1 && cell.x <= ring + 1), true);
            assert.ok(cell.y >= pos - 1 && cell.y <= pos + 2, list[key] + ":" + JSON.stringify(cell));
        }
    });

    it('getNeighbor CW for last cell in ring should loop back to 0', function() {
        let rings = 5;
        var grid = _module.Circle({ rings: rings });
        assert.ok(grid != null);
        let ring = 1;
        let pos = 5;
        let sDir = "CW";
        var cell = grid.getNeighbor(ring,pos,sDir);
        assert.ok(cell != null);
        assert.deepStrictEqual(cell.x, ring);
        assert.deepStrictEqual(cell.y, 0);
    });

    it('getNeighbor CCW for first cell in ring should loop back to last cell', function() {
        let rings = 5;
        var grid = _module.Circle({ rings: rings });
        assert.ok(grid != null);
        let ring = 1;
        let pos = 0;
        let ringSize = grid.ringSize(ring);
        let sDir = "CCW";
        var cell = grid.getNeighbor(ring,pos,sDir);
        assert.ok(cell != null);
        assert.deepStrictEqual(cell.x, ring);
        assert.deepStrictEqual(cell.y, ringSize - 1);
    });

    it('getNeighbor CW should alway return neighbor', function() {
        let rings = 5;
        var grid = _module.Circle({ rings: rings });
        assert.ok(grid != null);
        let ring = 1;
        let pos = 5;
        let sDir = "CW";
        let ringSize = grid.ringSize(ring);
        for(var i = 0; i < ringSize; i++ ) {
            var cell = grid.getNeighbor(ring,pos,sDir);
            assert.ok(cell != null);
            assert.deepStrictEqual(cell.x, ring);
        }
    });

    it('getNeighbor CCW should alway return neighbor', function() {
        let rings = 5;
        var grid = _module.Circle({ rings: rings });
        assert.ok(grid != null);
        let ring = 1;
        let pos = 5;
        let sDir = "CCW";
        let ringSize = grid.ringSize(ring);
        for(var i = 0; i < ringSize; i++ ) {
            var cell = grid.getNeighbor(ring,pos,sDir);
            assert.ok(cell != null);
            assert.deepStrictEqual(cell.x, ring);
        }
    });

    it('connect should return true for valid parameters and set cell value to direction', function() {
        let rings = 5;
        var grid = _module.Circle({ rings: rings });
        assert.ok(grid != null);
        let ring = 1;
        let pos = 1;
        assert.deepStrictEqual(grid.connect(ring,pos,"CW"), true);
        let dirMap = grid.dirMap;  
        assert.deepStrictEqual(grid.get(ring,pos), dirMap.CW);
    });

    it('connectUndirected should return true for valid parameters and set cell values to direction', function() {
        let rings = 5;
        var grid = _module.Circle({ rings: rings });
        assert.ok(grid != null);
        let ring = 1;
        let pos = 1;
        let status = grid.connectUndirected(ring,pos,"CW");
        assert.deepStrictEqual(status, true);
        let dirMap = grid.dirMap;
        assert.deepStrictEqual(grid.get(ring,pos), dirMap.CW);
        grid.log();
        var n = grid.getNeighbor(ring,pos,"CW");
        assert.ok(n != null);
        assert.deepStrictEqual(grid.get(n.x,n.y), dirMap.CCW);
    });

    it('connects should return true for valid connection in direction', function() {
        let rings = 5;
        var grid = _module.Circle({ rings: rings });
        assert.ok(grid != null);
        let ring = 1;
        let pos = 1;
        assert.deepStrictEqual(grid.connect(ring,pos,"CW"), true);
        assert.deepStrictEqual(grid.connects(ring,pos,"CW"), true);
    });

    it('connects should return false for invalid connection in direction', function() {
        let rings = 5;
        var grid = _module.Circle({ rings: rings });
        assert.ok(grid != null);
        let ring = 1;
        let pos = 1;
        assert.deepStrictEqual(grid.connect(ring,pos,"CW"), true);
        assert.deepStrictEqual(grid.connects(ring,pos,"CCW"), false);
    });

    it('isMasked should return true for a masked cell', function() {
        let rings = 5;
        var grid = _module.Circle({ rings: rings });
        assert.ok(grid != null);
        let ring = 0;
        let pos = 0;
        assert.deepStrictEqual(grid.mask(ring,pos), true);
        assert.deepStrictEqual(grid.isMasked(ring,pos), true);
    });

    it('getOppositeDir should return opposite neighbor', function() {
        let rings = 5;
        var grid = _module.Circle({ rings: rings });
        let list = ["CCW","CW", "A","T","A0","T0","A1","T1"];
        let opps = ["CW", "CCW","T","A","T0","A0","T1","A1"];
        for( var key in list ) {
            var sDir = list[key];
            var oDir = grid.getOppositeDir(sDir);
            assert.deepStrictEqual(oDir, opps[key]);
        }
    });

    it('connectsAny should return false for empty list', function() {
        let rings = 5;
        var grid = _module.Circle({ rings: rings });
        assert.ok(grid != null);
        let ring = 1;
        let pos = 1;
        assert.deepStrictEqual(grid.connectsAny(ring,pos,[]), false);
    });

    it('connectsAny should return false for invalid connection in direction', function() {
        let rings = 5;
        var grid = _module.Circle({ rings: rings });
        assert.ok(grid != null);
        let ring = 1;
        let pos = 1;
        assert.deepStrictEqual(grid.connectsAny(ring,pos,["CW"]), false);
    });

    it('connectsAny should return false if direction not in list', function() {
        let rings = 5;
        var grid = _module.Circle({ rings: rings });
        assert.ok(grid != null);
        let ring = 1;
        let pos = 1;
        assert.deepStrictEqual(grid.connect(ring,pos,"CW"), true);
        assert.deepStrictEqual(grid.connectsAny(ring,pos,["CCW","T","A"]), false);
    });

    it('connectsAny should return true for valid connection in direction', function() {
        let rings = 5;
        var grid = _module.Circle({ rings: rings });
        assert.ok(grid != null);
        let ring = 1;
        let pos = 1;
        assert.deepStrictEqual(grid.connect(ring,pos,"CW"), true);
        assert.deepStrictEqual(grid.connectsAny(ring,pos,["CW"]), true);
    });

    it('connectsAny should return true for any valid connection in direction', function() {
        let rings = 5;
        var grid = _module.Circle({ rings: rings });
        assert.ok(grid != null);
        let ring = 1;
        let pos = 1;
        assert.deepStrictEqual(grid.connect(ring,pos,"CW"), true);
        assert.deepStrictEqual(grid.connectsAny(ring,pos,["A","CW","T"]), true);
    });

    it('connectsAny should return false for non-existant direction in list', function() {
        let rings = 5;
        var grid = _module.Circle({ rings: rings });
        assert.ok(grid != null);
        let ring = 1;
        let pos = 1;
        assert.deepStrictEqual(grid.connect(ring,pos,"CW"), true);
        assert.deepStrictEqual(grid.connectsAny(ring,pos,["A","X","T"]), false);
    });
    
});
