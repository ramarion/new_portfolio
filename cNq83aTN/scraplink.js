$(".homePage").hide();
$("header").hide();
$("footer").hide();

$(".splash").show();

gsap.from(".splash", {
    duration: 0.5,
    opacity: 0,
    delay: 0.25,
    ease: "back.out"
});

$(window).on("load", function(){
    gsap.to(".splash", {
        delay: 1,
        duration: 1,
        opacity: 0,
        onComplete: loadMain
    });
});

function loadMain() {
    $(".homePage").show();
    $("header").show();
    $("footer").show();

    $(".splash").hide();

    gsap.to(".homePage", {
        duration: 0.5,
        opacity: 1
    });

    gsap.from("header", {
        duration: 0.5,
        opacity: 0
    });

    gsap.from("footer", {
        duration: 0.5,
        opacity: 0
    });

    gsap.from("header", {
        delay: 0.2,
        duration: 1,
        y: -$("header").outerHeight()
    });

    gsap.to("#firstName", {
        opacity: 1,
        duration: 3
    });

    gsap.to("#lastName", {
        delay: 1,
        opacity: 1,
        duration: 3.5
    });

    gsap.to("#summaryText", {
        delay: 2,
        opacity: 1,
        duration: 4.5
    });

    gsap.to("#scrollText", {
        delay: 3,
        opacity: 1,
        duration: 5
    });
}


const headerOffset = $("header").innerHeight() + 10;

$("header a[href^='#']").click(function (e) {
    e.preventDefault();
    // Grabs the top of the section in the index.html
    let idPosNav = $($(this).attr("href")).offset().top - headerOffset;

    // Animates the screen to that position.
    $("body, html").animate({
        scrollTop: idPosNav
    }, 1000, "easeOutQuad");

});

$(window).scroll(function(){
    // Grabs 
    let contentTopPos = $(window).scrollTop() + headerOffset + 10;
    $("section").each(function(){
        let secTopPos = $(this).offset().top;
        let secBotPos = secTopPos + $(this).innerHeight();
        let secID = $(this).attr("id");
        if (contentTopPos >= secTopPos && contentTopPos <= secBotPos){
            $("header a[href='#" + secID +"']").addClass("active");
        }else{
            $("header a[href='#" + secID +"']").removeClass("active");
        }

        if (screen.width > 768) {
            if (contentTopPos >= 1000) {
                $("header").removeClass("hideHeader");
                $("header").addClass("showHeader");
                $("header h1").removeClass("hideText");
                $("header h1").addClass("showText");
            } else {
                $("header").addClass("hideHeader");
                $("header").removeClass("showHeader");
                $("header h1").addClass("hideText");
                $("header h1").removeClass("showText");
            }
        }
        if (screen.width > 375) {
            if (contentTopPos >= 400) {
                $("header").removeClass("hideHeader");
                $("header").addClass("showHeader");
                $("header h1").removeClass("hideText");
                $("header h1").addClass("showText");
            } else {
                $("header").addClass("hideHeader");
                $("header").removeClass("showHeader");
                $("header h1").addClass("hideText");
                $("header h1").removeClass("showText");
            }
        }
        else {
            if (contentTopPos >= 300) {
                $("header").removeClass("hideHeader");
                $("header").addClass("showHeader");
                $("header h1").removeClass("hideText");
                $("header h1").addClass("showText");
            } else {
                $("header").addClass("hideHeader");
                $("header").removeClass("showHeader");
                $("header h1").addClass("hideText");
                $("header h1").removeClass("showText");
            }
        }
    });
});

$("#websiteOne").click(function(){
    gsap.to(".homePage", {
        duration: 1,
        opacity: 0,
        onComplete: loadCaseStudy,
        onCompleteParams: [".caseStudyOne"]
    });
    gsap.to(".caseStudyOne", {
        duration: 1,
        delay: 1,
        opacity: 1
    });
});

$("#websiteTwo").click(function(){
    gsap.to(".homePage", {
        duration: 1,
        opacity: 0,
        onComplete: loadCaseStudy,
        onCompleteParams: [".caseStudyTwo"]
    });
    gsap.to(".caseStudyTwo", {
        duration: 1,
        delay: 1,
        opacity: 1
    });
});

$("#websiteThree").click(function(){
    gsap.to(".homePage", {
        duration: 1,
        opacity: 0,
        onComplete: loadCaseStudy,
        onCompleteParams: [".caseStudyThree"]
    });
    gsap.to(".caseStudyThree", {
        duration: 1,
        delay: 1,
        opacity: 1
    });
});

$("#websiteFour").click(function(){
    gsap.to(".homePage", {
        duration: 1,
        opacity: 0,
        onComplete: loadCaseStudy,
        onCompleteParams: [".caseStudyFour"]
    });
    gsap.to(".caseStudyFour", {
        duration: 1,
        delay: 1,
        opacity: 1
    });
});

