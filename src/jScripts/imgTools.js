import ModalViewImg from './modals/modalImg.js';

const images = document.querySelectorAll('.image');

class ImgViewer {
    constructor(imgs) {
        this.images = imgs;

        this.modal = new ModalViewImg("Galeria",
            "fullView",
            "fullScreenModal",
            "SOM SP - kom. org. - piłka siatkowa (czwórki) dziewcząt i chłopców - rocz. młodszy", 
            "1 Styczeń, 2024 o 12:45",
            Array.from(this.images).map(img => img.querySelector('img'))
        );
    }
    
    handleImg() {
        this.images.forEach((img, i) => {
            const imgShowBtn = img.querySelector('.showImg');
            const imgDownloadBtn = img.querySelector('.downloadImg');

            imgShowBtn.addEventListener('click', () => {
                this.showImg(i);
            });
            imgDownloadBtn.addEventListener('click', () => {
                this.downloadImg(i);
            });
        });
    }

    showImg(index) {
        this.modal.images = Array.from(this.images).map(img => img.querySelector('img'));
        this.modal.goTo(index);
        this.modal.showModal();
        this.useControls(this.modal.nextControl, this.modal.prevControl);
    }

    downloadImg(image, index) {

    }

    useControls(nextCon, prevCon) {
        if (!(nextCon && prevCon)) return;
        nextCon.addEventListener('click', () => {
            this.modal.goNext();
        });
        prevCon.addEventListener('click', () => {
            this.modal.goPrev();
        });
    }
}

const viewer = new ImgViewer(images);
viewer.handleImg();