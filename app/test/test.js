var chai = require('chai');
var chaiHttp = require('chai-http');
const expect = require('chai').expect;
var assert = require('assert');
var request = require('supertest')

chai.use(chaiHttp);
const url= 'http://localhost:3000';
request = request(url)


describe('CHAI TESTS', ()=>{
    describe('GET if "abba" is Palindrome: ', ()=>{

        it('Should get JSON with info is Palindrome = true', (done) => {
            chai.request(url)
                .get('/iecho?text=abba')
                .end( function(err,res){
                    expect(res.body).to.have.property('palindrome').to.be.equal(true);
                    expect(res).to.have.status(200);
                    done();
                });
        });

    });

    describe('GET if "TOYOTA" is Palindrome: ', () => {

        it('Should get JSON with info is Palindrome = false', (done) => {
            chai.request(url)
                .get('/iecho?text=TOYOTA')
                .end( function(err,res){
                    expect(res.body).to.have.property('palindrome').to.be.equal(false);
                    expect(res).to.have.status(200);
                    done();
                });
        });

    });

    describe('GET "no text" response if parameter "text" is not sent  : ', () => {

        it('Should return an Error = "no text" property ', (done) => {
            chai.request(url)
                .get('/iecho')
                .end( function(err,res){
                    expect(res.body).to.have.property('error').to.be.equal('no text');
                    expect(res).to.have.status(400);
                    done();
                });
        });

    });

    describe('GET "no text" response if parameter "text" is empty  : ', () => {

        it('Should return an Error = "no text" property ', (done) => {
            chai.request(url)
                .get('/iecho?text=')
                .end( function(err,res){
                    expect(res.body).to.have.property('error').to.be.equal('no text');
                    expect(res).to.have.status(400);
                    done();
                });
        });

    });
});

describe('SUPERTEST TESTS', ()=>{
    describe('GET if "abba" is Palindrome: ', ()=>{

        it('Should get JSON with info is Palindrome = true', (done) => {
            request.get('/iecho?text=abba')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                assert(response.body.palindrome, true)
                done();
            })
            .catch(err => done(err))    
        });

    });

    describe('GET if "TOYOTA" is Palindrome: ', () => {

        it('Should get JSON with info is Palindrome = false', (done) => {            
            request.get('/iecho?text=TOYOTA')
            .expect('Content-Type', /json/)            
            .expect(200, { text: 'ATOYOT', palindrome: false }, done);
        });

    });

    describe('GET "no text" response if parameter "text" is not sent  : ', () => {

        it('Should return an Error = "no text" property ', (done) => {            
            request.get('/iecho')
            .expect('Content-Type', /json/)
            .expect(400)
            .then(response => {                
                assert(response.body.error, 'no text')
                done();
            })
            .catch(err => done(err))            
        });

    });

    describe('GET "no text" response if parameter "text" is empty  : ', () => {

        it('Should return an Error = "no text" property ', (done) => {            
            request.get('/iecho?text=')
            .expect('Content-Type', /json/)
            .expect(400)
            .then(response => {
                assert(response.body.error, 'no text')
                done();
            })
            .catch(err => done(err))        
        });

    });
});