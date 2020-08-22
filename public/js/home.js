$(document).ready(() => {
  const charSelect = $("#charSelect");
  const spellSelect = $("#spellSelect");
  const monsterSelect = $("#monsterSelect");
  const equipSelect = $("#equipSelect");
  const charDiv = $("#charDiv");
  const spellDiv = $("#spellDiv");
  const monsterDiv = $("#monsterDiv");
  const equipDiv = $("#equipDiv");
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
    }).then(response => {
      spellDiv.html(
        `<tr><th> Description: </th> <td> ${response.desc[0]}</td></tr>
        <tr><th> Range: </th> <td> ${response.range}</td></tr>
        <tr><th> Level: </th> <td> ${response.level}</td></tr>
        <tr><th> Casting Time: </th> <td> ${response.casting_time}</td></tr>
        <tr><th> Duration: </th> <td> ${response.duration}</td></tr>
        <tr><th> School: </th> <td> ${response.school.name}</td></tr>
        `
      );
    });
  };

  const updateMonster = url => {
    $.ajax({
      url: `https://www.dnd5eapi.co${url}`,
      method: "GET"
    }).then(response => {
      monsterDiv.html(
        `<tr><th> Size: </th> <td> ${response.size}</td></tr>
      <tr><th> Type: </th> <td> ${response.type}</td></tr>
      <tr><th> Alignment: </th> <td> ${response.alignment}</td></tr>
      <tr><th> Armor Class: </th> <td> ${response.armor_class}</td></tr>
      <tr><th> Hit Points: </th> <td> ${response.hit_points}</td></tr>
      <tr><th> Hit Dice: </th> <td> ${response.hit_dice}</td></tr>
      <tr><th> Strength: </th> <td> ${response.strength}</td></tr>
      <tr><th> Dexterity: </th> <td> ${response.dexterity}</td></tr>
      <tr><th> Constitution: </th> <td> ${response.constitution}</td></tr>
      <tr><th> Intelligence: </th> <td> ${response.intelligence}</td></tr>
      <tr><th> Wisdom: </th> <td> ${response.wisdom}</td></tr>
      <tr><th> Charisma: </th> <td> ${response.charisma}</td></tr>
      `
      );
    });
  };

  const updateEquipment = url => {
    $.ajax({
      url: `https://www.dnd5eapi.co${url}`,
      method: "GET"
    }).then(response => {
      equipDiv.html(
        `<tr><th> Cost: </th> <td> ${response.cost.quantity} ${response.cost.unit}</td></tr>
      <tr><th> Weight: </th> <td> ${response.weight} lbs</td></tr>
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

  equipSelect.change(function() {
    equipDiv.empty();
    const equipUrl = $(this)
      .children("option:selected")
      .data("url");
    updateEquipment(equipUrl);
  });

  //   $("#charDiv").on("click", "#charDelete", function() {
  //     console.log("deleting...");
  //     $.ajax("/api/characters/" + $(this).data("id"), response => {
  //       console.log(`${response.name} has been deleted`);
  //     });
  //   });

  //   $("#charDiv").on("click", "#charUpdate", function() {
  //     const data = {
  //       id: $(this).data("id"),
  //       level: parseInt($("#lvlInput").val()),
  //       hp: parseInt($("#hpInput").val()),
  //       xp: parseInt($("#xpInput").val())
  //     };
  //     console.log(data);
  //     $.ajax({
  //       method: "PUT",
  //       url: "/api/characters",
  //       data: data
  //     });
  //   });
  // });

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
