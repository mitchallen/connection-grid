/**
    Module: @mitchallen/grid
      Test: multi-test
    Author: Mitch Allen
*/

"use strict";

var request = require('supertest'),
    should = require('should'),
    modulePath = "../index";

describe('multiple grids', function() {

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

    it('should not interere with each other', function(done) {
        let sizeX = 20;
        let sizeY = 10;
        var grid0 = _module.create({ x: sizeX, y: sizeY });
        should.exist(grid0);
        var grid1 = _module.create({ x: sizeX, y: sizeY });
        should.exist(grid1);
        let tX = sizeX-1;
        let tY = sizeY-1;
        let tValues = [ 100, 200 ];
        // Set values
        var condition0 = grid0.set(tX,tY,tValues[0]);
        condition0.should.eql(true);
        var condition1 = grid1.set(tX,tY,tValues[1]);
        condition1.should.eql(true);
        // Get and test values
        var result0 = grid0.get(tX,tY);
        result0.should.eql(tValues[0]);
        var result1 = grid1.get(tX,tY);
        result1.should.eql(tValues[1]);
        done();
    });

});
