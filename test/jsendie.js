"use strict";

const server = require('supertest'),
should = require('chai').should(),
app = require('./server');

describe("jsendie", () => {
    describe("success", () => { 
        it("should pass", function(done){
            server(app)
            .get('/success')
            .expect("Content-type", /json/)
            .expect(200)
            .end(function(err, res){
                if(err) done(err);
                res.status.should.equal(200);
                res.body.status.should.equal("success");
                res.body.data.should.equal("Hello, Success!");
                
                done();
            });
        });
    });
});