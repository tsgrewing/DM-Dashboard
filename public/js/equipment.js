const equipSelect = $("#equipSelect");
const equipDiv = $("#equipDiv");

const updateEquipment = url => {
  $.ajax({
    url: `https://www.dnd5eapi.co${url}`,
    method: "GET"
  }).then(res => {
    // determine what type of equipment it is and display info accordingly
    if (res.weapon_category) {
      equipDiv.html(
        `<tr><th> Cost: </th> <td> ${res.cost.quantity} ${res.cost.unit}</td></tr>
        <tr><th> Weight: </th> <td> ${res.weight} lbs</td></tr>
        `
      );
    } else if (res.armor_category) {
      equipDiv.html(
        `<tr><th> Cost: </th> <td> ${res.cost.quantity} ${res.cost.unit}</td></tr>
        <tr><th> Weight: </th> <td> ${res.weight} lbs</td></tr>
        `
      );
    }
    equipDiv.html(
      `<tr><th> Cost: </th> <td> ${res.cost.quantity} ${res.cost.unit}</td></tr>
      <tr><th> Weight: </th> <td> ${res.weight} lbs</td></tr>
      `
    );
  });
};

equipSelect.on("change", function() {
  equipDiv.empty();
  const equipUrl = $(this)
    .children("option:selected")
    .data("url");
  updateEquipment(equipUrl);
});
