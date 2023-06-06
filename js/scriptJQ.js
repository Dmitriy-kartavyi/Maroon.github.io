$(document).ready(function(){
   $('.block__title').click(function(event) {
      $(this).toggleClass('active').next().slideToggle(300);
   });
   $('.link__button').click(function(event) {
      //$(this).toggleClass('on').slideToggle(300);
      $('.filter__block').toggleClass('on').slideToggle(300);
      $('.exit').toggleClass('on').slideToggle(300);
   });
   
});








