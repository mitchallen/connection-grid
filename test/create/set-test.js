/**
    Module: @mitchallen/grid
      Test: set-test
    Author: Mitch Allen
*/

"use strict";

var request = require('supertest'),
    should = require('should'),
    modulePath = "../../index";

describe('set method', function() {

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

    it('should return true when called with valid parameters', function(done) {
        var obj = _module.create({ x: 1, y: 1 });
        should.exist(obj);
        var result = obj.set(0,0,5);
        result.should.eql(true);
        done();
    });

    it('should return second value when called twice with same x and y values', function(done) {
        var obj = _module.create({ x: 1, y: 1 });
        should.exist(obj);
        let tX = 0;
        let tY = 0;
        let tValues = [ 5, 10 ];
        var condition = obj.set(tX,tY,tValues[0]);
        condition.should.eql(true);
        condition = obj.set(tX,tY,tValues[1]);
        condition.should.eql(true);
        var result = obj.get(tX,tY);
        result.should.eql(tValues[1]);
        done();
    });

    it('should return true when called with x and y parameters set to size minus one', function(done) {
        let sizeX = 10;
        let sizeY = 20;
        var obj = _module.create({ x: sizeX, y: sizeY });
        should.exist(obj);
        var result = obj.set(sizeX-1,sizeY-1,5);
        result.should.eql(true);
        done();
    });

    it('should return true when called with negative cell value', function(done) {
        var obj = _module.create({ x: 1, y: 1 });
        should.exist(obj);
        var result = obj.set(0,0,-1);
        result.should.eql(true);
        done();
    });

    it('should return true when called with string value', function(done) {
        var obj = _module.create({ x: 1, y: 1 });
        should.exist(obj);
        var result = obj.set(0,0,"foo");
        result.should.eql(true);
        done();
    });

    it('should return true when called with object value', function(done) {
        var obj = _module.create({ x: 1, y: 1 });
        should.exist(obj);
        var result = obj.set(0,0,{ name: "foo" });
        result.should.eql(true);
        done();
    });
});
