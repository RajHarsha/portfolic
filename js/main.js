
// Jquery code starts


$(document).ready(function() {

   $('.scroll-top').hide();
   // NavColorModify

$(window).scroll(function(){
   var $navScroll = $('#main-nav');
   var $welcomeHeight = $(window).scrollTop();
   if($welcomeHeight >= 460){
   $navScroll.addClass('bg-black').removeClass('background-light1');
 } else {
 $navScroll.addClass('background-light1').removeClass('bg-black');
}
});
// Scrolltop

$(window).scroll(function(){
   var $scrollTop = $('.scroll-top');
   var $welcomeHeight = $(window).scrollTop();
   if($welcomeHeight >= 230){
      $scrollTop.show();
    } else {
      $scrollTop.hide();
   }
});

$('#js-scroll-top').click(function(e){
   e.preventDefault();
   $('html, body').animate({scrollTop:'0'}, '280');
});

// Email-validation
function validateEmail(email) {
   const emailFormat = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return emailFormat.test(email);
 }
//  ContactMe

 $("#sendForm").click(function(){
   const $errorE = $("#errorEmail");
   const email = $("#InputEmail").val();
   const $errorT = $("#errorText");
   const textArea = $("#ControlTextarea").val();
   if(!validateEmail(email)) {
      $errorE.text("Email can either required or not valid").css("color", "yellow");
   } else if (!textArea) {
      $errorT.text("Explanation required").css("color", "yellow");
   } else {
      $.ajax({
         url:"https://formspree.io/harshanraj93@gmail.com",
         method:"POST",
         data:$(this).serialize(),
         dataType: "json"
         });
      }
   });

  // Nav bar 
  $('#skills').click(function() {
  $('html,body').animate({'scrollTop':$('#skills-trigger').position().top}, 900);
});
$('#project').click(function() {
   $('html,body').animate({'scrollTop':$('#project-trigger').position().top}, 900);
 });
 $('#ido').click(function() {
   $('html,body').animate({'scrollTop':$('#ido-trigger').position().top}, 900);
 });
 $('#aboutme').click(function() {
   $('html,body').animate({'scrollTop':$('#about-trigger').position().top}, 900);
 });
  
});

// var test = $(window).scrollTop();
// console.log(test);
// VM168:2 773.5999755859375

// var test = $(window).scrollTop();
// console.log(test);
// VM162:2 466.3999938964844