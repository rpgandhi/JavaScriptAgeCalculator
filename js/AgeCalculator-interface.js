import {Age} from './../js/AgeCalculator.js';

$(document).ready(function(){
  $("#ageForm").submit(function(event){
  event.preventDefault();
  alert("Line6");

  // let ageInput = parseInt($("#age").val());
  let ageInput = $("input#age").val();

  $("#output").text(ageInput);

alert("line 9");
  ageInput.marsYears();
  alert("line 11");






  });
});
