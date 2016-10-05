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

    describe("fail", () => { 
        it("should pass", function(done){
            server(app)
            .get('/fail')
            .expect("Content-type", /json/)
            .expect(200)
            .end(function(err, res){
                if(err) done(err);
                res.status.should.equal(200);
                res.body.status.should.equal("fail");
                res.body.data.title.should.equal("A title is required");
                
                done();
            });
        });
    });

    describe("error", () => { 
        it("should pass", function(done){
            server(app)
            .get('/error')
            .expect("Content-type", /json/)
            .expect(500)
            .end(function(err, res){
                if(err) done(err);
                res.status.should.equal(500);
                res.body.status.should.equal("error");
                res.body.message.should.equal("Unable to communicate with database");
                
                done();
            });
        });
    });
});