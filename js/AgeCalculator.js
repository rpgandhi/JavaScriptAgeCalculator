export class Age {
  constructor(input) {
    this.age = input;
    this.ageInSeconds = input * 365 * 24 * 60 * 60;
    this.mercuryYears = (input / 0.24).toFixed(2);
    this.venusYears = (input / 0.62).toFixed(2);
    this.marsYears = (input / 1.88).toFixed(2);
    this.jupiterYears = (input / 11.86).toFixed(2);

  }
}
