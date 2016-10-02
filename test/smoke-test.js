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
        var obj = _module.create();
        should.not.exist(obj);
        done();
    });

    it('create method with valid x and y parameters should return object', function(done) {
        var obj = _module.create({ x: 5, y: 5 });
        should.exist(obj);
        done();
    });

    it('isCell method with valid x and y parameters should return true', function(done) {
        let sizeX = 5;
        let sizeY = 5;
        var obj = _module.create({ x: sizeX, y: sizeY });
        should.exist(obj);
        var result = obj.isCell(sizeX-1, sizeY-1);
        result.should.eql(true);
        done();
    });

    it('set method with valid parameter should return true', function(done) {
        var obj = _module.create({ x: 1, y: 1 });
        should.exist(obj);
        var result = obj.set(0,0,5);
        result.should.eql(true);
        done();
    });

    it('get method with valid parameter should return value', function(done) {
        var obj = _module.create({ x: 1, y: 1 });
        should.exist(obj);
        let tX = 0;
        let tY = 0;
        let tValue = 5;
        var condition = obj.set(tX,tY,tValue);
        condition.should.eql(true);
        var result = obj.get(tX,tY);
        result.should.eql(tValue);
        done();
    });

    it('fill method with valid integer should fill grid with integer', function(done) {
        let xSize = 5;
        let ySize = 10;
        var obj = _module.create({ x: xSize, y: ySize });
        should.exist(obj);
        let tValue = 999;
        var result = obj.fill(tValue);
        for(var x = 0; x < xSize; x++ ) {
            for(var y = 0; y < ySize; y++ ) {
                obj.get(x,y).should.eql(tValue);
            }
        }
        done();
    });

   it('cloneArray method should return a clone of the internal array', function(done) {
        var obj = _module.create({ x: 1, y: 1 });
        should.exist(obj);
        let tX = 0;
        let tY = 0;
        let tValue = 100;
        var result = obj.set(tX,tY,tValue);
        result.should.eql(true);
        var arr = obj.cloneArray();
        arr[tX][tY].should.eql(tValue);
        done();
    });

    it('log method should not throw exception', function(done) {
        var obj = _module.create({ x: 5, y: 5 });
        should.exist(obj);
        obj.fill(10)
        obj.set(0,0,20);
        obj.set(4,4,30);
        obj.log();
        done();
    });

    it('getNeighbors should return correct list', function(done) {
        var obj = _module.create({ x: 5, y: 5 });
        should.exist(obj);
        let N = 0x010;
        let S = 0x020;
        let E = 0x040;
        let W = 0x080;
        obj.getNeighbors().should.eql([ N, S, E, W ]);
        done();
    });

    it('markVisited should return true for valid cell', function(done) {
        var obj = _module.create({ x: 3, y: 3 });
        should.exist(obj);
        let tX = 0;
        let tY = 0;
        let VISITED = 0x01;
        var result = obj.markVisited(tX,tY);
        result.should.eql(true);
        obj.get(tX,tY).should.eql(VISITED);
        done();
    });

    it('visited should return true for a visited cell', function(done) {
        var obj = _module.create({ x: 3, y: 3 });
        should.exist(obj);
        let tX = 0;
        let tY = 0;
        obj.markVisited(tX,tY).should.eql(true);
        obj.visited(tX,tY).should.eql(true);
        done();
    });
});