$("#websiteFive").click(function(){
    gsap.to(".homePage", {
        duration: 1,
        opacity: 0,
        onComplete: loadCaseStudy,
        onCompleteParams: [".caseStudyFive"]
    });
    gsap.to(".caseStudyFive", {
        duration: 1,
        delay: 1,
        opacity: 1
    });
});

$("#websiteSix").click(function(){
    gsap.to(".homePage", {
        duration: 1,
        opacity: 0,
        onComplete: loadCaseStudy,
        onCompleteParams: [".caseStudySix"]
    });
    gsap.to(".caseStudySix", {
        duration: 1,
        delay: 1,
        opacity: 1
    });
});

$("#websiteSeven").click(function(){
    gsap.to(".homePage", {
        duration: 1,
        opacity: 0,
        onComplete: loadCaseStudy,
        onCompleteParams: [".caseStudySeven"]
    });
    gsap.to(".caseStudySeven", {
        duration: 1,
        delay: 1,
        opacity: 1
    });
});

$("#websiteEight").click(function(){
    gsap.to(".homePage", {
        duration: 1,
        opacity: 0,
        onComplete: loadCaseStudy,
        onCompleteParams: [".caseStudyEight"]
    });
    gsap.to(".caseStudyEight", {
        duration: 1,
        delay: 1,
        opacity: 1
    });
});

$("#websiteNine").click(function(){
    gsap.to(".homePage", {
        duration: 1,
        opacity: 0,
        onComplete: loadCaseStudy,
        onCompleteParams: [".caseStudyNine"]
    });
    gsap.to(".caseStudyNine", {
        duration: 1,
        delay: 1,
        opacity: 1
    });
});

$("#websiteTen").click(function(){
    gsap.to(".homePage", {
        duration: 1,
        opacity: 0,
        onComplete: loadCaseStudy,
        onCompleteParams: [".caseStudyTen"]
    });
    gsap.to(".caseStudyTen", {
        duration: 1,
        delay: 1,
        opacity: 1
    });
});

$("#websiteEleven").click(function(){
    gsap.to(".homePage", {
        duration: 1,
        opacity: 0,
        onComplete: loadCaseStudy,
        onCompleteParams: [".caseStudyEleven"]
    });
    gsap.to(".caseStudyEleven", {
        duration: 1,
        delay: 1,
        opacity: 1
    });
});

$("#websiteTwelve").click(function(){
    gsap.to(".homePage", {
        duration: 1,
        opacity: 0,
        onComplete: loadCaseStudy,
        onCompleteParams: [".caseStudyTwelve"]
    });
    gsap.to(".caseStudyTwelve", {
        duration: 1,
        delay: 1,
        opacity: 1
    });
});

$("#returnOne").click(function() {
    gsap.to(".caseStudyOne", {
        duration: 1,
        opacity: 0,
        onComplete: loadHomeFirst
    });
    gsap.to(".homePage", {
        duration: 1,
        delay: 1,
        opacity: 1
    });
});

$("#returnTwo").click(function() {
    gsap.to(".caseStudyTwo", {
        duration: 1,
        opacity: 0,
        onComplete: loadHomeSecond
    });
    gsap.to(".homePage", {
        duration: 1,
        delay: 1,
        opacity: 1
    });
});

$("#returnThree").click(function() {
    gsap.to(".caseStudyThree", {
        duration: 1,
        opacity: 0,
        onComplete: loadHomeThird
    });
    gsap.to(".homePage", {
        duration: 1,
        delay: 1,
        opacity: 1
    });
});

$("#returnFour").click(function() {
    gsap.to(".caseStudyFour", {
        duration: 1,
        opacity: 0,
        onComplete: loadHomeFourth
    });
    gsap.to(".homePage", {
        duration: 1,
        delay: 1,
        opacity: 1
    });
});

$("#returnFive").click(function() {
    gsap.to(".caseStudyFive", {
        duration: 1,
        opacity: 0,
        onComplete: loadHomeFifth
    });
    gsap.to(".homePage", {
        duration: 1,
        delay: 1,
        opacity: 1
    });
});

$("#returnSix").click(function() {
    gsap.to(".caseStudySix", {
        duration: 1,
        opacity: 0,
        onComplete: loadHomeSixth
    });
    gsap.to(".homePage", {
        duration: 1,
        delay: 1,
        opacity: 1
    });
});

$("#returnSeven").click(function() {
    gsap.to(".caseStudySeven", {
        duration: 1,
        opacity: 0,
        onComplete: loadHomeSeventh
    });
    gsap.to(".homePage", {
        duration: 1,
        delay: 1,
        opacity: 1
    });
});

$("#returnEight").click(function() {
    gsap.to(".caseStudyEight", {
        duration: 1,
        opacity: 0,
        onComplete: loadHomeEighth
    });
    gsap.to(".homePage", {
        duration: 1,
        delay: 1,
        opacity: 1
    });
});

$("#returnNine").click(function() {
    gsap.to(".caseStudyNine", {
        duration: 1,
        opacity: 0,
        onComplete: loadHomeNinth
    });
    gsap.to(".homePage", {
        duration: 1,
        delay: 1,
        opacity: 1
    });
});

