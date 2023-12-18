//competition animation
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.stageAnimation').forEach((element, index) => {
    const direction = index % 2 === 0 ? 1 : -1; // Alternate direction for each element

    gsap.fromTo(element, {
        x: 100 * direction, // Initial x position (off-screen)
        display: "none",
        opacity: 0, // Initial opacity
        duration: 1, // Animation duration
        scrollTrigger: {
            trigger: element,
            start: 'top bottom', // Trigger when the top of the element reaches the bottom of the viewport
            end: 'top top', // Trigger when the bottom of the element reaches the top of the viewport
            scrub: true, // Smoothly adjust animation as you scroll
        }, 
    }, {
        x: 0, // Initial x position (off-screen)
        display: "block",
        opacity: 1, // Initial opacity
        duration: 1, // Animation duration
        scrollTrigger: {
            trigger: element,
            start: 'top bottom', // Trigger when the top of the element reaches the bottom of the viewport
            end: 'top top', // Trigger when the bottom of the element reaches the top of the viewport
            scrub: true, // Smoothly adjust animation as you scroll
        }, 
    });
});

//scroll smooth
const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
