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
      responsive:[
         {
            breakpoint: 1054,
            settings: {
               arrows: false,
               centerMode: true,
               autoplaySpeed: 2000,
               slidesToShow: 3,
               slidesToScroll: 1,
               touchThreshold: 4,
            }
         }
      ]
      }
      
   )
});

