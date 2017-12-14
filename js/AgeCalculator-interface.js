import {Age, DOB} from './../js/AgeCalculator.js';

$(document).ready(function(){
  $("#ageForm").submit(function(event){

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

let input  = parseInt($("#age").val());
alert(input);
let newAge = new Age(input);
$("#outputVenus").append(`${newAge.venusYears}`);
$("#outputSeconds").append(`${newAge.ageInSeconds}`);
$("#outputMars").append(`${newAge.marsYears}`);
$("#outputMercury").append(`${newAge.mercuryYears}`);
$("#outputJupiter").append(`${newAge.jupiterYears}`);
});


$("#moreDetailsForm").submit(function(event){
event.preventDefault();

let gender = $("#gender").val();
let sleep = $("#sleep").val();
let diet = $("#eat").val();
let exercise = $("#exercise").val();

let dateOfBirth = $("#inputtedDOB").val();
let d = new Date(dateOfBirth);
let accurateAgeInSeconds = ((d.getTime())/1000);
let accurateAgeInRegSeconds = accurateAgeInSeconds/1000;
alert(accurateAgeInSeconds);
let newDOB = new DOB(accurateAgeInRegSeconds);

$("#accurateSeconds").append(d.getTime());
$("#accurateYears").append(`${newDOB.accurateAge}`);
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
