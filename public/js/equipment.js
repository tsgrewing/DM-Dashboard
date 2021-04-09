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
