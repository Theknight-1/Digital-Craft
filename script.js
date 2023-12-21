function init() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });


    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}

init()


var crsr = document.querySelector(".cursor")
var main = document.querySelector("#main")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x + 5+"px"
    crsr.style.top = dets.y + 5+"px"
})

var tl = gsap.timeline({
    scrollTrigger:{
        trigger: ".page1 h1",
        scroller : "#main",
        start : "top 30%",
        end:'top 0',
        scrub : 3
    }
})
tl.to(".page1 h1",{
    x:-100,
},"anim")
tl.to(".page1 h2",{
    x:100
},"anim")

tl.to(".page1 video",{
    width:"90%"
},"anim")

var tl1 = gsap.timeline({
    scrollTrigger:{
        trigger: ".page1 h1",
        scroller : "#main",
        start : "top -120%",
        end:'top -130%',
        scrub : 3
    }
})
tl1.to('#main',{
    backgroundColor:"#fff"
})
var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger: ".page1 h1",
        scroller : "#main",
        start : "top -280%",
        end:'top -300%',
        scrub : 3
    }
})
tl2.to("#main",{
    backgroundColor:"#0F0D0D"
})



var boxes = document.querySelectorAll(".box")
boxes.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        var att = elem.getAttribute("data-image")
        crsr.style.width = "300px"
        crsr.style.height = "200px"
        crsr.style.borderRadius = "0"
        crsr.style.backgroundSize = "cover";
        crsr.style.backgroundImage = `url(${att})`
    })
    elem.addEventListener("mouseleave",function(){
        elem.style.backgroundColor = "transparent"
        crsr.style.width = "20px"
        crsr.style.height = "20px"
        crsr.style.borderRadius = "50%"
        crsr.style.backgroundImage = `none`
    })
})

