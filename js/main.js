$(document).ready(function(){
    
        /* Parallax */
        var contWrap = $('.dream_visual, .dream_steps, .backstage_visual, .backstage_text, .miss_visual, .miss_loveChain, .footer_wrap');
        var cont1 = $('.dream_visual');
        var cont2 = $('.dream_steps');
        var cont3 = $('.backstage_visual');
        var cont4 = $('.backstage_text');
        var cont5 = $('.miss_visual');
        var cont6 = $('.miss_loveChain');
        var cont7 = $('.footer_wrap');
    
    
        var allPattern = $('.pattern svg');
        var pattern1 = $('.pattern .m_pattern1');
        var pattern2 = $('.pattern .m_pattern2');
        var pattern3 = $('.pattern .m_pattern3');
        var pattern4 = $('.pattern .m_pattern4');
        var pattern5 = $('.pattern .m_pattern5');
        var pattern6 = $('.pattern .m_pattern6');
        var pattern7 = $('.pattern .m_pattern7');
        var pattern8 = $('.pattern .m_pattern8');
        var pattern9 = $('.pattern .m_pattern9');
        var pattern10 = $('.pattern .m_pattern10');
       
    
    $(window).scroll(function(){
        var wScroll = $(this).scrollTop();
        
        /* header_colorbar */
        if(wScroll >= $('header > .visual').offset().top + $('header > .visual').outerHeight(true)){
           $('#headerNav > .color_bar').addClass('show');
        }else {$('#headerNav > .color_bar').removeClass('show');}
       
        /* contents */
        if(wScroll >= cont1.offset().top - 500){
           cont1.removeClass('show').addClass('show');
        }else{contWrap.removeClass('show');}
       
        if(wScroll >= cont2.offset().top - $(this).height()/2){
            cont2.removeClass('show').addClass('show');
        }
       
        if(wScroll >= cont3.offset().top - $(this).height()/2){
            cont3.removeClass('show').addClass('show');
        }
       
        if(wScroll >= cont4.offset().top - $(this).height()/2){
            cont4.removeClass('show').addClass('show');
        }
       
        if(wScroll >= cont5.offset().top - $(this).height()/2){
            cont5.removeClass('show').addClass('show');
        }
       
        if(wScroll >= cont6.offset().top - $(this).height()/2){
            cont6.removeClass('show').addClass('show');}
        
         if(wScroll >= cont7.offset().top - 1000){
           cont7.removeClass('show').addClass('show');
        }
        
        
        /* Pattern Parallax */
        if(wScroll >= pattern1.offset().top - 300){
            pattern1.addClass('show');
        }else {allPattern.removeClass('show');}
        
        if(wScroll >= pattern2.offset().top-500){
            pattern2.addClass('show');
        }
       if(wScroll >= pattern3.offset().top-500){
            pattern3.addClass('show');
        }
       if(wScroll >= pattern4.offset().top-500){
            pattern4.addClass('show');
        }
       if(wScroll >= pattern5.offset().top-500){
            pattern5.addClass('show');
        }
       if(wScroll >= pattern6.offset().top-500){
            pattern6.addClass('show');
        }
       if(wScroll >= pattern7.offset().top-500){
            pattern7.addClass('show');
        }
       if(wScroll >= pattern8.offset().top-500){
            pattern8.addClass('show');
        }
       if(wScroll >= pattern9.offset().top-500){
            pattern9.addClass('show');
        }
       if(wScroll >= pattern10.offset().top-500){
          pattern10.addClass('show');
        }
        
    }); 
    
    
     /* Main visual_slide */
    $('#slider').bxSlider({ 
        auto: true,  
        speed: 600, 
        autoControls: true, 
        pager:true 
    });
    
    /* MAin visual text drawing */
    var $svg = $('.visual_text > .dior,.visual_text > .cosmetics').drawsvg({
        duration: 2800
    });
    
    $svg.drawsvg('animate');
    
    
});
















