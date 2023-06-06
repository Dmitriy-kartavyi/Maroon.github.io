$(document).ready(function(){
   $('.slider__katalog').slick({
      rows:3,
      slidesToShow: 4,
      initialSlide: 0,
      slidesToScroll: 4,
      infinite: true,
      dots: true,
      arrows:true,
      appendArrows: $('.slider__dots'),
      appendDotss: $('.slider__dots'),
      responsive:[
         {
            breakpoint: 1054,
            settings: {
               centerMode: true,
               autoplaySpeed: 2000,
               slidesToShow: 1,
               slidesToScroll: 1,
               touchThreshold: 4,
               rows: 2,
               dots: false,
               arrows: false,
            }
         }
      ]
      }
   )
});

$(document).ready(function(){
   $('.slider__history').slick({
      slidesToShow: 4,
      initialSlide: 0,
      infinite: true,
      dots: true,
      arrows:true,
      appendArrows: $('.slider__arrows'),
      appendDotss: $('.slider__arrows'),
      responsive:[
         {
            breakpoint: 1054,
            settings: {
               centerMode: true,
               autoplaySpeed: 2000,
               slidesToShow: 1,
               slidesToScroll: 1,
               touchThreshold: 4,
               rows: 1,
               dots: false,
               arrows: false,
            }
         }
      ]
   }
   )
});