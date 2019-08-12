document.addEventListener("DOMContentLoaded", function () {
  // all of your JS code goes here


  let inputEmail = document.getElementById('signup-form');

  inputEmail.addEventListener("submit", function (e) {
    e.preventDefault();

    const text = document.getElementById("input");
    const trimVal = text.value.trim();
    if (trimVal === "") {
      alert("Please submit a valid email address.");
    }

    else if (trimVal.length >= 0) {
      alert("Thanks for subscribing!");
    }

    text.value = "";

  });


  // Flickity carousel 
  const elem = document.querySelector('.main-carousel');
  const flkty = new Flickity(elem, {
    // options
    prevNextButtons: false,
    autoPlay: true,
    cellAlign: 'left',
    wrapAround: true,
    freeScroll: true
   

  });


 
  });

  
