



$(function () {

  'use strict';
  var wind = $(window);

  wind.on("scroll",function (){
      var bodyScroll = $(window).scrollTop();
      var nav = $(".nav-fixed");
      var navL = $(".nav-fixed .nav-link");
      var logo = $(".nav-fixed .logo");

  if(bodyScroll > 100){
      nav.css("background-color","white" );
      navL.css("color","black")
     

      logo.css("color","black")
  }
  else{
      nav.css("background-color", "transparent");
      logo.css("color","#FF5858")
      navL.css("color","white")
     
  }
  })
  

  $(".loading").fadeOut(700);



   // scrollIt
   $.scrollIt();
   
   $.scrollIt({
    upKey: 38,                // key code to navigate to the next section
    downKey: 40,              // key code to navigate to the previous section
    easing: 'swing',          // the easing function for animation
    scrollTime: 600,          // how long (in ms) the animation takes
    activeClass: 'active',    // class given to the active nav element
    onPageChange: null,       // function(pageIndex) that is called when page is changed
    topOffset: 0            // offste (in px) for fixed top navigation
  });

  


  wind.stellar();


  var pageSection = $(".bg-img, section");
    pageSection.each(function(indx){
        
        if ($(this).attr("data-background")){
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });
     
    $(".navbar a").click(function(){
        $(".navbar-collapse").removeClass("show")
    })

    
$('.Dest-boxs').magnificPopup({
    delegate: '.popimg', // child items selector, by clicking on it popup will open
    type: 'image',
    gallery:{
        enabled:true
      }
    // other options
  });


   // countUp
   $('.numbers .count').countUp({
    delay: 10,
    time: 1500
});



// YouTubePopUp
$("a.vid").YouTubePopUp();




})
$(document).ready(function() {

     $(".reviews-body").owlCarousel({
       
        navigation : false,


        // Show next and prev buttons
        loop : true,
        smartSpeed:500,
        animateOut: 'fadeOut',
        singleItem:true,
        dots:false,
        autoplay:true,
        margin:15,
        navClass:false,
        navText:false,
         center:true,
         responsive:{
             0: {
                 items:1
             },
             600: {
                 items:1,
                 
             },
             1000: {
                 items:3
             }
         },
         
        

       
     }) 

      

    $("#owl-demo").owlCarousel({
 
        navigation : true, // Show next and prev buttons
        loop : true,
        smartSpeed:500,
        animateOut: 'fadeOut',
        singleItem:true,
        dots:false,
        autoplay:true,
         
         items : 1, 
         itemsDesktop : false,
         itemsDesktopSmall : false,
         itemsTablet: false,
         itemsMobile : false,

   
    });


});
