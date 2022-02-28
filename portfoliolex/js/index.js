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
  function getWorks() {
    
    $(".my-work").show();
}

function getProject() {
  $(".hideAll").hide();
  $(".project-page").show();
}

function getProject2() {
  $(".hideAll").hide();
  $(".project-page-2").show();
}

function getProject3() {
  $(".hideAll").hide();
  $(".project-page-3").show();
}

$(window).on("load", function () {

  /* BINDING */
  $(".logo").click(
      function () {
          location.href = `#/`;
      }
  );

  $(".work").click(
      function () {
          location.href = `#/works`;
      }
  );

  $(".portfolio__item").click(
      function () {
        $('.project-page').scrollTop(0);
          location.href = `#/project`;
      }
  );
  $(".portfolio__item2").click(
      function () {
        $('.project-page-2').scrollTop(0);
          location.href = `#/restaurant-app`;
      }
  );
  $(".portfolio__item3").click(
      function () {
        $('.project-page-3').scrollTop(0);
          location.href = `#/mad-movies`;
      }
  );

  /* ROUTING */

  var app = $.sammy(function () {

      this.get('#/', function () {
          getSplash();
      });

      this.get('#/works', function () {
          getWorks();
      });

      this.get('#/project', function () {
          getProject();
      });

      this.get('#/restaurant-app', function () {
          getProject2();
      });

      this.get('#/mad-movies', function () {
          getProject3();
      });

     
  });

  // default when page first loads
  $(function () {
      app.run('#/');
  });


});