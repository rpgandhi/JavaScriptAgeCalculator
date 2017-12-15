// export class Age {
//   constructor(input) {
//     this.age = input;
//     this.ageInSeconds = this.age * 365 * 24 * 60 * 60;
//     this.mercuryYears = (this.age / 0.24).toFixed(2);
//     this.venusYears = (this.age / 0.62).toFixed(2);
//     this.marsYears = (this.age / 1.88).toFixed(2);
//     this.jupiterYears = (this.age / 11.86).toFixed(2);
//
//   }
// }

export class DOB {
  constructor(accurateAge){
    this.accurateYears = accurateAge;
    this.mercuryAge = (this.accurateYears / 0.24).toFixed(2);
    this.venusAge = (this.accurateYears / 0.62).toFixed(2);
    this.marsAge = (this.accurateYears / 1.88).toFixed(2);
    this.jupiterAge = (this.accurateYears / 11.86).toFixed(2);
    this.lifeExpect = 85;
    this.marsLifeExpect = (this.lifeExpect / 1.88).toFixed(2);
    this.mercuryLifeExpect = (this.lifeExpect / 0.24).toFixed(2);
    this.venusLifeExpect = (this.lifeExpect / 0.62).toFixed(2);
    this.jupiterLifeExpect = (this.lifeExpect / 11.86).toFixed(2);
    this.earthLeft = (this.lifeExpect - this.accurateYears).toFixed(2);
    this.marsLeft = (this.marsLifeExpect - this.marsAge).toFixed(2);
    this.mercuryLeft = (this.mercuryLifeExpect - this.mercuryAge).toFixed(2);
    this.venusLeft = (this.venusLifeExpect - this.venusAge).toFixed(2);
    this.jupiterLeft = (this.jupiterLifeExpect - this.jupiterAge).toFixed(2);
  }
// lifeExpectancy method currently not working. Maybe a syntax issue?
  // lifeExpectancy(gender, sleep){
  //   if (gender === "male") {
  //     (this.lifeExpect - 10);
  //   }
  //   if (sleep === "lessSleep"){
  //     (this.lifeExpect - 10);
  //   }
  //   return this.lifeExpect;
  // }


}
