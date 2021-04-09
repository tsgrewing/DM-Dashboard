// // const e = require("express");

// $(document).ready(() => {

//   function rollDice(numOfDice, sides) {
//     let diceRolled = []
// for(let i=0; i < numOfDice ; i++){
//   let roll = randomizer(sides)};
//   diceRolled.push(roll)

//   // $(".resultDiv").html(num + Math.floor(Math.random() * (sides * numOfDice - numOfDice + 1)));
// };
// diceRolled.forEach(function(roll){
//   $('div').text(roll)
// })

// function randomizer(numOfSides) {
//  return Math.floor((Math.random()* numOfSides) + 1)
// };

// const rollDice4 = () => {
//   rollDice(numOfDice, 4);
// };

// const rollDice6 = () => {
//   rollDice(numOfDice, 6);
// };

// const rollDice8 = () => {
//   rollDice(numOfDice, 8);
// };

// const rollDice12 = () => {
//   rollDice(numOfDice, 12);
// };

// const rollDice20 = () => {
//   rollDice(numOfDice, 20);
// };

// $('#diceRoller').on('submit', function(event){
//   event.preventDefault()
//   console.log($('#diceInput').val().trim())
//   var userInput = $('#diceInput').val().trim().split('d')
//   var numOfDice = userInput[0].parseInt();
//   var numSides = userInput[1].parseInt();

//   if(numsides.parseInt() == '4'){
//     rollDice4(numOfDice)
//   } else if (numsides.parseInt() == '6') {
//     rollDice6(numOfDice)
//   } else if (numsides.parseInt() == '8') {
//     rollDice8(numOfDice)
//   } else if (numsides.parseInt() == '12') {
//     rollDice12(numOfDice)
//   } else if (numsides.parseInt() == '20')
//     rollDice20(numOfDice)
//   else {
//     error
//   }
// });
// });

// Temporary dice rolling functionality

function rollDice(num, sides, modifier) {
  // $("#resultDiv").html(num + Math.floor(Math.random() * (sides * num - num + 1)))
  const rollResult = [];
  let total = modifier;
  for (i = 0; i < num; i++) {
    const roll = Math.floor(Math.random() * sides) + 1;
    rollResult.push(roll);
    total = total + roll;
  }
  if (num === 1 && rollResult[0] === 20) {
    $("#resultDiv").html(
      // eslint-disable-next-line quotes
      `<i class="fab fa-critical-role"></i><span class="totalRoll">NATURAL 20</span><i class="fab fa-critical-role"></i>`
    );
  } else if (num === 1 && rollResult[0] === 1) {
    $("#resultDiv").html(
      // eslint-disable-next-line quotes
      `<i class="fas fa-exclamation"></i><span class="totalRoll">NATURAL 1</span><i class="fas fa-exclamation"></i>`
    );
  } else if (num === 1) {
    $("#resultDiv").html(
      `You rolled a <span class="totalRoll">${rollResult}</span> / Total with modifier: <span class="totalRoll">${total}</span>`
    );
  } else {
    const allDice = rollResult.join(" / ");
    $("#resultDiv").html(
      `You rolled <span class="totalRoll">${allDice}</span> for a total of <span class="totalRoll">${total}</span>`
    );
  }
}

$("#rollBtn").on("click", event => {
  event.preventDefault();
  const modifier = parseInt($("#modifier").val());
  const dice = parseInt($("#numSelect").val());
  const type = $("#dieSelect")
    .find("option:selected")
    .data("sides");
  rollDice(dice, type, modifier);
});
