$(document).ready(function(){
    
    var contWrap = $('.f_product, .grasse_wrap, .grasse1, .grasse2, .grasse3, .grasse4, .footer_wrap');
    var cont1 = $('.f_product');
    var cont2 = $('.grasse_wrap');
    var cont3 = $('.grasse1');
    var cont4 = $('.grasse2');
    var cont5 = $('.grasse3');
    var cont6 = $('.grasse4');
    var footer = $('.footer_wrap');
    
    var allPattern = $('#sub2_bgWrap svg');
    var pattern1 = $('#sub2_bgWrap .pattern1');
    var pattern2 = $('#sub2_bgWrap .pattern2');
    var pattern3 = $('#sub2_bgWrap .pattern3');
    var pattern4 = $('#sub2_bgWrap .pattern4');
    
    var gPatternAll = $('.grasse_pattern .g_pattern1, .grasse_pattern .g_pattern2, .grasse_pattern .g_pattern3, .grasse_pattern .g_pattern4');
    var gPattern1 = $('.grasse_pattern .g_pattern1');
    var gPattern2 = $('.grasse_pattern .g_pattern2');
    var gPattern3 = $('.grasse_pattern .g_pattern3');
    var gPattern4 = $('.grasse_pattern .g_pattern4');
    
    
    $(window).scroll(function(){
        var wScroll = $(this).scrollTop();
        
        
        if(wScroll >= $('.main_visual').offset().top + $('.main_visual').outerHeight(true) - 100){
           $('#headerNav > .color_bar').addClass('show');
        }else {$('#headerNav > .color_bar').removeClass('show');}
    
        if(wScroll >= cont1.offset().top - 450){
            cont1.removeClass('show').addClass('show');
        }else{contWrap.removeClass('show');}
        
         if(wScroll >= cont2.offset().top -700){
            cont2.removeClass('show').addClass('show');
        }
        
         if(wScroll >= cont3.offset().top -500){
            cont3.removeClass('show').addClass('show');
        }
        
         if(wScroll >= cont4.offset().top -500){
            cont4.removeClass('show').addClass('show');
        }
        
         if(wScroll >= cont5.offset().top -500){
            cont5.removeClass('show').addClass('show');
        }
        
         if(wScroll >= cont6.offset().top -500){
            cont6.removeClass('show').addClass('show');
        }
        
        if(wScroll >= footer.offset().top - 1000){
            footer.removeClass('show').addClass('show');
        }
        
        
        /* pattern animation*/
        if(wScroll >= pattern1.offset().top -400){
            pattern1.addClass('show');
        }else{allPattern.removeClass('show');}
        
        if(wScroll >= pattern2.offset().top -500){
            pattern2.addClass('show');
        }
        if(wScroll >= pattern3.offset().top -500){
            pattern3.addClass('show');
        }
        if(wScroll >= pattern4.offset().top -650){
            pattern4.addClass('show');
        }
        
        /* gPattern animation */
        if(wScroll >= gPattern1.offset().top -500){
            gPattern1.addClass('show');
        }else{gPatternAll.removeClass('show');}
        
        if(wScroll >= gPattern2.offset().top -500){
            gPattern2.addClass('show');
        }
        if(wScroll >= gPattern3.offset().top -500){
            gPattern3.addClass('show');
        }
        if(wScroll >= gPattern4.offset().top -500){
            gPattern4.addClass('show');
        }
        
    
    });
    
    
    
    
    
    
});