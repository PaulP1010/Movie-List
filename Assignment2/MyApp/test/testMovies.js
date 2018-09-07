// var supertest = require("supertest");
// var should = require("should");

import supertest from 'supertest';
import {app} from './../index.js';
import should from 'should'; // eslint-disable-line
 
// This agent refers to PORT where program is running.
var server = supertest.agent("http://localhost:8081");

// UNIT test begin

//describe("Contacts API unit tests",function(){
  // #1 should return contacts representation in json
//  it("should return collection of JSON documents",function(done){
    // calling home page api
//    server
//    .get("/api/movies")
//    .expect("Content-type",/json/)
  //  .expect(200) // This is HTTP response
  //  .end(function(err,res){
      // HTTP status should be 200
 //     res.status.should.equal(200);
  //    done();
 //   });
 // });
 
describe('Movies unit test', function() {
  this.timeout(120000); // eslint-disable-line
  // #1 return a collection of json documents
  it('should return collection of JSON documents', function(done) {
    // calling home page api
    supertest(app)
    .get('/api/movies')
    .expect('Content-type', /json/)
    .expect(200) // This is the HTTP response
    .end(function(err, res) {
        // HTTP status should be 200
        res.status.should.equal(200);
        done();
    });
  });

  // #2 add a movie
  it('should add a movie', function(done) {
    // post to /api/movies
    supertest(app)
    .post('/api/movies')
    .send({name: 'The Dark Knight Rises', year: '2012'})
    .expect('Content-type', /json/)
    .expect(201)
    .end(function(err, res) {
      res.status.should.equal(201);
      res.body.should.have.property('_id');
      res.body.name.should.equal('Movie 99');
      done();
    });
  });

  // #3 delete a movie
  it('should delete movie', function(done) {
    const superserver = supertest(app);
    superserver
    .get('/api/movies')
    .expect('Content-type', /json/)
    .expect(200) // This is HTTP response
    .end(function(err, res) {
        const id = res.body[0]._id;
        superserver
            .delete('/api/movies/'+id)
            .expect('Content-type', /json/)
            .expect(200) // This is HTTP response
            .end(function(err, res) {
              res.status.should.equal(204);
              done();
            });
           }
         );
    });
});
});