$(document).ready (function(){
    //owl 
    $(".owl-carousel").owlCarousel({
        margin :5,
        navigation:true,
        loop:true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        
        responsive:{
            0:{
                items:1,
                nav:false

            },
            600:{
                items:1,
                nav:false
             },

             1000:{
                items:3,
                nav:false


             }
   }

})
})





