/* jslint browser: true */
/* global $, gsap */

// hide all screens and section divs
$("main, section").hide();

// SPLASH SCREEN //////////////////////////////////////////////

// display splash screen
$("#splash").show();

// animate on the splash screen on app load
gsap.from("#splash", {
    opacity: 0,
    duration: 0.5,
    delay: 0.25
});

gsap.from("#splash img", {
    delay: 1.25,
    duration: 0.5,
    scale: 0,
    ease: "back.out"
});

gsap.from("#splash p", {
    delay: 1.25,
    duration: 0.5,
    scale: 0,
    ease: "SlowMo"
});

gsap.to("#splash", {
    delay: 4,
    duration: 0.5,
    opacity: 0,
    onComplete: loadLanding
});

// LANDING SCREEN ///////////////////////////////////////////

function loadLanding() {

    // hide and reset all screen
     $("main, section").hide().css({opacity: 1});
    
    // shows landing screen
    $("#landing").show();

    gsap.from("#landing", {
        opacity: 0,
        duration: 0.5,
        delay: 0.25
    });

    gsap.from("#landing header img", {
        delay: 0.75,
        duration: 0.5,
        x: -290,
        ease: "SlowMo.out"

    });
    
    gsap.from("#landing header p", {
        delay: 0.75,
        duration: 0.5,
        x: 290,
        ease: "SlowMo.out"

    });
    
    gsap.from("#logo1",{
        delay: 1.25,
        duration: 0.5,
        x: -320,
        ease: "SlowMo.out"
        
    });
    
    gsap.from("#logo2",{
        delay: 1.5,
        duration: 0.5,
        x: 320,
        ease: "SlowMo.out"
        
    });

    
    gsap.from("#logo3",{
        delay: 1.75,
        duration: 0.5,
        x: -320,
        ease: "SlowMo.out"
        
    });

}

// part of landing screen but not part of loadLoading function /////////////////
// set up logos to link to related restaurant
// pass rest ID and subnav highlight colour to loadRest function
// fade landing out and load selected restaurant
$("#logo1").click(function(){
    
    gsap.to("#landing", {
        duration: 0.5,
        opacity: 0,
        onComplete: loadRest,
        onCompleteParams:["#rest1","#0f6b37"]
});
    
    
});

$("#logo2").click(function(){
    
    gsap.to("#landing", {
        duration: 0.5,
        opacity: 0,
        onComplete: loadRest,
        onCompleteParams:["#rest2","#47183C"]
});
    
    
});

$("#logo3").click(function(){
    
    gsap.to("#landing", {
        duration: 0.5,
        opacity: 0,
        onComplete: loadRest,
        onCompleteParams:["#rest3","#143D44"]
});
    
    
});

// RESTAURANT SCREENS ///////////////////////////////////////////
function loadRest(restID, highlightColour) {
    
    // hide landing screen
    $("#landing").hide();

    // display selected restaurant screen
    $(restID).show();

    // animate on the restaurant
    gsap.from(restID + " header", {
        delay: 0.25,
        y: -$(restID + " header").outerHeight(),
        duration: 0.5,
        ease: "sine.out"
    });

    gsap.from(restID + " footer", {
        delay: 0.25,
        y: $(restID + " footer").outerHeight(),
        duration: 0.5,
        ease: "sine.out"
    });

    // display home section
    $(restID + " .home").show();

    // animate on home section
    gsap.from(restID + " .home", {
        delay: 0.5,
        opacity: 0,
        duration: 0.5
    });

    // loop through and reveal all elements on home screen with .reveal class applied
    $(restID + " .home .reveal").each(function(i) {

        gsap.from(this, {
            delay: 1.25 + i * 0.15,
            opacity: 0,
            y: -10,
            duration: 1,
            ease: "bounce.out" //bounce
        });

    });
    
    // create var to target icons from selected restaurant
    var iconsTarget = restID + " .homeIcon, " + restID + " .specialsIcon, " + restID + " .reservationsIcon";
    
    
    
    // remove highlight and active class from all icons
    $(iconsTarget).css({background: "none"}).removeClass("active");
    
    // highlight home icon and add active class on restaurant load
    $(restID + " .homeIcon").css({background: highlightColour}).addClass("active");
    
    // set up section nav - highlight and load section
    $(iconsTarget).click(function() {
        
        if(!$(this).hasClass("active")) {
            
            // remove highlight and active class from all icons
            $(iconsTarget).css({background: "none"}).removeClass("active");
    
            // highlight home icon and add active class on restaurant load
            $(this).css({background: highlightColour}).addClass("active");
            
            //load selected selection
            loadSection(restID + " section", restID + " " + $(this).attr("data-section"));
        }
    });

}

// REUSABLE FUNCTIONS/CLICKS /////////////////////////////////////

// function for loading internal restaurant sections
function loadSection(prevSection, nextSection) {
    
    gsap.to(prevSection, {
        opacity:0,
        duration:0.5,
        onComplete: function() {
            //hide and reset previous section
            $(prevSection).hide().css({opacity: 1});
            //displaynext section goes to top og the page
            $(nextSection).show().scrollTop(0);
        }
        
    });
    
    //transition in next section
    gsap.from(nextSection, {
        opacity: 0,
        duration: 0.5,
        delay:0.5   
    });
    
    // loop through and reveal all elements on home screen with .reveal class applied
    $(nextSection + " .reveal").each(function(i) {

        gsap.from(this, {
            delay: 1.25 + i * 0.15,
            opacity: 0,
            y: -10,
            duration: 1,
            ease: "bounce.out" //i like bounce
        });

    });
    
}

// set up reservations submit button

$(".reserve").click(function(){
    
  gsap.to(".reserver", {
       x: 0,
       duration: 0.5,
       ease: "power3.out", 
       onComplete: loadmadeReserve
          
          
   });
    
});


//hamburger menu to reveal main menu
$(".hamburger").click(function(){
                      
        if ($(this).attr("src") == "img/close2hamburger.gif") {
            
            $(this).attr("src", "img/open2hamburger.gif");
            
            $("#menu").show();
            
            gsap.to(".rest", {
                x: 300,
                duration: 0.5,
                ease: "power3.out"    
            });
            
        }  else {
            
            $(this).attr("src", "img/close2hamburger.gif");
            
            gsap.to(".rest", {
                x: 0,
                duration: 0.5,
                ease: "SlowMo.out", 
                onComplete: function() {
                    $("#menu").hide();
                }
            });
        
        }            
                      
});


//Main Menu Links

//Back to landing screen
$("#backToLanding").click(function() {
    
    $(".hamburger").attr("src", "img/close2hamburger.gif");
            
            
    gsap.to(".rest", {
       x: 0,
       duration: 0.5,
       ease: "power3.out", 
       onComplete: function() {
          
           $("#menu").hide();
           
           gsap.to(".rest", {
               opacity: 0,
               duration: 0.5,
               onComplete: loadLanding
           });
       }
   });
        
    
});

// reveal FoR about info
$("#backToAbout").click(function () {
    
  alert("Site currently under construction!");

  
});

// reveal FoR about info
$("#backToContact").click(function () {
    
  alert("Site currently under construction!");
    
});