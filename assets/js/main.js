(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        $('.banner-carousel').owlCarousel(
            items:3,
            loop:true,
            autoplay:true,
            dots:true,
            nav:false
        );
    });
    
    jQuery(window).load(function(){
        
    });
}(jQuery));	