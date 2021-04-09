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
    // determine what type of equipment it is and append info accordingly
    switch (res.equipment_category.index) {
      case "adventuring-gear":
        if (res.gear_category.index === "equipment-packs") {
          equipDiv.append(`
              <tr><th> Contents: </th></tr>
              `);
          res.contents.forEach(elem => {
            equipDiv.append(`
                <tr><td>${elem.item.name}</td><td> x ${elem.quantity}`);
          });
        }
        break;
      case "armor":
        equipDiv.append(`
          <tr><th> Category: </th><td> ${res.armor_category} </td></tr>
          <tr><th> Base AC: </th><td> ${res.armor__class.base} </td></tr>
          <tr><th> Dex Bonus: </th><td> ${res.armor_class.dex_bonus.toString()} </td></tr>
          <tr><th> STR Min: </th><td> ${res.str_minimum} </td></tr>
          <tr><th> Stealth Disadvantage  </th><td> ${res.stealth_disadvantage.toString()} </td></tr>
        `);
        break;
      case "mounts-and-vehicles":
        switch (res.vehicle_category) {
          case "Mounts and Other Animals":
            equipDiv.append(`
            <tr><th> Speed: </th><td> ${res.speed} </td></tr>
            <tr><th> Capacity: </th><td> ${res.capacity} </td></tr>
            `);
            break;
          case "Waterborne Vehicles":
            equipDiv.append(
              `<tr><th> Speed: </th><td> ${res.speed} </td></tr>`
            );
            break;
          default:
            break;
        }
        break;
      case "weapon":
        if (res.weapon_range === "melee") {
          equipDiv.append(`
          <tr><th> Damage: </th><td> ${res.damage.damage_dice} </td></tr>
          <tr><th> Damage Type: </th><td> ${res.damage.damage_type.name} </td></tr>
          <tr><th> Range: </th><td> ${res.range.normal} </td></tr>
          <tr><th> Damage: </th><td> ${res.damage.damage_dice} </td></tr>
        `);
        } else {
          equipDiv.append(`
          <tr><th> Damage: </th><td> ${res.damage.damage_dice} </td></tr>
          <tr><th> Damage Type: </th><td> ${res.damage.damage_type.name} </td></tr>
          <tr><th> Range: </th><td> ${res.range.normal} / ${res.range.long} </td></tr>
          <tr><th> Damage: </th><td> ${res.damage.damage_dice} </td></tr>
        `);
        }
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
