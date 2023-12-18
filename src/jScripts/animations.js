//competition animation
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.stageAnimation').forEach((element, index) => {
    const direction = index % 2 === 0 ? 1 : -1; // Alternate direction for each element

    gsap.from(element, {
        x: 100 * direction, // Initial x position (off-screen)
        opacity: 0, // Initial opacity
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

//scroll animation
const info = document.querySelector('#headerInfo');
const cityLogo = document.querySelector('.cityLogo');
const districtLogo = document.querySelector('.districtLogo');
const countyLogo = document.querySelector('.countyLogo');
window.addEventListener('scroll', () => {
    let scrollPos = window.scrollY;
    if (scrollPos > 600) {
        info.style.display = "none"
    } else {
        info.style.paddingTop = scrollPos*2.5+"px";
        cityLogo.style.right = scrollPos*1.5+"px";
        districtLogo.style.top = scrollPos*2+"px";
        countyLogo.style.left = scrollPos*1.5+"px";
        info.style.display = "block"
    }
})