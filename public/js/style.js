function randomImage() {
  const images = [
    "https://i2.wp.com/fantasy-hive.co.uk/wp-content/uploads/2019/07/Dungeons-and-Dragons-Art-by-Carmen-Sinek-Feature.jpg?fit=750%2C543&ssl=1",
    "https://www.theaureview.com/wp-content/uploads/2020/06/dnd-5e-icewind-dale-rime-of-the-frostmaiden-artwork.jpg",
    "https://sm.ign.com/t/ign_in/feature/h/how-to-sta/how-to-start-playing-dungeons-dragons_t3ms.1200.jpg"
  ];
  const size = images.length;
  const x = Math.floor(size * Math.random());
  $("body").css("background-image", "url(" + images[x] + ")");
}

document.addEventListener("DOMContentLoaded", randomImage);
