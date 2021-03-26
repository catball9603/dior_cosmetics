$(document).ready(function(){
    
    var contWrap = $('.e_wrap, .l_wrap, .footer_wrap');
    var cont1 = $('.e_wrap');
    var cont2 = $('.l_wrap');
    var footer = $('.footer_wrap');
    
    var allPattern = $('#sub3_bgWrap .pattern1, #sub3_bgWrap .pattern2, #sub3_bgWrap .pattern3, #sub3_bgWrap .pattern4');
    var pattern1 = $('#sub3_bgWrap .pattern1');
    var pattern2 = $('#sub3_bgWrap .pattern2');
    var pattern3 = $('#sub3_bgWrap .pattern3');
    var pattern4 = $('#sub3_bgWrap .pattern4');
    
    $(window).scroll(function(){
        var wScroll = $(this).scrollTop();
        
        if(wScroll >= $('.logo_box').offset().top + $('.logo_box').outerHeight(true)-50){
           $('#headerNav > .color_bar').addClass('show');
        }else {$('#headerNav > .color_bar').removeClass('show');}
        
        if(wScroll >= cont1.offset().top - 700){
            cont1.removeClass('show').addClass('show');
        }else{contWrap.removeClass('show');}
        
        if(wScroll >= cont2.offset().top - 700){
            cont2.removeClass('show').addClass('show');
        }
        if(wScroll >= footer.offset().top - 1000){
            footer.removeClass('show').addClass('show');
        }
        
        /* pattern animation*/
        if(wScroll >= pattern1.offset().top - 100){
            pattern1.addClass('show');
        }else{allPattern.removeClass('show');}
        
        if(wScroll >= pattern2.offset().top - 700){
            pattern2.addClass('show');
        }
        if(wScroll >= pattern3.offset().top - 700){
            pattern3.addClass('show');
        }
        if(wScroll >= pattern4.offset().top - 900){
            pattern4.addClass('show');
        }
        
        
        
    });
    
    
    
    
    
    
});