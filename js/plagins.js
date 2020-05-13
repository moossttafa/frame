$(function (){
    
   'use strict';
    
    //chainge Header Hieght
    
    $('header').height($(window).height());
    
    $(window).resize(function(){
       
         $('header').height($(window).height());
        
    });
    
     // niceScroll
    
    $('.navbar-nav li a').click(function(){
        
        $('html , body').animate({
            
            scrollTop: $('#' + $(this).data('value')).offset().top
            
        },1000);
    });
 
    
});