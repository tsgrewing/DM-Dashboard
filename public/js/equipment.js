/* eslint-disable indent */
const equipSelect = $("#equipSelect");
const equipDiv = $("equipDiv");

const updateEquipment = url => {
  $.ajax({
    url: `https://www.dnd5eapi.co${url}`,
    method: "GET"
  }).then(res => {
    console.log(res);
    if (res.desc) {
      equipDiv.html(
        `<tr><th> Category: </th> <td> ${res.equipment_category.name}
            <tr><th> Cost: </th> <td> ${res.cost.quantity} ${res.cost.unit}</td></tr>
            <tr><th> Weight: </th> <td> ${res.weight} lbs</td></tr>
            <tr><th> Description: </th> <td> ${res.desc} </td></tr>
            `
      );
    } else {
      equipDiv.html(
        `<tr><th> Category: </th> <td> ${res.equipment_category.name}
      <tr><th> Cost: </th> <td> ${res.cost.quantity} ${res.cost.unit}</td></tr>
      <tr><th> Weight: </th> <td> ${res.weight} lbs</td></tr>
      `
      );
    }
    // determine what type of equipment it is and display info accordingly
    switch (res.equipment_category.index) {
      case "adventuring-gear":
        if (res.gear_category.index){
          switch(res.gear_category.index) {
            case "equipment-packs":
              equipDiv.append(`
              <tr><th> Contents: </th></tr>
              `);
              (res.contents).forEach(elem => {
                equipDiv.append(`
                <tr><td>${elem.item.name}</td><td> x ${elem.quantity}`)
              });
              break;
          }
        } else if ()
        break;
      case "armor":
        equipDiv.append(`
        
        `);
        break;
      case "equipment-packs":

        break;
      case "gaming-sets":

        break;
      case "heavy-armor":

        break;
      case "holy-symbols":

        break;
      case "kits":

        break;
      case "land-vehicles":

        break;
      case "light-armor":

        break;
      case "matrial-melee-weapons":

        break;
      case "martial-ranged-weapons":

        break;
      case "medium-armor":

        break;
      case "mounts-and-other-animals":

        break;
      case "mounts-and-vehicles":

        break;
      case "musical-intstruments":

        break;
      case "other-tools":

        break;
      case "potion":

        break;
      case "ring":

        break;
      case "rod":

        break;
      case "scroll":

        break;
      case "shields":

        break;
      case "simple-melee-weapons":

        break;
      case "simple-ranged-weapons":

        break;
      case "simple-weapons":

        break;
      case "staff":

        break;
      case "standard-gear":

        break;
      case "tack-harness-and-drawn-vehicles":

        break;
      case "tools":

        break;
      case "wand":

        break;
      case "waterborne-vehicles":

        break;
      case "weapon":

        break;
      case "wondrous-items":

        break;
      default:
        equipDiv.html(
          `<tr><th> Cost: </th> <td> ${res.cost.quantity} ${res.cost.unit}</td></tr>
          <tr><th> Weight: </th> <td> ${res.weight} lbs</td></tr>
          `
        );
        break;
    }
  });
};

equipSelect.on("change", function() {
  equipDiv.empty();
  const equipUrl = $(this)
    .children("option:selected")
    .data("url");
  updateEquipment(equipUrl);
});
