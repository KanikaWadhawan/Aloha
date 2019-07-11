document.addEventListener("DOMContentLoaded", function () {
  // all of your JS code goes here


  let inputEmail = document.getElementById('signup-form');

  inputEmail.addEventListener("submit", function (e) {
    e.preventDefault();

    const t = document.getElementById("input");
    t.value.length ? (alert("Thanks for subscribing!"),
      t.value = "") : alert("Please submit a valid email address.")

  });


    // Flickity carousel 
    const elem = document.querySelector('.main-carousel');
    const flkty = new Flickity(elem, {
      // options
      cellAlign: 'left',
      wrapAround: true,
      freeScroll: true
    });

});