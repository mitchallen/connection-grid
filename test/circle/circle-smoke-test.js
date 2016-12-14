/**
    Module: @mitchallen/grid
      Test: circle-smoke-test
    Author: Mitch Allen
*/

"use strict";

var request = require('supertest'),
    should = require('should'),
    modulePath = "../../index";

describe('Circle smoke test', function() {

    var _module = null;

    before(function(done) {
        // Call before all tests
        delete require.cache[require.resolve(modulePath)];
        _module = require(modulePath);
        done();
    });

    after(function(done) {
        // Call after all tests
        done();
    });

    beforeEach(function(done) {
        // Call before each test
        done();
    });

    afterEach(function(done) {
        // Call after eeach test
        done();
    });

    it('module should exist', function(done) {
        should.exist(_module);
        done();
    });

    it('Circle method with no spec should return object', function(done) {
        var grid = _module.Circle();
        should.exist(grid);
        done();
    });

    it('Circle method with valid x and y parameters should return object', function(done) {
        var grid = _module.Circle({ rings: 5 });
        should.exist(grid);
        done();
    });

    it('Rings should return number of rings', function(done) {
        let rings = 5;
        var grid = _module.Circle({ rings: rings });
        grid.rings.should.eql(rings);
        done();
    });

    it('RingSize should return size of ring', function(done) {
        let rings = 5;
        var grid = _module.Circle({ rings: rings });
        grid.ringSize(1).should.eql(6);
        done();
    });

    it('isCell method with valid ring and position parameters should return true', function(done) {
        let rings = 5;
        var grid = _module.Circle({ rings: rings });
        should.exist(grid);
        var result = grid.isCell(1,5);
        result.should.eql(true);
        done();
    });

    it('set method with valid parameter should return true', function(done) {
        var grid = _module.Square({ x: 1, y: 1 });
        should.exist(grid);
        var result = grid.set(0,0,5);
        result.should.eql(true);
        done();
    });

    it('get method with valid parameter should return value', function(done) {
        let rings = 5;
        var grid = _module.Circle({ rings: rings });
        should.exist(grid);
        let ring = 1;
        let pos = 4;
        let tValue = 5;
        var condition = grid.set(ring,pos,tValue);
        condition.should.eql(true);
        var result = grid.get(ring,pos);
        result.should.eql(tValue);
        done();
    });

    it('fill method with valid integer should fill grid with integer', function(done) {
        let rings = 5;
        var grid = _module.Circle({ rings: rings });
        should.exist(grid);
        let tValue = 999;
        var result = grid.fill(tValue);
        for(var r = 0; r < rings; r++ ) {
            var rSize = grid.ringSize(r);
            for(var pos = 0; pos < rSize; pos++ ) {
                grid.get(r,pos).should.eql(tValue);
            }
        }
        done();
    });

   it('cloneArray method should return a clone of the internal array', function(done) {
        let rings = 5;
        var grid = _module.Circle({ rings: rings });
        should.exist(grid);
        let ring = 0;
        let pos = 0;
        let tValue = 100;
        var result = grid.set(ring,pos,tValue);
        result.should.eql(true);
        var arr = grid.cloneArray();
        arr[ring][pos].should.eql(tValue);
        done();
    });

    it('log method should not throw exception', function(done) {
        let rings = 3;
        var grid = _module.Circle({ rings: rings });
        should.exist(grid);
        grid.fill(40)
        grid.set(0,0,50);
        var ring = rings - 1;
        var pos = grid.ringSize(ring) - 1;
        grid.set(ring, pos,60);
        grid.log();
        done();
    });

    it('getNeighborDirs should return true for valid values', function(done) {
        let rings = 5;
        var grid = _module.Circle({ rings: rings });
        should.exist(grid);
        grid.isDir("CCW").should.eql(true);
        grid.isDir("CW").should.eql(true);
        grid.isDir("A").should.eql(true);
        grid.isDir("T").should.eql(true);
        grid.isDir("A0").should.eql(true);
        grid.isDir("T0").should.eql(true);
        grid.isDir("A1").should.eql(true);
        grid.isDir("T1").should.eql(true);
        done();
    });

    it('getNeighborDirs should return correct list', function(done) {
        let rings = 5;
        var grid = _module.Circle({ rings: rings });
        should.exist(grid);
        grid.getNeighborDirs(0,0).should.eql([ 'A0' ]);
        // Ring 1
        // Ring 1 should only return T for Position 0
        grid.getNeighborDirs(1,0).should.eql([ 'CCW', 'CW', 'A0', 'A1', 'T0' ]);
        grid.getNeighborDirs(1,1).should.eql([ 'CCW', 'CW', 'A0', 'A1' ]);
        grid.getNeighborDirs(1,2).should.eql([ 'CCW', 'CW', 'A0', 'A1' ]);
        // Ring 2
        grid.getNeighborDirs(2,0).should.eql([ 'CCW', 'CW', 'A0', 'A1', 'T0' ]);
        grid.getNeighborDirs(2,1).should.eql([ 'CCW', 'CW', 'A0', 'A1', 'T1' ]);
        // Ring 3
        grid.getNeighborDirs(3,0).should.eql([ 'CCW', 'CW', 'A', 'T0' ]);
        grid.getNeighborDirs(3,1).should.eql([ 'CCW', 'CW', 'A', 'T1' ]);
        // Ring 4
        grid.getNeighborDirs(4,0).should.eql([ 'CCW', 'CW', 'T' ]);
        grid.getNeighborDirs(4,1).should.eql([ 'CCW', 'CW', 'T' ]);
        done();
    });

    it('getShuffledNeighborDirs should return shuffled list', function(done) {
        let rings = 5;
        var grid = _module.Circle({ rings: rings });
        should.exist(grid);
        let ring = 1;
        let pos = 2;
        var shuffled = grid.getShuffledNeighborDirs(ring,pos);
        console.log(shuffled);
        shuffled.length.should.eql(4);
        // Now and then it does return same list ...
        // shuffled.should.not.eql(grid.getNeighborDirs(tX,tY));
        done();
    });

    it('markVisited should return true for valid cell', function(done) {
        let rings = 5;
        var grid = _module.Circle({ rings: rings });
        should.exist(grid);
        let ring = 0;
        let pos = 0;
        let VISITED = 0x01;
        var result = grid.markVisited(ring,pos);
        result.should.eql(true);
        grid.get(ring,pos).should.eql(VISITED);
        done();
    });

    it('visited should return true for a visited cell', function(done) {
        let rings = 5;
        var grid = _module.Circle({ rings: rings });
        should.exist(grid);
        let ring = 0;
        let pos = 0;
        grid.markVisited(ring,pos).should.eql(true);
        grid.visited(ring,pos).should.eql(true);
        done();
    });

    it('hasConnections should return false when nothing connected', function(done) {
        let rings = 5;
        var grid = _module.Circle({ rings: rings });
        should.exist(grid);
        let ring = 0;
        let pos = 0;
        grid.hasConnections(ring,pos).should.eql(false);
        done();
    });

    it('getNeighbor should return neighbor x and y values', function(done) {
        let rings = 5;
        var grid = _module.Circle({ rings: rings });
        should.exist(grid);
        let ring = 1;
        let pos = 1;
        let list = [ 'CCW', 'CW', 'A0', 'A1', 'T1' ];
        for( var key in list ) {
            var sDir = list[key];
            var cell = grid.getNeighbor(ring,pos,sDir);
            should.exist(cell);
            // For now letting getNeighbor return x and y.
            (cell.x >= ring - 1 && cell.x <= ring + 1).should.eql(true);
            (cell.y >= pos - 1 && cell.y <= pos + 2).should.eql(true, 
                list[key] + ":" + JSON.stringify(cell) );
        }
        done();
    });

    it('getNeighbor CW for last cell in ring should loop back to 0', function(done) {
        let rings = 5;
        var grid = _module.Circle({ rings: rings });
        should.exist(grid);
        let ring = 1;
        let pos = 5;
        let sDir = "CW";
        var cell = grid.getNeighbor(ring,pos,sDir);
        should.exist(cell);
        cell.x.should.eql(ring);
        cell.y.should.eql(0);
        done();
    });

    it('getNeighbor CCW for first cell in ring should loop back to last cell', function(done) {
        let rings = 5;
        var grid = _module.Circle({ rings: rings });
        should.exist(grid);
        let ring = 1;
        let pos = 0;
        let ringSize = grid.ringSize(ring);
        let sDir = "CCW";
        var cell = grid.getNeighbor(ring,pos,sDir);
        should.exist(cell);
        cell.x.should.eql(ring);
        cell.y.should.eql(ringSize - 1);
        done();
    });

    it('getNeighbor CW should alway return neighbor', function(done) {
        let rings = 5;
        var grid = _module.Circle({ rings: rings });
        should.exist(grid);
        let ring = 1;
        let pos = 5;
        let sDir = "CW";
        let ringSize = grid.ringSize(ring);
        for(var i = 0; i < ringSize; i++ ) {
            var cell = grid.getNeighbor(ring,pos,sDir);
            should.exist(cell);
            cell.x.should.eql(ring);
        }
        done();
    });

    it('getNeighbor CCW should alway return neighbor', function(done) {
        let rings = 5;
        var grid = _module.Circle({ rings: rings });
        should.exist(grid);
        let ring = 1;
        let pos = 5;
        let sDir = "CCW";
        let ringSize = grid.ringSize(ring);
        for(var i = 0; i < ringSize; i++ ) {
            var cell = grid.getNeighbor(ring,pos,sDir);
            should.exist(cell);
            cell.x.should.eql(ring);
        }
        done();
    });

    it('connect should return true for valid parameters and set cell value to direction', function(done) {
        let rings = 5;
        var grid = _module.Circle({ rings: rings });
        should.exist(grid);
        let ring = 1;
        let pos = 1;
        grid.connect(ring,pos,"CW").should.eql(true);
        let dirMap = grid.dirMap;  
        grid.get(ring,pos).should.eql(dirMap.CW);
        done();
    });

    it('connectUndirected should return true for valid parameters and set cell values to direction', function(done) {
        let rings = 5;
        var grid = _module.Circle({ rings: rings });
        should.exist(grid);
        let ring = 1;
        let pos = 1;
        let status = grid.connectUndirected(ring,pos,"CW").should.eql(true);
        let dirMap = grid.dirMap;
        grid.get(ring,pos).should.eql(dirMap.CW);
        grid.log();
        var n = grid.getNeighbor(ring,pos,"CW");
        should.exist(n);
        grid.get(n.x,n.y).should.eql(dirMap.CCW);
        done();
    });

    it('connects should return true for valid connection in direction', function(done) {
        let rings = 5;
        var grid = _module.Circle({ rings: rings });
        should.exist(grid);
        let ring = 1;
        let pos = 1;
        grid.connect(ring,pos,"CW").should.eql(true);
        grid.connects(ring,pos,"CW").should.eql(true);
        done();
    });

    it('connects should return false for invalid connection in direction', function(done) {
        let rings = 5;
        var grid = _module.Circle({ rings: rings });
        should.exist(grid);
        let ring = 1;
        let pos = 1;
        grid.connect(ring,pos,"CW").should.eql(true);
        grid.connects(ring,pos,"CCW").should.eql(false);
        done();
    });

    it('isMasked should return true for a masked cell', function(done) {
        let rings = 5;
        var grid = _module.Circle({ rings: rings });
        should.exist(grid);
        let ring = 0;
        let pos = 0;
        grid.mask(ring,pos).should.eql(true);
        grid.isMasked(ring,pos).should.eql(true);
        done();
    });

    it('getOppositeDir should return opposite neighbor', function(done) {
        let rings = 5;
        var grid = _module.Circle({ rings: rings });
        let list = ["CCW","CW", "A","T","A0","T0","A1","T1"];
        let opps = ["CW", "CCW","T","A","T0","A0","T1","A1"];
        for( var key in list ) {
            var sDir = list[key];
            var oDir = grid.getOppositeDir(sDir);
            oDir.should.eql(opps[key]);
        }
        done();
    });
});
