$(".home").hide();

$(document).ready(function() {



  $(".burgerNav").click(function() {
    $("nav").toggleClass("open");
  });

  // smooth scrolling
  $(".sidebar a[href^='#']").click(function(e) {
    e.preventDefault();
    var target = $(this).attr("href");
    var headerOffset = $(".stickyHeader").css("display") === "none" ? 0 : -50;
    $("body, html").animate(
      { scrollTop: $(target).offset().top + headerOffset },
      500
    );

    //close menu and uncheck burger icon on link click
    closeMenu();
  });

  $(".logo a, .stickyLogo span").click(function(e) {
    e.preventDefault();
    $("body, html").animate({ scrollTop: 0 }, 500);
  });

  //close menu and uncheck burger icon
  function closeMenu() {
    $("nav").removeClass("open");
    $(".burgerNav input").prop("checked", false);
  }

  //close menu on click outside of menu and burger icon
  $(".grid-container").click(function() {
    closeMenu();
  });

  $(".menu").click(function(event) {
    event.stopPropagation();
  });

  $(".burgerNav").click(function(event) {
    event.stopPropagation();
  });

  //active class based on current scroll position
  $(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();
    var scrollBottom = scrollDistance + $(window).height();
    var documentHeight = $(document).height();
    //close menu and uncheck burger icon
    closeMenu();
    // assign class 'activeMenu' depending on scroll position
    if (scrollDistance < $("#about").offset().top - $(window).height() / 3) {
      $(".menu a.activeMenu").removeClass("activeMenu");
    } else if (
      $("#about").offset().top < scrollDistance + $(window).height() / 3 &&
      scrollDistance < $("#projects").offset().top - $(window).height() / 3
    ) {
      $(".menu a.activeMenu").removeClass("activeMenu");
      $("a[href='#about']").addClass("activeMenu");
    } else if (
      $("#projects").offset().top < scrollDistance + $(window).height() / 3 &&
      scrollDistance < $("#certificates").offset().top - $(window).height() / 3
    ) {
      $(".menu a.activeMenu").removeClass("activeMenu");
      $("a[href='#projects']").addClass("activeMenu");
    } else if (
      $("#certificates").offset().top <
        scrollDistance + $(window).height() / 3 &&
      scrollDistance < $("#skills").offset().top - $(window).height() / 3
    ) {
      $(".menu a.activeMenu").removeClass("activeMenu");
      $("a[href='#certificates']").addClass("activeMenu");
    } else if (
      $("#skills").offset().top < scrollDistance + $(window).height() / 3 &&
      scrollBottom < documentHeight - 10
    ) {
      $(".menu a.activeMenu").removeClass("activeMenu");
      $("a[href='#skills']").addClass("activeMenu");
    } else if (scrollBottom >= documentHeight - 10) {
      $(".menu a.activeMenu").removeClass("activeMenu");
      $("a[href='#contacts']").addClass("activeMenu");
    }
  });

  //popup image src
  $(".certificatesColumn a").click(function() {
    var saved = $(this)
      .children()
      .attr("src");
    $(".certificate-modal-box img").prop("src", saved);
  });

  //close modal on background click
  $(".certificate-modal").click(function() {
    window.location.href = window.location.href.replace(
      "#certificate-modal",
      "#certificates"
    );
  });

  //about icons animation
  // http://jackonthe.net/css3animateit/examples/
  // https://mattboldt.com/demos/typed-js/
});

$(window).on("load", function() {
  $(".spinner").hide();
  $(".home").show();

  //typing effect
  var typed1 = new Typed(".typingContainer", {
    strings: ["", "Hello!", "My name is Daniel", "I'm a Front-End Developer"],
    typeSpeed: 100,
    startDelay: 100,
    loop: true,
    backSpeed: 50,
    backDelay: 1500,
    contentType: "text"
  });
});