const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 100;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);

function show() {
    var reveal = document.querySelectorAll(".show");
  
    for (var i = 0; i < reveal.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveal[i].getBoundingClientRect().top;
      var elementVisible = 200;
  
      if (elementTop < windowHeight - elementVisible) {
        reveal[i].classList.add("active");
      } else {
        reveal[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", show);

  function speed() {
    var revealer = document.querySelectorAll(".speed");
  
    for (var i = 0; i < revealer.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = revealer[i].getBoundingClientRect().top;
      var elementVisible = 200;
  
      if (elementTop < windowHeight - elementVisible) {
        revealer[i].classList.add("active");
      } else {
        revealer[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", speed);


  function getSplash() {
    $(".hideAll").hide();
    $(".splash-page").show();
}

function getProject() {
  $(".hideAll").hide();
  $(".project-page").show();
}

$(window).on("load", function () {

  /* BINDING */
  $(".logo").click(
      function () {
          location.href = `#/splash-page/`;
      }
  );

  $(".portfolio__item").click(
      function () {
          location.href = `#/portfolio-item`;
      }
  );

  /* ROUTING */

  var app = $.sammy(function () {

      this.get('#/splash-page/', function () {
          getSplash();
      });

      this.get('#/project-page', function () {
          getProject();
      });

     
  });

  // default when page first loads
  $(function () {
      app.run('#/splash-page');
  });


});