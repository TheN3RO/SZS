const bar = document.querySelector('.imgsBar');
const back = document.querySelector('.imgBarControlBack');
const next = document.querySelector('.imgBarControlNext');
const imgs = document.querySelectorAll('.image img');

class ImageSlider {
    constructor(bar, back, next, imgs) {
        this.bar = bar;
        this.back = back;
        this.next = next;
        this.imgs = Array.from(imgs);
        this.editableImgs = [...this.imgs];

        window.addEventListener('load', this.stateOfControls());

        window.addEventListener('resize', this.stateOfControls());
    }

    smoothScrollToRight() {
        const startScrollLeft = this.bar.scrollLeft;
        const targetScrollLeft = this.bar.scrollWidth - this.bar.clientWidth;
  
        // Animation function
        function animateScroll(timestamp) {
          const progress = Math.min(1, (timestamp - startTime) / duration);
          const easedProgress = easeInOutQuad(progress);
          this.bar.scrollLeft = startScrollLeft + (targetScrollLeft - startScrollLeft) * easedProgress;
  
          if (progress < 1) {
            requestAnimationFrame(animateScroll);
          } else {
            console.log('Scroll animation has ended.');
          }
        }
  
        // Easing function (quadratic ease-in-out)
        function easeInOutQuad(t) {
          return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
        }
  
        const startTime = performance.now();
        const duration = 500; // Set the duration of the animation (in milliseconds)
  
        // Start the animation
        requestAnimationFrame(animateScroll);
      }

    stateOfControls() {
        if (this.bar.clientWidth < this.bar.scrollWidth) {
            if (this.bar.scrollLeft == 0) {
                this.next.style.visibility = "visible";
                this.back.style.visibility = "hidden";
            } else if (this.bar.scrollWidth-this.bar.scrollLeft == this.bar.offsetWidth) {
                this.back.style.visibility = "visible";
                this.next.style.visibility = "hidden";
            } else {
                this.back.style.visibility = "visible";
                this.next.style.visibility = "visible";
            }
        } else {
            this.next.style.visibility = "hidden";
            this.back.style.visibility = "hidden";
        }

    }

    handleImgs() {
        this.imgs.forEach((img, i) => {
            img.src = this.editableImgs[i].src;
            img.id = this.editableImgs[i].id;
        });
    }

    useControls() {
        this.back.addEventListener('click', () => {
            if (this.bar.scrollLeft+this.bar.clientWidth-100 < 0 ) {
                this.bar.scrollTo({
                    left: 0,
                    behavior: 'smooth'
                });
            } else {
                this.bar.scrollTo({
                    left: -100,
                    behavior: 'smooth'
                });
            }
            this.stateOfControls();
        });
        this.next.addEventListener('click', () => {
            if (this.bar.scrollLeft+this.bar.clientWidth+100 > this.bar.scrollWidth) {
                this.bar.scrollTo({
                    left: this.bar.scrollWidth,
                    behavior: 'smooth'
                });
            } else {
                this.bar.scrollTo({
                    left: 100,
                    behavior: 'smooth'
                });
            }
            
            this.stateOfControls();
        });
    }
}

const slider = new ImageSlider(bar, back, next, imgs);
slider.handleImgs();
slider.useControls();