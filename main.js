$(document).ready(function(){

  $(".burgerNav").click(function(){
      $("nav").toggleClass("open");
  });

// smooth scrolling
  $("a[href^='#']").click(function(e){
    e.preventDefault();
    var target = $(this).attr("href");
    var headerOffset = ($(".stickyHeader").css("display") === "none")? 0:-50;
    $("html").animate({scrollTop: $(target).offset().top+headerOffset},500);
  });
//active class based on current scroll position
  $(window).scroll(function(){


    var scrollDistance = $(window).scrollTop();
    var scrollBottom = scrollDistance + $(window).height();
    var documentHeight = $(document).height();

// assign class 'activeMenu' depending on scroll position
    if(scrollDistance< $("#about").offset().top - $(window).height()/3){
      $('.menu a.activeMenu').removeClass('activeMenu');
    } else if($("#about").offset().top < scrollDistance+ $(window).height()/3 && scrollDistance <$("#projects").offset().top - $(window).height()/3){
      $('.menu a.activeMenu').removeClass('activeMenu');
      $("a[href='#about'").addClass('activeMenu');
      console.log("active");
    } else if($("#projects").offset().top < scrollDistance+ $(window).height()/3 && scrollDistance <$("#certificates").offset().top - $(window).height()/3){
      $('.menu a.activeMenu').removeClass('activeMenu');
      $("a[href='#projects'").addClass('activeMenu');
    } else if($("#certificates").offset().top < scrollDistance+ $(window).height()/3 && scrollDistance <$("#skills").offset().top - $(window).height()/3){
      $('.menu a.activeMenu').removeClass('activeMenu');
      $("a[href='#certificates'").addClass('activeMenu');
    } else if($("#skills").offset().top < scrollDistance+ $(window).height()/3 && scrollBottom < documentHeight-10){
      $('.menu a.activeMenu').removeClass('activeMenu');
      $("a[href='#skills'").addClass('activeMenu');
    }else if(scrollBottom >= documentHeight-10){
      $('.menu a.activeMenu').removeClass('activeMenu');
      $("a[href='#contacts'").addClass('activeMenu');

  }
});

});
