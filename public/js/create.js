const charName = $("#charName");
const charClass = $("#charClass");
const charRace = $("#charRace");
const createForm = $(".create-form");
const charAlign = $("#alignment");
let hitPoints = 0;
const stats = [15, 14, 13, 12, 10, 8];

// Adding an event listener for when the form is submitted
createForm.on("submit", event => {
  event.preventDefault();

  const charC = charClass.val();
  if (!charName.val().trim()) {
    return;
  }

  //get hit points based on class selection
  $.ajax({
    url: `https://www.dnd5eapi.co/api/classes/${charC.toLowerCase()}`,
    method: "GET"
  }).then(response => {
    hitPoints = response.hit_die;
    getStats(stats);
  });
});

// Constructing a character object to hand to the database

const generateCharacter = () => {
  const newChar = {
    name: charName.val().trim(),
    race: charRace.val(),
    class: charClass.val(),
    alignment: charAlign.val(),
    hp: hitPoints,
    str: stats[0],
    dex: stats[1],
    con: stats[2],
    int: stats[3],
    wis: stats[4],
    cha: stats[5],
    level: 1,
    xp: 0,
    UserId: res.req.user.id
  };
  createChar(newChar);
};

const getStats = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  generateCharacter();
};

const createChar = Character => {
  $.post("/api/characters/", Character).then(() => {
    window.location.replace("/index");
  });
};
