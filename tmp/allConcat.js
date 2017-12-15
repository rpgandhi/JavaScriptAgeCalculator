import {DOB} from './../js/AgeCalculator.js';

$(document).ready(function(){
//   $("#ageForm").submit(function(event){
//
//   event.preventDefault();
//
// let input  = parseInt($("#age").val());
// let newAge = new Age(input);
//
// $("#outputVenus").append(`${newAge.venusYears}`);
// $("#outputSeconds").append(`${newAge.ageInSeconds}`);
// $("#outputMars").append(`${newAge.marsYears}`);
// $("#outputMercury").append(`${newAge.mercuryYears}`);
// $("#outputJupiter").append(`${newAge.jupiterYears}`);
// });


$("#moreDetailsForm").submit(function(event){

event.preventDefault();

let gender = $("#gender").val();
let sleep = $("#sleep").val();
let diet = $("#eat").val();
let exercise = $("#exercise").val();
let dateOfBirth = $("#inputtedDOB").val();
let d = new Date(dateOfBirth);
let accurateAgeInMSeconds = d.getTime();
let secondBetweenDates = Math.abs((new Date().getTime() - accurateAgeInMSeconds)/1000);
let accurateAge = (secondBetweenDates/31536000).toFixed(2);

let newDOB = new DOB(accurateAge);
// console.log(newDOB.lifeExpectancy(gender, sleep));

$("#accurateSeconds").append(secondBetweenDates);
$("#accurateYears").append(`${newDOB.accurateYears}`);
$("#earthLifeExpect").append(`${newDOB.lifeExpect}`);
$("#marsLifeExpect").append(`${newDOB.marsLifeExpect}`);
$("#venusLifeExpect").append(`${newDOB.venusLifeExpect}`);
$("#jupiterLifeExpect").append(`${newDOB.jupiterLifeExpect}`);
$("#mercuryLifeExpect").append(`${newDOB.mercuryLifeExpect}`);
$("#earthLeft").append(`${newDOB.earthLeft}`);
$("#marsLeft").append(`${newDOB.marsLeft}`);
$("#mercuryLeft").append(`${newDOB.mercuryLeft}`);
$("#venusLeft").append(`${newDOB.venusLeft}`);
$("#jupiterLeft").append(`${newDOB.jupiterLeft}`);

// console.log(`${newDOB.lifeExpect}`);
// console.log(`${newDOB.earthLeft}`);
// console.log(`${newDOB.marsLeft}`);

});

});
