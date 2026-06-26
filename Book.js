(function() {
    'use strict';
   
    jQuery(document).ready(function() {        
      

    });
    AOS.init();

        /*----------------------------
   Sticky menu active
   ------------------------------ */
   document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 250) {
          document.getElementById('navbar_top').classList.add('fixed-top');
        } else {
          document.getElementById('navbar_top').classList.remove('fixed-top');
           // remove padding top from body
          document.body.style.paddingTop = '0';
        } 
    });
  }); 

  // Add scrollspy to the body


  var marqueePosition = localStorage.getItem('marqueePosition') || 10;
  $('#marquee').marquee({
    duration: 30000,
    gap: 40,
    delayBeforeStart: 0,
    direction: 'left', 
    duplicated: true,
    startVisible: true, 
    startVisible: marqueePosition, 
  });
  $('#marquee').on('marquee.finish', function(){
    localStorage.setItem('marqueePosition', $('#marquee').data('currentPosition'));
  });

  $('#marqueeTwo').marquee({
    duration: 30000,
    gap: 40,
    delayBeforeStart: 0,
    direction: 'left', 
    duplicated: true,
    startVisible: true, 
    startVisible: marqueePosition, 
  });
  $('#marqueeTwo').on('marquee.finish', function(){
    localStorage.setItem('marqueePosition', $('#marqueeTwo').data('currentPosition'));
  });

})();




const countDownDate = new Date("May 13, 2024 00:00:00").getTime();

const x = setInterval(function() {
  const now = new Date().getTime();

  const distance = countDownDate - now;

  const Days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const Hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const Mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const Sec = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = Days + " ";
  document.getElementById("hours").innerHTML = Hours + " ";
  document.getElementById("minutes").innerHTML = Mins + "";
  document.getElementById("seconds").innerHTML = Sec + " ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 0);



function handleCopyToClipboard() {
  var textToCopy = document.getElementById('textToCopy').value;
  navigator.clipboard.writeText(textToCopy)
      .then(function() {
          // Change the display of the copy and checked icons
          var copyIcon = document.querySelector('.copy');
          var checkedIcon = document.querySelector('.checked');
          copyIcon.style.display = 'none';
          checkedIcon.style.display = 'inline';
      })
      .catch(function(err) {
          console.error('Failed to copy to clipboard: ', err);
      });
}



// Get all the buttons inside the token_tab_title div
const buttons = document.querySelectorAll('.token_tab_title button');

// Get the payBox element
const payBox = document.querySelector('.payBox');

// Loop through each button
buttons.forEach(button => {
    // Add click event listener to each button
    button.addEventListener('click', function() {
        // Remove active class from all buttons
        buttons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to the clicked button
        this.classList.add('active');

        // Get the image source of the clicked button
        const imgSrc = this.querySelector('img').src;
        
        // Replace the image inside payBox with the clicked button's image
        payBox.querySelector('img').src = imgSrc;
    });
});
