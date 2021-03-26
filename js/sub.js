$(document).ready(function(){
   
    //parallex
    var contWrap = $('.s_news, .s_product, .m_visual_img, .m_visual_video, .m_news, .m_community, .footer_wrap');
    var cont1 = $('.s_news');
    var cont2 = $('.s_product');
    var cont3 = $('.m_visual_img');
    var cont3_2 = $('.m_visual_video');
    var cont4 = $('.m_news');
    var cont5 = $('.m_community');
    var footer = $('.footer_wrap');
    
    var pattern1 = $('#sub1_bgWrap .pattern1');
    var pattern2 = $('#sub1_bgWrap .pattern2');
    var pattern3 = $('#sub1_bgWrap .pattern3');
    var pattern4 = $('#sub1_bgWrap .pattern4');
    var pattern5 = $('#sub1_bgWrap .pattern5');
    var pattern6 = $('#sub1_bgWrap .pattern6');
    var pattern7 = $('#sub1_bgWrap .pattern7');
    
    
    $(window).scroll(function(){
        var wScroll = $(this).scrollTop();
        
        if(wScroll >= $('.s_main_visual').offset().top + $('.s_main_visual').outerHeight(true)-300){
           $('#headerNav > .color_bar').addClass('show');
       }else {$('#headerNav > .color_bar').removeClass('show');}
        
        if(wScroll >= cont1.offset().top - 650){
            cont1.removeClass('show').addClass('show');
        }else {contWrap.removeClass('show');}
        
        if(wScroll >= cont2.offset().top -500){
            cont2.removeClass('show').addClass('show');
        }
        
        if(wScroll >= cont3.offset().top -500){
            cont3.removeClass('show').addClass('show');
        }
        
         if(wScroll >= cont3_2.offset().top -500){
            cont3_2.removeClass('show').addClass('show');
        }
        
        if(wScroll >= cont4.offset().top -500){
            cont4.removeClass('show').addClass('show');
        }
        
        if(wScroll >= cont5.offset().top -500){
            cont5.removeClass('show').addClass('show');
        }
        
        if(wScroll >= footer.offset().top -1000){
            footer.removeClass('show').addClass('show');
        }
        
        /* bg_ pattern */
        if(wScroll >= pattern1.offset().top -700){
            pattern1.removeClass('show').addClass('show');
        }
        if(wScroll >= pattern2.offset().top -700){
            pattern2.removeClass('show').addClass('show');
        }
        if(wScroll >= pattern3.offset().top -700){
            pattern3.removeClass('show').addClass('show');
        }
        if(wScroll >= pattern4.offset().top -700){
            pattern4.removeClass('show').addClass('show');
        }
        if(wScroll >= pattern5.offset().top -700){
            pattern5.removeClass('show').addClass('show');
        }
        if(wScroll >= pattern6.offset().top -700){
            pattern6.removeClass('show').addClass('show');
        }
        if(wScroll >= pattern7.offset().top -700){
            pattern7.removeClass('show').addClass('show');
        }
        if(wScroll >= pattern8.offset().top -700){
            pattern8.removeClass('show').addClass('show');
        }
        
    });
    
    //news slider
    $(".s_slider, .m_slider").slick({
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1279,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
      });


});
















