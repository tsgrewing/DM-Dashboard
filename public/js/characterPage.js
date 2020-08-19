// eslint-disable-next-line no-unused-vars
$(".delete").on("click", function(event) {
  const id = $(this).data("id");

  $.ajax("/api/characters/" + id, {
    type: "DELETE"
  }).then(() => {
    location.reload();
  });
});
