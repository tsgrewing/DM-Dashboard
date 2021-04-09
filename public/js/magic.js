// Create scripts for magic item pane
/* eslint-disable indent */
const magicSelect = $("#magicSelect");
const magicDiv = $("#magicDiv");

const updateMagic = url => {
  $.ajax({
    url: `https://www.dnd5eapi.co${url}`,
    method: "GET"
  }).then(res => {
    const desc = res.desc.join(" ");
    magicDiv.html(`
      <tr><th> Category: </th><td> ${res.equipment_category.name} </td></tr>
      <tr><th> Description: </th><td> ${desc} </td></tr>`);
  });
};

magicSelect.on("change", function() {
  magicDiv.empty();
  const magicUrl = $(this)
    .children("option:selected")
    .data("url");
  updateEquipment(magicUrl);
});
