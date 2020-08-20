const charSelect = $("#charSelect");
const spellSelect = $("spellSelect");
const monsterSelect = $("monsterSelect");
const equipSelect = $("equipSelect");

charSelect.on("change", find("selected").attr("url"));
spellSelect.on("change", () => {
  const spellUrl = $(this)
    .find("selected")
    .attr("url");
  $.ajax({
    url: `https://www.dnd5eapi.co${spellUrl}`,
    method: "GET"
  });
});
monsterSelect.on("change", () => {
  const monsterUrl = $(this)
    .find("selected")
    .attr("url");
  $.ajax({
    url: `https://www.dnd5eapi.co${monsterUrl}`,
    method: "GET"
  });
});
equipSelect.on("change", () => {
  const equipUrl = $(this)
    .find("selected")
    .attr("url");
  $.ajax({
    url: `https://www.dnd5eapi.co${equipUrl}`,
    method: "GET"
  });
});
