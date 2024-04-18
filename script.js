gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});
// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

var search = document.querySelector(".search")
var cross = document.querySelector(".header-search-input img")
search.addEventListener("click", function() {
    gsap.to(".header-search-input input" , {
        top:"13%" ,
    })
})
cross.addEventListener("click", function () {
    gsap.to(".header-search-input input", {
        top: "-50%",
    })
})

var cart = document.querySelector(".cart")
var cross2 = document.querySelector(".headercart-cross img")

cart.addEventListener("click",function() {
   gsap.to(".header-cart" , {
    right:"0%"
   })
})

cross2.addEventListener("click", function() {
    gsap.to(".header-cart", {
        right: "-40%"})
})

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page3",
        scroller: ".main",
        start: "top 0",
        end: "top -70%",
        scrub: 3,
        pin: true
    }
})
tl2.to(".page3-elem", {
    transform: "translateX(-70%)",
}, "ay")
tl2.to(".page3 .slider-i", {
    x: 600,
}, "ay")

tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page2",
        scroller: ".main",
        // markers: true,
        start: " top 5%",
        end: "top 10%",
        scrub: 2,
    }
})
tl3.from(".page2-elem-right p", {
    y: 50,
    scale: 1.15,
    opacity: 0,
    duration: 0.8
})

tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page5",
        scroller: ".main",
        // markers: true,
        start: " top 5%",
        end: "top 10%",
        scrub: 2,
    }
})
tl4.from(".page5 h1", {
    y: 50,
    scale: 1.15,
    opacity: 0,
    duration: 0.8
})