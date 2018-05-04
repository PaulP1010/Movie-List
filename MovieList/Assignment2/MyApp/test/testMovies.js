var supertest = require("supertest");
var should = require("should");

// This agent refers to PORT where program is runninng.
var server = supertest.agent("http://localhost:8081");

// UNIT test begin

describe("Contacts API unit tests",function(){
  // #1 should return contacts representation in json
  it("should return collection of JSON documents",function(done){

    // calling home page api
    server
    .get("/api/movies")
    .expect("Content-type",/json/)
    .expect(200) // This is HTTP response
    .end(function(err,res){
      // HTTP status should be 200
      res.status.should.equal(200);
      done();
    });
  });

});