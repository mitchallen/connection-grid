/**
    Module: @mitchallen/connection-grid
      Test: smoke-test
    Author: Mitch Allen
*/

"use strict";

var request = require('supertest'),
    should = require('should'),
    modulePath = "../index";

describe('create', function() {

    before(function(done) {
        // Call before all tests
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

    it('should return an object', function(done) {
        delete require.cache[require.resolve(modulePath)];
        let factory = require(modulePath);
        should.exist(factory);
        let spec = { x: 5, y: 10 };
        let obj = factory.create(spec);
        should.exist(obj);
        done();
    });

    it('should return null if called without a spec', function(done) {
        delete require.cache[require.resolve(modulePath)];
        let factory = require(modulePath);
        should.exist(factory);
        let obj = factory.create();
        should.not.exist(obj);
        done();
    });
});
