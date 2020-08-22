// const e = require("express");

$(document).ready(() => {

  function rollDice(numOfDice, sides) {
    let diceRolled = []
for(let i=0; i < numOfDice ; i++){
  let roll = randomizer(sides)};
  diceRolled.push(roll)

  // $(".resultDiv").html(num + Math.floor(Math.random() * (sides * numOfDice - numOfDice + 1)));
};
diceRolled.forEach(function(roll){
  $('div').text(roll)
})


function randomizer(numOfSides) {
 return Math.floor((Math.random()* numOfSides) + 1)
};

const rollDice4 = () => {
  rollDice(numOfDice, 4);
};

const rollDice6 = () => {
  rollDice(numOfDice, 6);
};

const rollDice8 = () => {
  rollDice(numOfDice, 8);
};

const rollDice12 = () => {
  rollDice(numOfDice, 12);
};

const rollDice20 = () => {
  rollDice(numOfDice, 20);
};

$('#diceRoller').on('submit', function(event){
  event.preventDefault()
  console.log($('#diceInput').val().trim())
  var userInput = $('#diceInput').val().trim().split('d')
  var numOfDice = userInput[0].parseInt();
  var numSides = userInput[1].parseInt();
  
  if(numsides.parseInt() == '4'){
    rollDice4(numOfDice)
  } else if (numsides.parseInt() == '6') {
    rollDice6(numOfDice)
  } else if (numsides.parseInt() == '8') {
    rollDice8(numOfDice)
  } else if (numsides.parseInt() == '12') {
    rollDice12(numOfDice)
  } else if (numsides.parseInt() == '20')
    rollDice20(numOfDice)
  else {
    error
  }
});
});