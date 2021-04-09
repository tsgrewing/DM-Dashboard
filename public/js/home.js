$(document).ready(() => {
  const charSelect = $("#charSelect");
  const spellSelect = $("#spellSelect");
  const monsterSelect = $("#monsterSelect");
  const charDiv = $("#charDiv");
  const spellDiv = $("#spellDiv");
  const monsterDiv = $("#monsterDiv");
  // const charDelete = $("#charDelete");
  // const charUpdate = $("#charUpdate");

  const updateChar = id => {
    $.get("/api/characters/" + id, response => {
      charDiv.html(
        `<tr><th> Name: </th> <td> ${response.name}</td></tr>
        <tr><th> Class: </th> <td> ${response.class}</td></tr>
        <tr><th> Race: </th> <td> ${response.race}</td></tr>
        <tr><th> Alignment: </th> <td> ${response.alignment}</td></tr>
        <tr><th> Level: </th> <td> <input type="text" value="${response.level}" id="lvlInput"></td></tr>
        <tr><th> HP: </th> <td> <input type'"text" value="${response.hp}" id="hpInput"></td></tr>
        <tr><th> XP: </th> <td> <input type="text" value="${response.xp}" id="xpInput"></td></tr>
        <tr><th> Strength: </th> <td> ${response.str}</td></tr>
        <tr><th> Dexterity: </th> <td> ${response.dex}</td></tr>
        <tr><th> Constitution: </th> <td> ${response.con}</td></tr>
        <tr><th> Intelligence: </th> <td> ${response.int}</td></tr>
        <tr><th> Wisdom: </th> <td> ${response.wis}</td></tr>
        <tr><th> Charisma: </th> <td> ${response.cha}</td></tr>`
        // <td><button type="button" class="btn btn-success" id="charUpdate" data-id="${response.id}">Update</button>
        // <td><button type="button" class="btn btn-danger" id="charDelete" data-id="${response.id}">Delete</button>
      );
    });
  };

  const updateSpell = url => {
    $.ajax({
      url: `https://www.dnd5eapi.co${url}`,
      method: "GET"
    }).then(res => {
      spellDiv.html(
        `<tr><th> Description: </th> <td> ${res.desc[0]}</td></tr>
        <tr><th> Range: </th> <td> ${res.range}</td></tr>
        <tr><th> Level: </th> <td> ${res.level}</td></tr>
        <tr><th> Casting Time: </th> <td> ${res.casting_time}</td></tr>
        <tr><th> Duration: </th> <td> ${res.duration}</td></tr>
        <tr><th> School: </th> <td> ${res.school.name}</td></tr>
        `
      );
    });
  };

  const updateMonster = url => {
    $.ajax({
      url: `https://www.dnd5eapi.co${url}`,
      method: "GET"
    }).then(res => {
      monsterDiv.html(
        `<tr><th> Size: </th> <td> ${res.size}</td></tr>
      <tr><th> Type: </th> <td> ${res.type}</td></tr>
      <tr><th> Alignment: </th> <td> ${res.alignment}</td></tr>
      <tr><th> Armor Class: </th> <td> ${res.armor_class}</td></tr>
      <tr><th> Hit Points: </th> <td> ${res.hit_points}</td></tr>
      <tr><th> Hit Dice: </th> <td> ${res.hit_dice}</td></tr>
      <tr><th> Strength: </th> <td> ${res.strength}</td></tr>
      <tr><th> Dexterity: </th> <td> ${res.dexterity}</td></tr>
      <tr><th> Constitution: </th> <td> ${res.constitution}</td></tr>
      <tr><th> Intelligence: </th> <td> ${res.intelligence}</td></tr>
      <tr><th> Wisdom: </th> <td> ${res.wisdom}</td></tr>
      <tr><th> Charisma: </th> <td> ${res.charisma}</td></tr>
      `
      );
    });
  };


  charSelect.on("change", function() {
    charDiv.empty();
    const charId = $(this)
      .find("option:selected")
      .data("id");
    updateChar(charId);
  });

  spellSelect.on("change", function() {
    spellDiv.empty();
    const spellUrl = $(this)
      .find("option:selected")
      .data("url");
    updateSpell(spellUrl);
  });

  monsterSelect.on("change", function() {
    monsterDiv.empty();
    const monsterUrl = $(this)
      .find("option:selected")
      .data("url");
    updateMonster(monsterUrl);
  });



  
  // Draggable Interaction
  $(() => {
    $(".boxWrapper").draggable({ containment: "body" });
  });

  $(() => {
    $(".resizable").resizable();
  });
  // $(function() {
  //   $(".boxWrapper").resizable({containment: "body"})
  // });
});
