// eslint-disable-next-line no-unused-vars
$(".delete").on("click", function(event) {
  const id = $(this).data("id");

  $.ajax({
    type: "DELETE",
    url: "/api/characters/" + id
  }).then(() => {
    location.reload();
  });
});

// eslint-disable-next-line no-unused-vars
$(".charSelect").on("click", function(event) {
  const id = $(this).data("id");

  $.ajax({
    type: "GET",
    url: "/api/characters/" + id
  }).then(() => {
    window.location.replace("/board");
  });
});
