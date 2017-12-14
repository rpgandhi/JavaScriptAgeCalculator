(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Age = exports.Age = function Age(input) {
  _classCallCheck(this, Age);

  this.age = input;
  this.ageInSeconds = this.age * 365 * 24 * 60 * 60;
  this.mercuryYears = (this.age / 0.24).toFixed(2);
  this.venusYears = (this.age / 0.62).toFixed(2);
  this.marsYears = (this.age / 1.88).toFixed(2);
  this.jupiterYears = (this.age / 11.86).toFixed(2);
};

var DOB = exports.DOB = function () {
  function DOB(accurateAgeInRegSeconds) {
    _classCallCheck(this, DOB);

    this.secondsDiff = accurateAgeInRegSeconds;
    // this.accurateSeconds = this.secondsDiff / 1000;
    this.accurateAge = this.secondsDiff * 365 * 24 * 60 * 60;
  }

  _createClass(DOB, [{
    key: "accurateSeconds",
    value: function accurateSeconds() {
      this.dob.getTime();
    }
  }, {
    key: "lifeExpectancy",
    value: function lifeExpectancy() {}
  }]);

  return DOB;
}();
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

},{}],2:[function(require,module,exports){
"use strict";

var _AgeCalculator = require("./../js/AgeCalculator.js");

$(document).ready(function () {
  $("#ageForm").submit(function (event) {

    event.preventDefault();
    // alert("Line6");
    //
    // // let ageInput = parseInt($("#age").val());
    // // let newAge = new Age(ageInput);
    // let ageInput = $("input#age").val();
    // let dogFace = ageInput.feed();
    //
    // // alert(ageInput);
    // $("#outputSeconds").text(dogFace);
    // newAge.ageInSeconds();
    // alert(newAge.ageInSeconds());
    // alert("line 9");
    //   let ageOutput = ageInput.ageInSeconds();
    //   alert("ageOutput");

    var input = parseInt($("#age").val());
    alert(input);
    var newAge = new _AgeCalculator.Age(input);
    $("#outputVenus").append("" + newAge.venusYears);
    $("#outputSeconds").append("" + newAge.ageInSeconds);
    $("#outputMars").append("" + newAge.marsYears);
    $("#outputMercury").append("" + newAge.mercuryYears);
    $("#outputJupiter").append("" + newAge.jupiterYears);
  });

  $("#moreDetailsForm").submit(function (event) {
    event.preventDefault();

    var gender = $("#gender").val();
    var sleep = $("#sleep").val();
    var diet = $("#eat").val();
    var exercise = $("#exercise").val();

    var dateOfBirth = $("#inputtedDOB").val();
    var d = new Date(dateOfBirth);
    var accurateAgeInSeconds = d.getTime() / 1000;
    var accurateAgeInRegSeconds = accurateAgeInSeconds / 1000;
    alert(accurateAgeInSeconds);
    var newDOB = new _AgeCalculator.DOB(accurateAgeInRegSeconds);

    $("#accurateSeconds").append(d.getTime());
    $("#accurateYears").append("" + newDOB.accurateAge);
    // alert(d.getTime());


    //
    // $("#accurateSeconds").append(`${newDOB.accurateAge}`);

  });
  // newAge.mercuryConverter(input);
  // newAge.venusConverter(input);
  // newAge.marsConverter(input);
  // newAge.jupiterConverter(input);
  // // $("#results").show();
  // $("#outputMercury").text(newAge.mercuryConverter(input));
  // // $("#outputMercury").text(`${newAge.mercury} Mercury Years Old`);
  // $("#outputVenus").text(`${newAge.venus} Venus Years Old`);
  // $("#outputMars").text(`${newAge.mars} Mars Years Old`);
  // $("#outputJupiter").text(`${newAge.jupiter} Jupiter Years Old`);
  // // $("#mercury-expect").text(`${newAge.yearsToLive("Mercury")} Mercury years left to live`);
  // $("#venus-expect").text(`${newAge.yearsToLive("Venus")} Venus years left to live`);
  // $("#mars-expect").text(`${newAge.yearsToLive("Mars")} Mars years left to live`);
  // $("#jupiter-expect").text(`${newAge.yearsToLive("Jupiter")} Jupiter years left to live`);

});

},{"./../js/AgeCalculator.js":1}]},{},[2]);
