const carouselContainer = document.querySelector('.carouselWrapper');
const carouselControlsContainer = document.querySelector('.carouselWrapper');
const carouselControls = ['prev', 'next'];
const carouselItems = document.querySelectorAll('.carouselItem');

const lore = document.querySelector('.carouselLore');

class Carousel {
    constructor(container, items, controls) {
        this.carouselContainer = container;
        this.carouselControls = controls;
        this.carouselItems = items;
        this.carouselArray = [...items];
    }

    updateCarousel() {
        this.carouselArray.forEach(el => {
            el.classList.remove('carouselItem1');
            el.classList.remove('carouselItem2');
            el.classList.remove('carouselItem3');
            el.classList.remove('carouselItem4');
            el.classList.remove('carouselItem5');
        });

        this.carouselArray.slice(0, 5).forEach((el, i) => {
            el.classList.add(`carouselItem${i+1}`);
            if (i == 2) {
                lore.innerHTML = `Opis elementu - ${el.dataset.index}.`;
            }
        });
    }
    
    setCurrentState(direction) {
        if(direction.classList.contains('carouselControlsPrev')) {
            this.carouselArray.unshift(this.carouselArray.pop());
        } else if (direction.classList.contains('carouselControlsNext')) {
            this.carouselArray.push(this.carouselArray.shift());
        }
        this.updateCarousel();
    }

    useControls(){
        const triggersArrow = [...carouselControlsContainer.childNodes];
        triggersArrow.forEach(control => {
            control.addEventListener("click", e => {
                e.preventDefault();
                this.setCurrentState(control);
            })
        })
    }

    startSpining() {
        setTimeout(() => {
            this.setCurrentState(document.querySelector('.carouselControlsNext'))
            this.startSpining();
        }, 2000);
    }
}

const carousel = new Carousel(carouselContainer, carouselItems, carouselControls);
carousel.useControls();
carousel.startSpining();
