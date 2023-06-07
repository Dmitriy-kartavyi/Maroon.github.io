$(document).ready(function(){
	$('.slider').slick({
      arrows: true,
      slidesToShow: 4,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 2000,
      touchThreshold: 10,
      variableWidth: true,
      appendArrows:$('.slider__arrows'),
      waitForAnimate:false,
      responsive:[
         {
            breakpoint: 1054,
            settings: {
               arrows: false,              
               autoplaySpeed: 2000,
               slidesToShow: 5,
               slidesToScroll: 1,
               touchThreshold: 10,
               centerMode: true,
            }
         }
      ]
      }
      
   )
});

