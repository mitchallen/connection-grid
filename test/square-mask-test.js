/**
    Module: @mitchallen/grid
      Test: square-mask-test
    Author: Mitch Allen
*/

"use strict";

var request = require('supertest'),
    should = require('should'),
    modulePath = "../index";

describe('Square mask', function() {

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

    it('isMasked should return true for a masked cell', function(done) {
        var grid = _module.Square({ x: 3, y: 3 });
        should.exist(grid);
        let tX = 0;
        let tY = 0;
        grid.mask(tX,tY).should.eql(true);
        grid.isMasked(tX,tY).should.eql(true);
        done();
    });

    it('isMasked should return false for a non-masked cell', function(done) {
        var grid = _module.Square({ x: 3, y: 3 });
        should.exist(grid);
        let tX = 0;
        let tY = 0;
        grid.isMasked(tX,tY).should.eql(false);
        done();
    });
});
