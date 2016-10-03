/**
    Module: @mitchallen/grid
      Test: smoke-test
    Author: Mitch Allen
*/

"use strict";

var request = require('supertest'),
    should = require('should'),
    modulePath = "../index";

describe('module smoke test', function() {

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

    it('create method with no spec should return null', function(done) {
        var grid = _module.create();
        should.not.exist(grid);
        done();
    });

    it('create method with valid x and y parameters should return object', function(done) {
        var grid = _module.create({ x: 5, y: 5 });
        should.exist(grid);
        done();
    });

    it('isCell method with valid x and y parameters should return true', function(done) {
        let sizeX = 5;
        let sizeY = 5;
        var grid = _module.create({ x: sizeX, y: sizeY });
        should.exist(grid);
        var result = grid.isCell(sizeX-1, sizeY-1);
        result.should.eql(true);
        done();
    });

    it('set method with valid parameter should return true', function(done) {
        var grid = _module.create({ x: 1, y: 1 });
        should.exist(grid);
        var result = grid.set(0,0,5);
        result.should.eql(true);
        done();
    });

    it('get method with valid parameter should return value', function(done) {
        var grid = _module.create({ x: 1, y: 1 });
        should.exist(grid);
        let tX = 0;
        let tY = 0;
        let tValue = 5;
        var condition = grid.set(tX,tY,tValue);
        condition.should.eql(true);
        var result = grid.get(tX,tY);
        result.should.eql(tValue);
        done();
    });

    it('fill method with valid integer should fill grid with integer', function(done) {
        let xSize = 5;
        let ySize = 10;
        var grid = _module.create({ x: xSize, y: ySize });
        should.exist(grid);
        let tValue = 999;
        var result = grid.fill(tValue);
        for(var x = 0; x < xSize; x++ ) {
            for(var y = 0; y < ySize; y++ ) {
                grid.get(x,y).should.eql(tValue);
            }
        }
        done();
    });

   it('cloneArray method should return a clone of the internal array', function(done) {
        var grid = _module.create({ x: 1, y: 1 });
        should.exist(grid);
        let tX = 0;
        let tY = 0;
        let tValue = 100;
        var result = grid.set(tX,tY,tValue);
        result.should.eql(true);
        var arr = grid.cloneArray();
        arr[tX][tY].should.eql(tValue);
        done();
    });

    it('log method should not throw exception', function(done) {
        let xSize = 4;
        let ySize = 5;
        var grid = _module.create({ x: xSize, y: ySize });
        should.exist(grid);
        grid.fill(10)
        grid.set(0,0,20);
        grid.set(xSize - 1, ySize - 1,30);
        grid.log();
        done();
    });

    it('getNeighborDirs should return correct list', function(done) {
        var grid = _module.create({ x: 5, y: 5 });
        should.exist(grid);
        let N = grid.N;
        let S = grid.S;
        let E = grid.E;
        let W = grid.W;
        grid.getNeighborDirs(1,1).should.eql([ N, S, E, W ]);
        done();
    });

    it('getShuffledNeighborDirs should return correct list', function(done) {
        var grid = _module.create({ x: 5, y: 5 });
        should.exist(grid);
        let N = grid.N;
        let S = grid.S;
        let E = grid.E;
        let W = grid.W;
        var shuffled = grid.getShuffledNeighborDirs(1,1);
        console.log("shuffled: ", shuffled);
        done();
    });

    it('markVisited should return true for valid cell', function(done) {
        var grid = _module.create({ x: 3, y: 3 });
        should.exist(grid);
        let tX = 0;
        let tY = 0;
        let VISITED = 0x01;
        var result = grid.markVisited(tX,tY);
        result.should.eql(true);
        grid.get(tX,tY).should.eql(VISITED);
        done();
    });

    it('visited should return true for a visited cell', function(done) {
        var grid = _module.create({ x: 3, y: 3 });
        should.exist(grid);
        let tX = 0;
        let tY = 0;
        grid.markVisited(tX,tY).should.eql(true);
        grid.visited(tX,tY).should.eql(true);
        done();
    });

    it('hasConnections should return false when nothing connected', function(done) {
        var grid = _module.create({ x: 3, y: 3 });
        should.exist(grid);
        let tX = 0;
        let tY = 0;
        grid.hasConnections(tX,tY).should.eql(false);
        done();
    });

    it('getNeighbor should return neighbor x and y values', function(done) {
        var grid = _module.create({ x: 5, y: 5 });
        should.exist(grid);
        let tX = 2;
        let tY = 3;
        let list = ["N","S","E","W"];
        for(var dir = 0; dir < list.length; dir++ ) {
            var cell = grid.getNeighbor(tX,tY,list[dir]);
            should.exist(cell);
            console.log(tX, tY, list[dir], cell);
            (cell.x >= tX - 1 && cell.x <= tX + 1).should.eql(true);
            (cell.y >= tY - 1 && cell.y <= tY + 1).should.eql(true);
        }
        done();
    });

    it('connect should return true for valid parameters and set cell value to direction', function(done) {
        var grid = _module.create({ x: 3, y: 3 });
        should.exist(grid);
        let tX = 0;
        let tY = 0;
        grid.connect(tX,tY,"S").should.eql(true);
        grid.get(tX,tY).should.eql(grid.S);
        done();
    });

    it('connectUndirected should return true for valid parameters and set cell values to direction', function(done) {
        var grid = _module.create({ x: 3, y: 3 });
        should.exist(grid);
        let tX = 0;
        let tY = 0;
        let status = grid.connectUndirected(tX,tY,"S").should.eql(true);
        grid.get(tX,tY).should.eql(grid.S);
        // Verify S neighbor points back to N neighbor
        var n = grid.getNeighbor(tX,tY,"S");
        should.exist(n);
        grid.get(n.x,n.y).should.eql(grid.N);
        done();
    });
});
