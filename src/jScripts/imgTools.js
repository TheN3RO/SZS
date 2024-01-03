import ModalViewImg from './modals/modalImg.js';

const images = document.querySelectorAll('.image');

class ImgViewer {
    constructor(imgs) {
        this.images = imgs;
        this.imgsData = Array.from(imgs).map(img => img.querySelector('img'))
    }
    
    handleImg() {
        this.images.forEach((img, i) => {
            const imgShowBtn = img.querySelector('.showImg');
            const imgDownloadBtn = img.querySelector('.downloadImg');

            imgShowBtn.addEventListener('click', () => {
                this.showImg(this.imgsData, i);
            });
            imgDownloadBtn.addEventListener('click', () => {
                this.downloadImg(this.imgsData, i);
            });
        });
    }

    showImg(images, index) {
        const imgsArr = [...images]
        let itemsToMove = imgsArr.slice(index);
        imgsArr.splice(index);
        imgsArr.unshift(...itemsToMove);
        this.modal = new ModalViewImg("Galeria", 
        "SOM SP - kom. org. - piłka siatkowa (czwórki) dziewcząt i chłopców - rocz. młodszy", 
        "1 Styczeń, 2024 o 12:45",
        imgsArr);

        this.modal.showModal();
    }

    downloadImg(image, index) {

    }
}

const viewer = new ImgViewer(images);
viewer.handleImg();