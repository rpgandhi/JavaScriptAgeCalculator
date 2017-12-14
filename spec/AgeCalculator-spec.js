import {Age, DOB} from './../js/AgeCalculator.js';

// var Age = require('./../js/AgeCalculator.js').ageModule;
//
// describe('Age', function() {
//   it('should capture inputted age and set it to variable', function(){
//     let myAge = new Age(34);
//     expect(myAge.age).toEqual(34);
//   })
//
//   it('should convert age in Earth years to age in Earth seconds', function(){
//     let myAge = new Age(34);
//     expect(myAge.ageInSeconds).toEqual(1072224000);
//
//   })
//
//   it('should convert age in Earth years to age in Mercury years', function(){
//     let myAge = new Age(34);
//     expect(myAge.mercuryYears).toEqual('141.67');
//
//   })
//
//   it('should convert age in Earth years to age in Venus years', function(){
//     let myAge = new Age(34);
//     expect(myAge.venusYears).toEqual('54.84');
//
//   })
//
//   it('should convert age in Earth years to age in Mars years', function(){
//     let myAge = new Age(34);
//     expect(myAge.marsYears).toEqual('18.09');
//
//   })
//
//   it('should convert age in Earth years to age in Jupiter years', function(){
//     let myAge = new Age(34);
//     expect(myAge.jupiterYears).toEqual('2.87');
//
//   })
//
// });

describe('DOB', function() {
  it('should capture inputted age and set it to variable', function(){
    let myDOB = new DOB(08/23/1983);
    expect(myDOB.accurateYears).toEqual(34);
  })

});
