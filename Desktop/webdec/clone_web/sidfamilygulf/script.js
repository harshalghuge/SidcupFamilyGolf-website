var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  blur.style.left = dets.x - 150 + "px";
  blur.style.top = dets.y - 150 + "px";
});



gsap.to("#nav", {
    backgroundColor: "rgba(0, 0, 0, 0.800)",
    duration: 0.5,
    height: "110px",
    scrollTrigger: {
      trigger: "#nav",
      scroller: "body",
      start: "top -10%",
      end: "top -9%",
      scrub: 1,
    },
});

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger :{
        trigger :"#main",
        scroller : "body",
        marker :true,
        start : "top -50%",
        end :"top -100%",
        scrub : 1,
    }    
})