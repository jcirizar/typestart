import * as request from 'supertest';
import app from "../../server";
import {expect} from 'chai';

const query = request(app);

describe('Calculations', () => {

  describe('Addition', () => {

    it('Should add 2 numbers', (done) => {
      query
        .get('/addition')
        .query({
          number1: 6,
          number2: 8
        })

        .expect(200, (err, res) => {
          expect(res.body).to.haveOwnProperty('result');
          expect(res.body.result).to.be.equal(14);
          done();
        });
    });
  });

  describe('Subtraction', () => {

    it('Should subtract 2 numbers', (done) => {
      query
        .get('/subtraction')
        .query({
          number1: 20,
          number2: 8
        })

        .expect(200, (err, res) => {
          expect(res.body).to.haveOwnProperty('result');
          expect(res.body.result).to.be.equal(12);
          done();
        });
    });
  });
});
