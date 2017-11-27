(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Age = exports.Age = function Age(input) {
  _classCallCheck(this, Age);

  this.age = input;
  this.ageInSeconds = input * 365 * 24 * 60 * 60;
  this.mercuryYears = (input / 0.24).toFixed(2);
  this.venusYears = (input / 0.62).toFixed(2);
  this.marsYears = (input / 1.88).toFixed(2);
  this.jupiterYears = (input / 11.86).toFixed(2);
};

},{}],2:[function(require,module,exports){
"use strict";

var _AgeCalculator = require("./../js/AgeCalculator.js");

$(document).ready(function () {
  $("#ageForm").submit(function (event) {
    event.preventDefault();
    alert("Line6");

    var ageInput = parseInt($("#age").val());

    $("#output").text(ageInput);
    alert("line 9");
    ageInput.marsYears();
    alert("line 11");
  });
});

},{"./../js/AgeCalculator.js":1}]},{},[2]);
