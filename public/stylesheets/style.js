function randomImage(){
    var images = [
     'https://i2.wp.com/fantasy-hive.co.uk/wp-content/uploads/2019/07/Dungeons-and-Dragons-Art-by-Carmen-Sinek-Feature.jpg?fit=750%2C543&ssl=1',
     'https://www.theaureview.com/wp-content/uploads/2020/06/dnd-5e-icewind-dale-rime-of-the-frostmaiden-artwork.jpg',
     'https://sm.ign.com/t/ign_in/feature/h/how-to-sta/how-to-start-playing-dungeons-dragons_t3ms.1200.jpg'];
    var size = images.length;
    var x = Math.floor(size * Math.random());
    console.log(x);
    var element = document.getElementsByClassName('home-intro');
    console.log(element);
    element[0].style["background-image"] = "url("+ images[x] + ")";
  }
  
  document.addEventListener("DOMContentLoaded", randomImage);