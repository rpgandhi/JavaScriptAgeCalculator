import {Age} from './../js/AgeCalculator.js';

// var Age = require('./../js/AgeCalculator.js').ageModule;

describe('Age', function() {
  it('should capture inputted age and set it to variable', function(){
    let myAge = new Age(34);
    expect(myAge.age).toEqual(34);


  });
});
