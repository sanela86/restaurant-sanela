$(document).ready(function(){
    
    $('.navbar-nav li').click(function(){
        $('.navbar-nav li').removeClass('active');
        $(this).addClass('active');
    });
    
    $('.bottom-header .search button').click(function(){
        //alert('bla-bla');
        $('.bottom-header .search input').slideToggle();
    });
    
});


