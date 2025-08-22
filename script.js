// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
 document.getElementById("myModal").style.display = "none";
}

var imgPointer = 1;

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(e) {
    var imgPointer = e;
    //var imgPointer = (e.target) ? e.target : e.srcElement;
    showSlides(slideIndex,imgPointer);    
    //showSlides(slideIndex = n);

}

function showSlides(n,e) {
  var i;
  var slides = document.getElementsByClassName("galleryImage");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  var srcImg = e.src;
  if (n > slides.length) 
    {slideIndex = 1}

  if (n < 1) 
    {slideIndex = slides.length}
  
 
  
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  document.getElementById("lightboxID").src = srcImg;

}