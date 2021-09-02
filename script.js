$(document).ready(function() {

    //Hovers for social media
    $("#behance").hover(function() {
        $("#behance").attr("src", "images/behanceHover.svg");
    },
    function() {
        $("#behance").attr("src", "images/behance.svg");
    });

    $("#github").hover(function() {
        $("#github").attr("src", "images/githubHover.svg");
    },
    function() {
        $("#github").attr("src", "images/github.svg");
    });

    $("#instagram").hover(function() {
        $("#instagram").attr("src", "images/instagramHover.svg");
    },
    function() {
        $("#instagram").attr("src", "images/instagram.svg");
    });

    $("#linkedin").hover(function() {
        $("#linkedin").attr("src", "images/linkedinHover.svg");
    },
    function() {
        $("#linkedin").attr("src", "images/linkedin.svg");
    });
    //End hovers for socials

});