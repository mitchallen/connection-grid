/**
    Module: @mitchallen/grid
      Test: fill-test
    Author: Mitch Allen
*/

"use strict";

var request = require('supertest'),
    should = require('should'),
    modulePath = "../../index";

describe('fill method', function() {

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

    it('should fill grid with integer when called with integer', function(done) {
        let xSize = 5;
        let ySize = 10;
        var obj = _module.create({ x: xSize, y: ySize });
        should.exist(obj);
        let fillValue = 999;
        var result = obj.fill(fillValue);
        for(var x = 0; x < xSize; x++ ) {
            for(var y = 0; y < ySize; y++ ) {
                obj.get(x,y).should.eql(fillValue);
            }
        }
        done();
    });

    it('should not change grid when called with no argument', function(done) {
        let xSize = 5;
        let ySize = 10;
        var obj = _module.create({ x: xSize, y: ySize });
        should.exist(obj);
        var result = obj.fill();
        for(var x = 0; x < xSize; x++ ) {
            for(var y = 0; y < ySize; y++ ) {
                should.not.exist(obj.get(x,y));
            }
        }
        done();
    });

    it('should override existing values', function(done) {
        let xSize = 5;
        let ySize = 10;
        var obj = _module.create({ x: xSize, y: ySize });
        should.exist(obj);
        let tX = 3;
        let tY = 4;
        let tValue = 100;
        obj.set(tX,tY,tValue).should.eql(true);
        let fillValue = 999;
        var result = obj.fill(fillValue);
        obj.get(tX,tY).should.eql(fillValue);
        done();
    });

    it('should fill grid with string when called with a string', function(done) {
        let xSize = 5;
        let ySize = 10;
        var obj = _module.create({ x: xSize, y: ySize });
        should.exist(obj);
        let fillValue = "foo";
        var result = obj.fill(fillValue);
        for(var x = 0; x < xSize; x++ ) {
            for(var y = 0; y < ySize; y++ ) {
                obj.get(x,y).should.eql(fillValue);
            }
        }
        done();
    });

    it('should fill grid with object when called with a object', function(done) {
        let xSize = 5;
        let ySize = 10;
        var obj = _module.create({ x: xSize, y: ySize });
        should.exist(obj);
        let tName = "foo";
        let fillValue = { name: tName };
        var result = obj.fill(fillValue);
        for(var x = 0; x < xSize; x++ ) {
            for(var y = 0; y < ySize; y++ ) {
                var result = obj.get(x,y);
                result.should.eql(fillValue);
                result.name.should.eql(tName);
            }
        }
        done();
    });
});
