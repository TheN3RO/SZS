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

        window.addEventListener('resize', () => {
            if (this.bar.clientWidth < this.bar.scrollWidth) {
                this.next.style.visibility = "visible";
            } else {
                this.next.style.visibility = "hidden";
            }
        });
    }

    handleImgs() {
        this.imgs.forEach((img, i) => {
            img.src = this.editableImgs[i].src;
            img.id = this.editableImgs[i].id;
        });
    }

    goBack() {

    }
    
    goNext() {
        
    }
}

const slider = new ImageSlider(bar, back, next, imgs);
slider.handleImgs();