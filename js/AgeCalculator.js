export class Age {
  constructor(input) {
    this.age = input;
    this.ageInSeconds = this.age * 365 * 24 * 60 * 60;
    this.mercuryYears = (this.age / 0.24).toFixed(2);
    this.venusYears = (this.age / 0.62).toFixed(2);
    this.marsYears = (this.age / 1.88).toFixed(2);
    this.jupiterYears = (this.age / 11.86).toFixed(2);

  }
}

export class DOB {
  constructor(accurateAgeInRegSeconds){
    this.secondsDiff = accurateAgeInRegSeconds;
    // this.accurateSeconds = this.secondsDiff / 1000;
    this.accurateAge = this.secondsDiff * 365 * 24 * 60 * 60;
  }

  accurateSeconds(){
    this.dob.getTime();


  }

  lifeExpectancy(){


  }
}
//
//   doodle(input) {
//     let whatever = input * 10;
//     return whatever;
//   }
//
//
//
//
//
// ageInSeconds() {
//   this.age * 365 * 24 * 60 * 60;
//   return this.age;
// }
//
// feed() {
//   this.age + 10;
//   return this.age;
// }
// constructor() {
//   this.age = 0;
//   this.mars = 0;
//   this.venus = 0;
//   this.mercury = 0;
//   this.jupiter = 0;
//   this.lifeExpectancy = 85;
// }
// secondConverter(theInputtedThing) {
//   const today = new Date();
//   let input = new Date(theInputtedThing);
//   let todaysSeconds = today.getTime();
//   let datesSeconds = input.getTime();
//   let totalSeconds = (todaysSeconds - datesSeconds)/1000;
//   return (totalSeconds);
// }
// ageChecker(date) {
//   const seconds = this.secondConverter(date);
//   const years = seconds / 3.154e+7;
//   this.age = Math.floor(years);
//   return(years);
// }
// mercuryConverter(date) {
//   const mercury = this.ageChecker(date)/0.24;
//   this.mercury = Math.floor(mercury);
// }
// venusConverter(date) {
//   const venus = this.ageChecker(date)/0.62;
//   this.venus = Math.floor(venus);
// }
// marsConverter(date) {
//   const mars = this.ageChecker(date)/1.88;
//   this.mars = Math.floor(mars);
// }
// jupiterConverter(date) {
//   const jupiter = this.ageChecker(date)/11.86;
//   this.jupiter = Math.floor(jupiter);
// }
//
//
