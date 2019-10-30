/*$(".carousel").carousel({
    interval: 3000
});*/


/* scripte pour les photos ************/
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

$(document).ready(function() {
  $('.js-scrollTo').on('click', function() { // Au clic sur un élément
  var page = $(this).attr('href'); // Page cible
  var speed = 750; // Durée de l'animation (en ms)
  $('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
  return false;
  });
  });

/* fin script de sphotos ***************/
