var crsr = document.querySelector(".cursor");
var main = document.querySelector(".main");
document.addEventListener("mousemove",function(dets){
  crsr.style.left=dets.x+5+"px";
  crsr.style.top=dets.y+5+"px";


})
var vid = document.querySelector("#video1");
vid.addEventListener("mouseenter",function(){
  crsr.classList.add("crsr-change");

})
vid.addEventListener("mouseleave",function(){
  crsr.classList.remove("crsr-change");
})

function init(){
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    
    ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, 
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
    
      pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });
    
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    ScrollTrigger.refresh();
}

init();

var tl = gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",  
        start:"top 28%",
        end:"top 0",
        scrub:3

    }

})
tl.to(".page1 h1",{
    x:-100

},"anim")
tl.to(".page1 h2",{
    x:150
},"anim")
tl.to(".page1 video ",{
    width:"90%"
},"anim")

//Trigger for Second page
var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",  
        // markers:true,
        start:"top -105%",
        end:"top -120%",
        scrub:5

    }

})
tl2.to(".main",{
    backgroundColor:"#fff"
})

var tl3 = gsap.timeline({
  scrollTrigger:{
      trigger:".page1 h1",
      scroller:".main",  
      start:"top -420%",
      end:"top -490%",
      scrub:3

  }

})

tl3.to(".main",{
  backgroundColor:"#0F0D0D"
})

//Footer Animation
gsap.to("i",{
  duration:2.5,
  y:-20,
  repeat:-1,
  yoyo:true});



//Page 5 animation

var boxes=document.querySelectorAll(".box");
boxes.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
    var att = elem.getAttribute("data-image");
    crsr.style.width = "280px";
    crsr.style.height = "180px";
    crsr.style.borderRadius = "50px";
    crsr.style.backgroundImage = `url(${att})`;
  })
  elem.addEventListener("mouseleave",function(){
    crsr.style.width = "20px";
    crsr.style.height = "20px";
    crsr.style.borderRadius = "50%";
    crsr.style.backgroundImage = `none`;
    elem.style.backgroundColor="transparent"
   
  })

})

//Circle dropdown
var drpdwn = document.querySelector(".dropdown-content");
var circle = document.querySelector(".dropdown");
circle.addEventListener("click",function(){
  drpdwn.style.display="block";
})
main.addEventListener("click",function(){
  drpdwn.style.display="none";
})

var h4 = document.querySelectorAll("#nav-part2 h4");
h4.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
    elem.style.borderBottom="2px solid #fff";
    elem.style.textDecoration="bold";

  })
  elem.addEventListener("mouseleave",function(){
    elem.style.borderBottom="none";
    elem.style.textDecoration="none";
  })
})







