(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var DOB = exports.DOB = function DOB(accurateAge) {
  _classCallCheck(this, DOB);

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
};
//lifeExpectancy method currently not working. Maybe a syntax issue?
// lifeExpectancy(){
//   if (gender == "male") {
//     (this.lifeExpect - 10);
//   }
//   if (sleep == "lessSleep"){
//     (this.lifeExpect - 10);
//   }
//   return this.lifeExpect
// }

},{}],2:[function(require,module,exports){
"use strict";

var _AgeCalculator = require("./../js/AgeCalculator.js");

$(document).ready(function () {
  $("#ageForm").submit(function (event) {

    event.preventDefault();

    var input = parseInt($("#age").val());
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
    var accurateAgeInMSeconds = d.getTime();
    var secondBetweenDates = Math.abs((new Date().getTime() - accurateAgeInMSeconds) / 1000);
    var accurateAge = (secondBetweenDates / 31536000).toFixed(2);

    var newDOB = new _AgeCalculator.DOB(accurateAge);
    // console.log(newDOB.lifeExpectancy());

    $("#accurateSeconds").append(secondBetweenDates);
    $("#accurateYears").append("" + newDOB.accurateYears);
    $("#earthLifeExpect").append("" + newDOB.lifeExpect);
    $("#marsLifeExpect").append("" + newDOB.marsLifeExpect);
    $("#venusLifeExpect").append("" + newDOB.venusLifeExpect);
    $("#jupiterLifeExpect").append("" + newDOB.jupiterLifeExpect);
    $("#mercuryLifeExpect").append("" + newDOB.mercuryLifeExpect);
    $("#earthLeft").append("" + newDOB.earthLeft);
    $("#marsLeft").append("" + newDOB.marsLeft);
    $("#mercuryLeft").append("" + newDOB.mercuryLeft);
    $("#venusLeft").append("" + newDOB.venusLeft);
    $("#jupiterLeft").append("" + newDOB.jupiterLeft);

    console.log("" + newDOB.lifeExpect);
    console.log("" + newDOB.earthLeft);
    console.log("" + newDOB.marsLeft);
  });
});

},{"./../js/AgeCalculator.js":1}]},{},[2]);
