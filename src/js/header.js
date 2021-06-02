import $ from "jquery";
import gsap from "gsap";

$(window).ready(function() {
    fixHeader();

    $(window).resize(function() {
        fixHeader();
    });

    $(".responsive-menu-icon").click(function() {
        gsap.to('.responsive-menu-container', {x: "0", duration: 0.5, ease: "expo.in"})
    })

    $(".responsive-menu-container .close-icon").click(function() {
        gsap.to('.responsive-menu-container', {x: "-100%", duration: 0.5, ease: "expo.out"})
    })
})

function fixHeader() {
    let headerHeight = $("header.main-header").innerHeight();

    $("body").css("paddingTop", headerHeight);
}
