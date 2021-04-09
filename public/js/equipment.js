/* eslint-disable indent */
// const equipSelect = $("#equipSelect");
// const $("#equipDiv") = $("#$("#equipDiv")");

const updateEquipment = url => {
  $.ajax({
    url: `https://www.dnd5eapi.co${url}`,
    method: "GET"
  }).then(res => {
    console.log(res);
    // determine what type of equipment it is and display info accordingly
    switch (res.equipment_category.index) {
      case "adventuring-gear":
        if (res.desc) {
          $("#equipDiv").html(
            `<tr><th> Category: </th> <td> ${res.equipment_category.name}
                <tr><th> Cost: </th> <td> ${res.cost.quantity} ${res.cost.unit}</td></tr>
                <tr><th> Weight: </th> <td> ${res.weight} lbs</td></tr>
                <tr><th> Description: </th> <td> ${res.desc} </td></tr>
                `
          );
        } else {
          $("#equipDiv").html(
            `<tr><th> Category: </th> <td> ${res.equipment_category.name}
          <tr><th> Cost: </th> <td> ${res.cost.quantity} ${res.cost.unit}</td></tr>
          <tr><th> Weight: </th> <td> ${res.weight} lbs</td></tr>
          `
          );
        }
        break;
      case "ammunition":
        $("#equipDiv").html(
          `<tr><th> Category: </th> <td> ${res.equipment_category.name}
          <tr><th> Cost: </th> <td> ${res.cost.quantity} ${res.cost.unit}</td></tr>
          <tr><th> Weight: </th> <td> ${res.weight} lbs</td></tr>
          `
        );
        break;
      case "arcane-foci":
        $("#equipDiv").html(
          `<tr><th> Category: </th> <td> ${res.equipment_category.name}
          <tr><th> Cost: </th> <td> ${res.cost.quantity} ${res.cost.unit}</td></tr>
          <tr><th> Weight: </th> <td> ${res.weight} lbs</td></tr>
          `
        );
        break;
      case "armor":
        $("#equipDiv").html(
          `<tr><th> Category: </th> <td> ${res.equipment_category.name}
          <tr><th> Cost: </th> <td> ${res.cost.quantity} ${res.cost.unit}</td></tr>
          <tr><th> Weight: </th> <td> ${res.weight} lbs</td></tr>
          `
        );
        break;
      case "artisans-tools":
        $("#equipDiv").html(
          `<tr><th> Category: </th> <td> ${res.equipment_category.name}
          <tr><th> Cost: </th> <td> ${res.cost.quantity} ${res.cost.unit}</td></tr>
          <tr><th> Weight: </th> <td> ${res.weight} lbs</td></tr>
          `
        );
        break;
      case "druidic-foci":
        $("#equipDiv").html(
          `<tr><th> Category: </th> <td> ${res.equipment_category.name}
          <tr><th> Cost: </th> <td> ${res.cost.quantity} ${res.cost.unit}</td></tr>
          <tr><th> Weight: </th> <td> ${res.weight} lbs</td></tr>
          `
        );
        break;
      case "equipment-packs":
        $("#equipDiv").html(
          `<tr><th> Category: </th> <td> ${res.equipment_category.name}
          <tr><th> Cost: </th> <td> ${res.cost.quantity} ${res.cost.unit}</td></tr>
          <tr><th> Weight: </th> <td> ${res.weight} lbs</td></tr>
          `
        );
        break;
      case "gaming-sets":
        $("#equipDiv").html(
          `<tr><th> Category: </th> <td> ${res.equipment_category.name}
          <tr><th> Cost: </th> <td> ${res.cost.quantity} ${res.cost.unit}</td></tr>
          <tr><th> Weight: </th> <td> ${res.weight} lbs</td></tr>
          `
        );
        break;
      case "heavy-armor":
        $("#equipDiv").html(
          `<tr><th> Category: </th> <td> ${res.equipment_category.name}
          <tr><th> Cost: </th> <td> ${res.cost.quantity} ${res.cost.unit}</td></tr>
          <tr><th> Weight: </th> <td> ${res.weight} lbs</td></tr>
          `
        );
        break;
      case "holy-symbols":
        $("#equipDiv").html(
          `<tr><th> Category: </th> <td> ${res.equipment_category.name}
          <tr><th> Cost: </th> <td> ${res.cost.quantity} ${res.cost.unit}</td></tr>
          <tr><th> Weight: </th> <td> ${res.weight} lbs</td></tr>
          `
        );
        break;
      case "kits":
        $("#equipDiv").html(
          `<tr><th> Category: </th> <td> ${res.equipment_category.name}
          <tr><th> Cost: </th> <td> ${res.cost.quantity} ${res.cost.unit}</td></tr>
          <tr><th> Weight: </th> <td> ${res.weight} lbs</td></tr>
          `
        );
        break;
      case "land-vehicles":
        $("#equipDiv").html(
          `<tr><th> Category: </th> <td> ${res.equipment_category.name}
          <tr><th> Cost: </th> <td> ${res.cost.quantity} ${res.cost.unit}</td></tr>
          <tr><th> Weight: </th> <td> ${res.weight} lbs</td></tr>
          `
        );
        break;
      case "light-armor":
        $("#equipDiv").html(
          `<tr><th> Category: </th> <td> ${res.equipment_category.name}
          <tr><th> Cost: </th> <td> ${res.cost.quantity} ${res.cost.unit}</td></tr>
          <tr><th> Weight: </th> <td> ${res.weight} lbs</td></tr>
          `
        );
        break;
      case "matrial-melee-weapons":
        $("#equipDiv").html(
          `<tr><th> Category: </th> <td> ${res.equipment_category.name}
          <tr><th> Cost: </th> <td> ${res.cost.quantity} ${res.cost.unit}</td></tr>
          <tr><th> Weight: </th> <td> ${res.weight} lbs</td></tr>
          `
        );
        break;
      case "martial-ranged-weapons":
        $("#equipDiv").html(
          `<tr><th> Category: </th> <td> ${res.equipment_category.name}
          <tr><th> Cost: </th> <td> ${res.cost.quantity} ${res.cost.unit}</td></tr>
          <tr><th> Weight: </th> <td> ${res.weight} lbs</td></tr>
          `
        );
        break;
      case "medium-armor":
        $("#equipDiv").html(
          `<tr><th> Category: </th> <td> ${res.equipment_category.name}
          <tr><th> Cost: </th> <td> ${res.cost.quantity} ${res.cost.unit}</td></tr>
          <tr><th> Weight: </th> <td> ${res.weight} lbs</td></tr>
          `
        );
        break;
      case "mounts-and-other-animals":
        $("#equipDiv").html(
          `<tr><th> Category: </th> <td> ${res.equipment_category.name}
          <tr><th> Cost: </th> <td> ${res.cost.quantity} ${res.cost.unit}</td></tr>
          <tr><th> Weight: </th> <td> ${res.weight} lbs</td></tr>
          `
        );
        break;
      case "mounts-and-vehicles":
        $("#equipDiv").html(
          `<tr><th> Category: </th> <td> ${res.equipment_category.name}
          <tr><th> Cost: </th> <td> ${res.cost.quantity} ${res.cost.unit}</td></tr>
          <tr><th> Weight: </th> <td> ${res.weight} lbs</td></tr>
          `
        );
        break;
      case "musical-intstruments":
        $("#equipDiv").html(
          `<tr><th> Category: </th> <td> ${res.equipment_category.name}
          <tr><th> Cost: </th> <td> ${res.cost.quantity} ${res.cost.unit}</td></tr>
          <tr><th> Weight: </th> <td> ${res.weight} lbs</td></tr>
          `
        );
        break;
      case "other-tools":
        $("#equipDiv").html(
          `<tr><th> Category: </th> <td> ${res.equipment_category.name}
          <tr><th> Cost: </th> <td> ${res.cost.quantity} ${res.cost.unit}</td></tr>
          <tr><th> Weight: </th> <td> ${res.weight} lbs</td></tr>
          `
        );
        break;
      case "potion":
        $("#equipDiv").html(
          `<tr><th> Category: </th> <td> ${res.equipment_category.name}
          <tr><th> Cost: </th> <td> ${res.cost.quantity} ${res.cost.unit}</td></tr>
          <tr><th> Weight: </th> <td> ${res.weight} lbs</td></tr>
          `
        );
        break;
      case "ring":
        $("#equipDiv").html(
          `<tr><th> Category: </th> <td> ${res.equipment_category.name}
          <tr><th> Cost: </th> <td> ${res.cost.quantity} ${res.cost.unit}</td></tr>
          <tr><th> Weight: </th> <td> ${res.weight} lbs</td></tr>
          `
        );
        break;
      case "rod":
        $("#equipDiv").html(
          `<tr><th> Category: </th> <td> ${res.equipment_category.name}
          <tr><th> Cost: </th> <td> ${res.cost.quantity} ${res.cost.unit}</td></tr>
          <tr><th> Weight: </th> <td> ${res.weight} lbs</td></tr>
          `
        );
        break;
      case "scroll":
        $("#equipDiv").html(
          `<tr><th> Category: </th> <td> ${res.equipment_category.name}
          <tr><th> Cost: </th> <td> ${res.cost.quantity} ${res.cost.unit}</td></tr>
          <tr><th> Weight: </th> <td> ${res.weight} lbs</td></tr>
          `
        );
        break;
      case "shields":
        $("#equipDiv").html(
          `<tr><th> Category: </th> <td> ${res.equipment_category.name}
          <tr><th> Cost: </th> <td> ${res.cost.quantity} ${res.cost.unit}</td></tr>
          <tr><th> Weight: </th> <td> ${res.weight} lbs</td></tr>
          `
        );
        break;
      case "simple-melee-weapons":
        $("#equipDiv").html(
          `<tr><th> Category: </th> <td> ${res.equipment_category.name}
          <tr><th> Cost: </th> <td> ${res.cost.quantity} ${res.cost.unit}</td></tr>
          <tr><th> Weight: </th> <td> ${res.weight} lbs</td></tr>
          `
        );
        break;
      case "simple-ranged-weapons":
        $("#equipDiv").html(
          `<tr><th> Category: </th> <td> ${res.equipment_category.name}
          <tr><th> Cost: </th> <td> ${res.cost.quantity} ${res.cost.unit}</td></tr>
          <tr><th> Weight: </th> <td> ${res.weight} lbs</td></tr>
          `
        );
        break;
      case "simple-weapons":
        $("#equipDiv").html(
          `<tr><th> Category: </th> <td> ${res.equipment_category.name}
          <tr><th> Cost: </th> <td> ${res.cost.quantity} ${res.cost.unit}</td></tr>
          <tr><th> Weight: </th> <td> ${res.weight} lbs</td></tr>
          `
        );
        break;
      case "staff":
        $("#equipDiv").html(
          `<tr><th> Category: </th> <td> ${res.equipment_category.name}
          <tr><th> Cost: </th> <td> ${res.cost.quantity} ${res.cost.unit}</td></tr>
          <tr><th> Weight: </th> <td> ${res.weight} lbs</td></tr>
          `
        );
        break;
      case "standard-gear":
        $("#equipDiv").html(
          `<tr><th> Category: </th> <td> ${res.equipment_category.name}
          <tr><th> Cost: </th> <td> ${res.cost.quantity} ${res.cost.unit}</td></tr>
          <tr><th> Weight: </th> <td> ${res.weight} lbs</td></tr>
          `
        );
        break;
      case "tack-harness-and-drawn-vehicles":
        $("#equipDiv").html(
          `<tr><th> Category: </th> <td> ${res.equipment_category.name}
          <tr><th> Cost: </th> <td> ${res.cost.quantity} ${res.cost.unit}</td></tr>
          <tr><th> Weight: </th> <td> ${res.weight} lbs</td></tr>
          `
        );
        break;
      case "tools":
        $("#equipDiv").html(
          `<tr><th> Category: </th> <td> ${res.equipment_category.name}
          <tr><th> Cost: </th> <td> ${res.cost.quantity} ${res.cost.unit}</td></tr>
          <tr><th> Weight: </th> <td> ${res.weight} lbs</td></tr>
          `
        );
        break;
      case "wand":
        $("#equipDiv").html(
          `<tr><th> Category: </th> <td> ${res.equipment_category.name}
          <tr><th> Cost: </th> <td> ${res.cost.quantity} ${res.cost.unit}</td></tr>
          <tr><th> Weight: </th> <td> ${res.weight} lbs</td></tr>
          `
        );
        break;
      case "waterborne-vehicles":
        $("#equipDiv").html(
          `<tr><th> Category: </th> <td> ${res.equipment_category.name}
          <tr><th> Cost: </th> <td> ${res.cost.quantity} ${res.cost.unit}</td></tr>
          <tr><th> Weight: </th> <td> ${res.weight} lbs</td></tr>
          `
        );
        break;
      case "weapon":
        $("#equipDiv").html(
          `<tr><th> Category: </th> <td> ${res.equipment_category.name}
          <tr><th> Cost: </th> <td> ${res.cost.quantity} ${res.cost.unit}</td></tr>
          <tr><th> Weight: </th> <td> ${res.weight} lbs</td></tr>
          `
        );
        break;
      case "wondrous-items":
        $("#equipDiv").html(
          `<tr><th> Category: </th> <td> ${res.equipment_category.name}
          <tr><th> Cost: </th> <td> ${res.cost.quantity} ${res.cost.unit}</td></tr>
          <tr><th> Weight: </th> <td> ${res.weight} lbs</td></tr>
          `
        );
        break;
      default:
        $("#equipDiv").html(
          `<tr><th> Cost: </th> <td> ${res.cost.quantity} ${res.cost.unit}</td></tr>
          <tr><th> Weight: </th> <td> ${res.weight} lbs</td></tr>
          `
        );
        break;
    }
  });
};

$("#equipSelect").on("change", function() {
  $("#equipDiv").empty();
  const equipUrl = $(this)
    .children("option:selected")
    .data("url");
  updateEquipment(equipUrl);
});
