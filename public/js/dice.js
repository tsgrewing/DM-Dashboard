const rollDice = $("#rollDice")

function rollDice(num, sides) {
    return num + Math.floor(Math.random() * ((sides*num)-num + 1))
  }
  const rollDice4 = () => rollDice(3, 4);
  const rollDice6 = () => rollDice(2, 6);
  const rollDice8 = () => rollDice(4, 8);
  const rollDice12 = () => rollDice(1, 12);
  const rollDice20 = () => rollDice(2, 20);