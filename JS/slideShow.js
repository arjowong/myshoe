var slideIndex = 1;
      showSlides(slideIndex);
      
      // 點擊"<" ">"時，可以改變slide index
      function plusSlides(n) {
        showSlides(slideIndex += n);
      }
      
      // 最下方的dot，點擊切換slide
      function currentSlide(n) {
        showSlides(slideIndex = n);
      }
      
      function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("Slideshow-mySlides");
        var dots = document.getElementsByClassName("Slideshow-demo");
        var captionText = document.getElementById("caption");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
        captionText.innerHTML = dots[slideIndex-1].alt;
      }