/**
    Module: @mitchallen/grid
      Test: has-connections-test
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

    it('hasConnections should return false when nothing connected', function(done) {
        var grid = _module.create({ x: 3, y: 3 });
        should.exist(grid);
        let tX = 0;
        let tY = 0;
        grid.hasConnections(tX,tY).should.eql(false);
        done();
    });

    it('hasConnections marked should return false when nothing connected and marked visited', function(done) {
        var grid = _module.create({ x: 3, y: 3 });
        should.exist(grid);
        let tX = 0;
        let tY = 0;
        grid.markVisited(tX,tY).should.eql(true);
        grid.hasConnections(tX,tY).should.eql(false);
        done();
    });

    it('hasConnections should return true when connected', function(done) {
        var grid = _module.create({ x: 3, y: 3 });
        should.exist(grid);
        let tX = 0;
        let tY = 0;
        grid.connect(tX,tY,"S");
        grid.hasConnections(tX,tY).should.eql(true);
        done();
    });


    it('hasConnections should return true when connected and marked visited', function(done) {
        var grid = _module.create({ x: 3, y: 3 });
        should.exist(grid);
        let tX = 0;
        let tY = 0;
        grid.connect(tX,tY,"S");
        grid.markVisited(tX,tY).should.eql(true);
        grid.hasConnections(tX,tY).should.eql(true);
        done();
    });

});
