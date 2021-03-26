$(document).ready(function(){
    /* nav_btn animation $ navOn */
    $('.nav_btn').click(function(){
        $('.navOn').fadeToggle();
        $(this).toggleClass('active');
    });
    
    /* seachOn */
    $('.search_btn').click(function(){
        $('.searchOn').fadeToggle();
        $('.search_open').toggle();
        $('.search_close').toggle();
    });
    
});