const charName = $("#charName");
const charClass = $("#charClass").val();
const charRace = $("#charRace").val();
const createForm = $(".create-form");

let hitPoints = 0;
const stats = [15, 14, 13, 12, 10, 8];

// Adding an event listener for when the form is submitted
$(createForm).on("submit", event => {
  event.preventDefault();

  if (!charName.val().trim()) {
    return;
  }

  //get hit points based on class selection
  $.ajax({
    url: `https://www.dnd5eapi.co/api/classes/${charClass.toLowerCase()}`,
    method: "GET"
  }).then(response => {
    hitPoints = response.hit_die;
  });

  getStats(stats).then(response => {
    // Constructing a character object to hand to the database
    const newChar = {
      name: titleInput.val().trim(),
      class: charRace,
      race: charClass,
      hp: hitPoints,
      str: response[0],
      dex: response[1],
      con: response[2],
      int: response[3],
      wis: response[4],
      cha: response[5]
    };
    createChar(newChar);
  });
});

const getStats = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};
const createChar = Character => {
  $.post("/api/characters/", Character, () => {
    window.location.href = "/characters";
  });
};
