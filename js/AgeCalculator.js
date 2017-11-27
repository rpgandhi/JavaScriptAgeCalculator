export class Age {
  constructor(input) {
    this.age = input;
    this.ageInSeconds = input * 365 * 24 * 60 * 60;

  }
}
