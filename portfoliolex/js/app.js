$(document).foundation();

/* list of our functions here */
function getSplash() {
    $(".hideAll").hide();
    $(".splash-page").show();
}

function getDepartment(id) {
    alert("getDepartment" + id);
    $(".hideAll").hide();
    $(".main-page").show();
}

function getCart() {
    alert("getCart");
    $(".hideAll").hide();
    $(".cart-page").show();
}

/* Start main code for event handling */

$(window).on("load", function () {

    /* BINDING */
    $(".logo").click(
        function () {
            location.href = `#/splash/`;
        }
    );

    $(".department-link").click(
        function () {
            location.href = `#/department/12`;
        }
    );

    $(".search-link").click(
        function () {
            location.href = `#/department/21`;
        }
    );

    $(".cart-link").click(
        function () {
            location.href = `#/cart/`;
        }
    );

    $(".checkout-link").click(
        function () {
            location.href = `#/checkout/`;
        }
    );


    /* ROUTING */

    var app = $.sammy(function () {

        this.get('#/splash/', function () {
            getSplash();
        });

        this.get('#/department/:department', function () {
            let id = this.params["department"];
            getDepartment(id);
        });

        this.get('#/search/:search', function () {
            let id = this.params["search"];
            getSearch(id);
        });

        this.get('#/cart/', function () {
            getCart();
        });

        this.get('#/createaccount/', function () {
            getPerson();
        });

        this.get('#/login/', function () {
            getPerson();
        });

        this.get('#/checkout/', function () {
            getPerson();
        });

        this.get('#/payment/', function () {
            getPerson();
        });

        this.get('#/confirm/', function () {
            getPerson();
        });

        this.get('#/ordercomplete/', function () {
            getPerson();
        });

    });

    // default when page first loads
    $(function () {
        app.run('#/splash/');
    });


});