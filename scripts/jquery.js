$(document).ready(function(){
    // social slider settings
    if( $('#carousel--social').length ){
        $(".owl-carousel").owlCarousel({
            loop:true,
            margin:0,
            autoplay:true,
            autoplayTimeout:1500,
            autoplayHoverPause:false,
            nav:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:4
                }
            }
        });    
    }
    // inventory slider settings
    if( $('#carousel--inventory').length){
        $(".owl-carousel").owlCarousel({
            loop:true,
            margin:20,
            autoplay:true,
            autoplayTimeout:4000,
            autoplayHoverPause:true,
            nav:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:3
                }
            }
        });    
    }

});