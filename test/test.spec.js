//import {NumbersValidator} from '../app/validator';



const NumbersValidator = require('../app/validator');
const chai = require('chai');


describe ('test suire', () => {
let validator;
beforeEach(() => {
    validator = new NumbersValidator();
})

afterEach (() => {
    validator = null;
})


it('should return true when provided with an even number', () => {
    const validationResults = validator.isNumberEven(4);
    chai.expect(validationResults).to.be.equal(true);
  });

})



