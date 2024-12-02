$(document).ready(function(){
    $(window).scroll(function() { 
      if ($(document).scrollTop() > 50) { 
        $("header").css("background-color", "black");
      } else {
        $("header").css("background-color", "transparent"); 
      }
    });
});


(() => {
  const counter = document.querySelectorAll('.counter');
  // covert to array
  const array = Array.from(counter);
  // select array element
  array.map((item) => {
      // data layer
      let counterInnerText = item.textContent;

      let count = 1;
      let speed = item.dataset.speed / counterInnerText
      function counterUp() {
          item.textContent = count++
          if (counterInnerText < count) {
              clearInterval(stop);
          }
      }
      const stop = setInterval(() => {
          counterUp();
      }, speed);
  })
})()



var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    400: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});