$("#returnTen").click(function() {
    gsap.to(".caseStudyTen", {
        duration: 1,
        opacity: 0,
        onComplete: loadHomeTenth
    });
    gsap.to(".homePage", {
        duration: 1,
        delay: 1,
        opacity: 1
    });
});

$("#returnEleven").click(function() {
    gsap.to(".caseStudyEleven", {
        duration: 1,
        opacity: 0,
        onComplete: loadHomeEleventh
    });
    gsap.to(".homePage", {
        duration: 1,
        delay: 1,
        opacity: 1
    });
});

$("#returnTwelve").click(function() {
    gsap.to(".caseStudyTwelve", {
        duration: 1,
        opacity: 0,
        onComplete: loadHomeTwelfth
    });
    gsap.to(".homePage", {
        duration: 1,
        delay: 1,
        opacity: 1
    });
});

function loadHomeFirst(){
    window.scrollTo(500, 0);

    $(".caseStudyOne").hide();

    $(".homePage").show();

    $("header li").show();

    $("header").css("border-bottom", "1px solid white");

    $(".caseMenu").hide();
}

function loadHomeSecond(){
    window.scrollTo(500, 0);

    $(".caseStudyTwo").hide();

    $(".homePage").show();

    $("header li").show();

    $("header").css("border-bottom", "1px solid white");

    $(".caseMenu").hide();
}

function loadHomeThird(){
    window.scrollTo(500, 0);

    $(".caseStudyThree").hide();

    $(".homePage").show();

    $("header li").show();

    $("header").css("border-bottom", "1px solid white");

    $(".caseMenu").hide();
}

function loadHomeFourth(){
    window.scrollTo(500, 0);

    $(".caseStudyFour").hide();

    $(".homePage").show();

    $("header li").show();

    $("header").css("border-bottom", "1px solid white");

    $(".caseMenu").hide();
}

function loadHomeFifth(){
    window.scrollTo(500, 0);

    $(".caseStudyFive").hide();

    $(".homePage").show();

    $("header li").show();

    $("header").css("border-bottom", "1px solid white");

    $(".caseMenu").hide();
}

function loadHomeSixth(){
    window.scrollTo(500, 0);

    $(".caseStudySix").hide();

    $(".homePage").show();

    $("header li").show();

    $("header").css("border-bottom", "1px solid white");

    $(".caseMenu").hide();
}

function loadHomeSeventh(){
    window.scrollTo(500, 0);

    $(".caseStudySeven").hide();

    $(".homePage").show();

    $("header li").show();

    $("header").css("border-bottom", "1px solid white");

    $(".caseMenu").hide();
}

function loadHomeEighth(){
    window.scrollTo(500, 0);

    $(".caseStudyEight").hide();

    $(".homePage").show();

    $("header li").show();

    $("header").css("border-bottom", "1px solid white");

    $(".caseMenu").hide();
}

function loadHomeNinth(){
    window.scrollTo(500, 0);

    $(".caseStudyNine").hide();

    $(".homePage").show();

    $("header li").show();

    $("header").css("border-bottom", "1px solid white");

    $(".caseMenu").hide();
}

function loadHomeTenth(){
    window.scrollTo(500, 0);

    $(".caseStudyTen").hide();

    $(".homePage").show();

    $("header li").show();

    $("header").css("border-bottom", "1px solid white");

    $(".caseMenu").hide();
}

function loadHomeEleventh(){
    window.scrollTo(500, 0);

    $(".caseStudyEleven").hide();

    $(".homePage").show();

    $("header li").show();

    $("header").css("border-bottom", "1px solid white");

    $(".caseMenu").hide();
}

function loadHomeTwelfth(){
    window.scrollTo(500, 0);

    $(".caseStudyTwelve").hide();

    $(".homePage").show();

    $("header li").show();

    $("header").css("border-bottom", "1px solid white");

    $(".caseMenu").hide();
}

function loadCaseStudy(caseClass) {

    window.scrollTo(500, 0);

    $(".homePage").hide();

    $(caseClass).show();

    $("header li").hide();

    $("header").css("border-bottom", "none");

    $(".caseMenu").show();
}

(function ($) {
    'use strict';

    var form = $('.contact__form'),
        message = $('.contact__msg'),
        form_data;

    // Success function
    function done_func(response) {
        message.fadeIn().removeClass('alert-danger').addClass('alert-success');
        message.text(response);
        setTimeout(function () {
            message.fadeOut();
        }, 2000);
        form.find('input:not([type="submit"]), textarea').val('');
    }

    // fail function
    function fail_func(data) {
        message.fadeIn().removeClass('alert-success').addClass('alert-success');
        message.text(data.responseText);
        setTimeout(function () {
            message.fadeOut();
        }, 2000);
    }
    
    form.submit(function (e) {
        e.preventDefault();
        form_data = $(this).serialize();
        $.ajax({
            type: 'POST',
            url: form.attr('action'),
            data: form_data
        })
        .done(done_func)
        .fail(fail_func);
    });
    
})(jQuery);