var countDownDate = new Date("May 4, 2022 08:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("minute").innerHTML = days + "d " + hours + "h " +
        minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("minute").innerHTML = "EXPIRED";
    }
}, 1000);

$(document).ready(function() {

    $(".button2").hover(function() {
        $(this).css({
            "background-color": "#ffffff",
            'color': 'var(--primary-ad-color)',
            'box-shadow': '0 10px 5px 0 #ffffff',

        });
    }, function() {
        $(this).css({
            "background-color": "rgba(0, 0 , 0, 0)",
            "color": '#ffffff',
            "box-shadow": "none",
        });
    });

    $(".button1").hover(function() {
        $(this).css({
            "background-color": "var(--primary-ad-color)",
            'color': '#ffffff',
            'box-shadow': '0 10px 5px 0 #ffffff',
            'border': '2px solid #ffffff',

        });
    }, function() {
        $(this).css({
            "background-color": "var(--primary-ad-color)",
            "color": 'var(--primary-ad-color)',
            "box-shadow": "none",
            "background-color": "#ffffff",
        });
    });


    $(".fa-brands").hover(function() {
        $(this).css({
            "color": "#ffffff",
        });
    }, function() {
        $(this).css({
            "color": "black",



        });
    });

    $("a.line").hover(function() {
        $(this).css({
            "text-decoration": "underline",
        });
    }, function() {
        $(this).css({
            "text-decoration": "none",



        });
    });

    $("a.lin").hover(function() {
        $(this).css({
            "text-decoration": "underline",
        });
    }, function() {
        $(this).css({
            "text-decoration": "none",



        });
    });

    $("a.li").hover(function() {
        $(this).css({
            "text-decoration": "underline",
        });
    }, function() {
        $(this).css({
            "text-decoration": "none",



        });
    });

    $("a.l").hover(function() {
        $(this).css({
            "text-decoration": "underline",
        });
    }, function() {
        $(this).css({
            "text-decoration": "none",



        });
    });
})

let color = document.getElementById("coeur");
color.addEventListener("click", myfunction)

function myfunction() {
    if (color.innerHTML == "<i class='fa-regular fa-heart'></i>") {
        color.innerHTML = "<i class='fa-solid fa-heart'></i>"
    } else {
        color.innerHTML = "<i class='fa-regular fa-heart'></i>"
    }
};