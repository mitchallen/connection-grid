/**
    Module: @mitchallen/grid
      Test: get-test
    Author: Mitch Allen
*/

"use strict";

var request = require('supertest'),
    should = require('should'),
    modulePath = "../index";

describe('get method', function() {

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

    it('should return value when called with valid x and y parameters', function(done) {
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

    it('should return value when called with x and y parameters set to size minus one', function(done) {
        let sizeX = 20;
        let sizeY = 10;
        var obj = _module.create({ x: sizeX, y: sizeY });
        should.exist(obj);
        let tX = sizeX-1;
        let tY = sizeY-1;
        let tValue = 5;
        var condition = obj.set(tX,tY,tValue);
        condition.should.eql(true);
        var result = obj.get(tX,tY);
        result.should.eql(tValue);
        done();
    });

    it('should return negative value', function(done) {
        let sizeX = 20;
        let sizeY = 10;
        var obj = _module.create({ x: sizeX, y: sizeY });
        should.exist(obj);
        let tX = sizeX-1;
        let tY = sizeY-1;
        let tValue = -5;
        var condition = obj.set(tX,tY,tValue);
        condition.should.eql(true);
        var result = obj.get(tX,tY);
        result.should.eql(tValue);
        done();
    });

    it('should return string', function(done) {
        let sizeX = 20;
        let sizeY = 10;
        var obj = _module.create({ x: sizeX, y: sizeY });
        should.exist(obj);
        let tX = sizeX-1;
        let tY = sizeY-1;
        let tValue = "foo";
        var condition = obj.set(tX,tY,tValue);
        condition.should.eql(true);
        var result = obj.get(tX,tY);
        result.should.eql(tValue);
        done();
    });

    it('should return object', function(done) {
        let sizeX = 20;
        let sizeY = 10;
        var obj = _module.create({ x: sizeX, y: sizeY });
        should.exist(obj);
        let tX = sizeX-1;
        let tY = sizeY-1;
        let data = "foo";
        let tValue = { name: data };
        var condition = obj.set(tX,tY,tValue);
        condition.should.eql(true);
        var result = obj.get(tX,tY);
        result.should.eql(tValue);
        should.exist(result.name);
        result.name.should.eql(data);
        done();
    });

    it('should return date', function(done) {
        let sizeX = 20;
        let sizeY = 10;
        var obj = _module.create({ x: sizeX, y: sizeY });
        should.exist(obj);
        let tX = sizeX-1;
        let tY = sizeY-1;
        let tValue = new Date();
        var condition = obj.set(tX,tY,tValue);
        condition.should.eql(true);
        var result = obj.get(tX,tY);
        result.should.eql(tValue);
        done();
    });

    it('should return function', function(done) {
        let sizeX = 20;
        let sizeY = 10;
        var obj = _module.create({ x: sizeX, y: sizeY });
        should.exist(obj);
        let tX = sizeX-1;
        let tY = sizeY-1;
        let fReturn = 123;
        let tValue = function() { return fReturn; };
        var condition = obj.set(tX,tY,tValue);
        condition.should.eql(true);
        var result = obj.get(tX,tY);
        result.should.eql(tValue);
        result().should.eql(fReturn);
        done();
    });
});
