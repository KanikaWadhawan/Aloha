document.addEventListener("DOMContentLoaded", function() {
    // all of your JS code goes here


    let inputEmail= document.getElementById('signup-form');

    inputEmail.addEventListener("submit",function(e)
    {
    e.preventDefault();
        
    const t=document.getElementById("input");
    t.value.length?(alert("Thanks for subscribing!"),
    t.value=""):alert("Please submit a valid email address.")
    

    });
 

  });