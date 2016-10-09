/**
    Module: @mitchallen/grid
      Test: opposite-test
    Author: Mitch Allen
*/

"use strict";

var request = require('supertest'),
    should = require('should'),
    modulePath = "../index";

describe('module getOppositeDir test', function() {

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

    it('should return opposite neighbor', function(done) {
        var grid = _module.create({ x: 5, y: 5 });
        should.exist(grid);
        let tX = 2;
        let tY = 3;
        let list = ["N","S","E","W"];
        let opps = ["S","N","W","E"];
        for( var key in list ) {
            var sDir = list[key];
            var oDir = grid.getOppositeDir(sDir);
            oDir.should.eql(opps[key]);
        }
        done();
    });

    it('should return null for invalid dir', function(done) {
        var grid = _module.create({ x: 5, y: 5 });
        should.exist(grid);
        var sDir = "X";
        var oDir = grid.getOppositeDir(sDir);
        should.not.exist(oDir);
        done();
    });

    it('should return null for null dir', function(done) {
        var grid = _module.create({ x: 5, y: 5 });
        should.exist(grid);
        var sDir = null;
        var oDir = grid.getOppositeDir(sDir);
        should.not.exist(oDir);
        done();
    });
});
