$(document).ready(function(){
    $(window).scroll(function() { 
      if ($(document).scrollTop() > 50) { 
        $(".c2").css("background-color", "rgb(30, 30, 30)");
      } else {
        $(".c2").css("background-color", "transparent"); 
      }
    });
});



$(document).ready(function(){
    $('.click').click(function(){
        $(".menu").toggle('menu1');
    })

    $('#click1').click(function(){
        $(".menu").toggle('menu2');
    })
})



var swiper = new Swiper(".mySwiper", {
  autoplay:true,
  autoplaySpeed: 1000,
  loop: true
});



$(document).ready(function() {

  var counters = $(".count");
  var countersQuantity = counters.length;
  var counter = [];

  for (i = 0; i < countersQuantity; i++) {
    counter[i] = parseInt(counters[i].innerHTML);
  }

  var count = function(start, value, id) {
    var localStart = start;
    setInterval(function() {
      if (localStart < value) {
        localStart++;
        counters[id].innerHTML = localStart;
      }
    }, 40);
  }

  for (j = 0; j < countersQuantity; j++) {
    count(0, counter[j], j);
  }
});



$(document).ready(function(){
  $('#video').click(function(){
      $(".video_div").toggle();
  })
})




// $(document).ready(function(){
//   if ($('.vision').click(function(){
//     $('.ans1').slideDown()
//     $('#i1').toggleClass("fa-plus fa-minus")

//     $('.ans2, .ans3, .ans4').slideUp()
//     // $('#i2 #i3 #i4').toggleClass("fa-minus fa-plus")
//   }));

//   if ($('.mission').click(function(){
//     $('.ans2').slideDown()
//     $('#i2').toggleClass("fa-plus fa-minus")
    
//     $('.ans1, .ans3, .ans4').slideUp()
//     // $('#i1 #i3 #i4').toggleClass("fa-minus fa-plus")
//   }));

//   if ($('.goals').click(function(){
//     $('.ans3').slideDown()
//     $('#i3').toggleClass("fa-plus fa-minus")
    
//     $('.ans1, .ans2, .ans4').slideUp()
//     // $('#i1 #i2 #i4').toggleClass("fa-minus fa-plus")
//   }));

//   if ($('.value').click(function(){
//     $('.ans4').slideDown()
//     $('#i4').toggleClass("fa-plus fa-minus")
    
//     $('.ans1, .ans3, .ans2').slideUp()
//     // $('#i1 #i3 #i2').toggleClass("fa-minus fa-plus")
//   }));
// })