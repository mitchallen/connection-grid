/**
    Module: @mitchallen/grid
      Test: iscell-test
    Author: Mitch Allen
*/

"use strict";

var request = require('supertest'),
    should = require('should'),
    modulePath = "../index";

describe('isCell method', function() {

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

    it('should return true when called with valid x and y parameters', function(done) {
        let sizeX = 5;
        let sizeY = 5;
        var obj = _module.create({ x: sizeX, y: sizeY });
        should.exist(obj);
        var result = obj.isCell(sizeX-1, sizeY-1);
        result.should.eql(true);
        done();
    });

    it('should return true when called with x and y parameters set to zero', function(done) {
        let sizeX = 1;
        let sizeY = 1;
        var obj = _module.create({ x: sizeX, y: sizeY });
        should.exist(obj);
        var result = obj.isCell(0, 0);
        result.should.eql(true);
        done();
    });

    it('should return true when called with x and y parameters set to size minus one', function(done) {
        let sizeX = 10;
        let sizeY = 5;
        var obj = _module.create({ x: sizeX, y: sizeY });
        should.exist(obj);
        var result = obj.isCell(sizeX-1, sizeY-1);
        result.should.eql(true);
        done();
    });

    it('should return false when called with negative x and y parameters', function(done) {
        let sizeX = 5;
        let sizeY = 5;
        var obj = _module.create({ x: sizeX, y: sizeY });
        should.exist(obj);
        var result = obj.isCell(-1, -1);
        result.should.eql(false);
        done();
    });

    it('should return false when called with negative x parameter', function(done) {
        let sizeX = 5;
        let sizeY = 5;
        var obj = _module.create({ x: sizeX, y: sizeY });
        should.exist(obj);
        var result = obj.isCell(-1, sizeY-1);
        result.should.eql(false);
        done();
    });

    it('should return false when called with negative y parameter', function(done) {
        let sizeX = 5;
        let sizeY = 5;
        var obj = _module.create({ x: sizeX, y: sizeY });
        should.exist(obj);
        var result = obj.isCell(sizeX-1, -1);
        result.should.eql(false);
        done();
    });

});
