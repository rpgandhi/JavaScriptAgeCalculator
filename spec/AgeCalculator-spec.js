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
  it('should capture inputted date of birth and set it to variable', function(){
    let myDOB = new DOB("08/23/1983");
    expect(myDOB.accurateYears).toEqual("08/23/1983");
  })
    it('should convert age in Earth years to age in Mercury years', function(){
      let myDOB = new DOB(34);
      expect(myDOB.mercuryAge).toEqual('141.67');

    })

    it('should convert age in Earth years to age in Venus years', function(){
      let myDOB = new DOB(34);
      expect(myDOB.venusAge).toEqual('54.84');

    })

    it('should convert age in Earth years to age in Mars years', function(){
      let myDOB = new DOB(34);
      expect(myDOB.marsAge).toEqual('18.09');

    })

    it('should convert age in Earth years to age in Jupiter years', function(){
      let myDOB = new DOB(34);
      expect(myDOB.jupiterAge).toEqual('2.87');

    })

    it('should calculate life expectancy on Mars', function(){
      let myDOB = new DOB(34);
      expect(myDOB.marsLifeExpect).toEqual('45.21');

    })

    it('should calculate life expectancy on Venus', function(){
      let myDOB = new DOB(34);
      expect(myDOB.venusLifeExpect).toEqual('137.10');

    })

    it('should calculate life expectancy on Jupiter', function(){
      let myDOB = new DOB(34);
      expect(myDOB.jupiterLifeExpect).toEqual('7.17');

    })

    it('should calculate life expectancy on Mercury', function(){
      let myDOB = new DOB(34);
      expect(myDOB.mercuryLifeExpect).toEqual('354.17');

    })

    it('should calculate years left on Earth', function(){
      let myDOB = new DOB(34);
      expect(myDOB.earthLeft).toEqual('51.00');

    })

    it('should calculate years left on Mars', function(){
      let myDOB = new DOB(34);
      expect(myDOB.marsLeft).toEqual('27.12');

    })

    it('should calculate years left on Mercury', function(){
      let myDOB = new DOB(34);
      expect(myDOB.mercuryLeft).toEqual('212.50');

    })

    it('should calculate years left on Jupiter', function(){
      let myDOB = new DOB(34);
      expect(myDOB.jupiterLeft).toEqual('4.30');

    })

    it('should calculate years left on Venus', function(){
      let myDOB = new DOB(34);
      expect(myDOB.venusLeft).toEqual('82.26');

    })

});
