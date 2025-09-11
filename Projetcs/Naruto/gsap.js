gsap.from('header h1',{
    height:0,
    y:-500,
    rotate:45,
    duration:2,
    opacity:0
})

// Hover animation for quote card
quoteCardEl.addEventListener("mouseenter", () => {
  gsap.to(quoteCardEl, {
    scale: 1.05,
    rotateX: 5,
    rotateY: -5,
    boxShadow: "0px 15px 30px rgba(255,140,0,0.6)", // Naruto orange glow
    duration: 0.4,
    ease: "power3.out"
  });
});

quoteCardEl.addEventListener("mouseleave", () => {
  gsap.to(quoteCardEl, {
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    boxShadow: "0px 5px 15px rgba(0,0,0,0.3)",
    duration: 0.4,
    ease: "power3.inOut"
  });
});
