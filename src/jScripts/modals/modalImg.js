import Modal from './modal.js';

class ModalViewImg extends Modal {
    constructor(title, type, sizeClass, desc, date, images) {
        super(title, type, sizeClass);
        this.desc = desc;
        this.date = date;
        this.images = images;

        // Add image to modal body
        var imgViewer = document.createElement('div');
        imgViewer.className = 'imgViewer';

        // Create the imgViewContent container
        var imgViewContent = document.createElement('div');
        imgViewContent.className = 'imgViewMain';
        imgViewer.appendChild(imgViewContent);

        // Create the image element inside imgViewContent
        var imgElement = document.createElement('img');
        imgElement.src = `../public/images/${this.images[0].id}.jpg`;
        imgViewContent.appendChild(imgElement);
        this.imgElement = imgElement;

        // Create the imgViewControls container
        var imgViewControls = document.createElement('div');
        imgViewControls.className = 'imgViewControls';
        imgViewContent.appendChild(imgViewControls);

        // Create the previous control
        var prevControl = document.createElement('div');
        prevControl.innerHTML = '<span class="material-symbols-outlined imgViewerControlsPrev">arrow_back_ios</span>';
        imgViewControls.appendChild(prevControl);
        this.prevControl = prevControl;

        // Create the next control
        var nextControl = document.createElement('div');
        nextControl.innerHTML = '<span class="material-symbols-outlined imgViewerControlsNext">arrow_forward_ios</span>';
        imgViewControls.appendChild(nextControl);
        this.nextControl = nextControl;

        // Create the imgsInfoWrapper container
        var imgsInfoWrapper = document.createElement('div');
        imgsInfoWrapper.className = 'imgsInfoWrapper';
        imgViewer.appendChild(imgsInfoWrapper);

        // Add event description to modal body
        var text1 = document.createElement('h3');
        text1.textContent = this.desc;
        imgsInfoWrapper.appendChild(text1);

        var text2 = document.createElement('p');
        text2.textContent = this.date;
        imgsInfoWrapper.appendChild(text2);

        var imgBar = document.createElement('div');
        imgBar.className = 'imgBar';        
        imgsInfoWrapper.appendChild(imgBar);

        var viewsStats = document.createElement('p');
        viewsStats.textContent = "Wyświetlenia: 20";
        imgBar.appendChild(viewsStats);

        var downloadImgInBar = document.createElement('a');
        downloadImgInBar.innerHTML = '<span class="material-symbols-outlined imgBarIcon downloadImg">download</span>';
        downloadImgInBar.href = "../public/images/test.jpg";
        downloadImgInBar.download = "test.jpg";
        imgBar.appendChild(downloadImgInBar);

        // Create the imgsViewWrapper container
        var imgsViewWrapper = document.createElement('div');
        imgsViewWrapper.className = 'imgsViewWrapper';
        imgsInfoWrapper.appendChild(imgsViewWrapper);

        const shiftedArr = [...this.images];
        shiftedArr.shift();
        shiftedArr.forEach(img => {
            // Create the imgViewItem container
            var imgViewItem = document.createElement('div');
            imgViewItem.className = 'imgsViewItem';
            imgsViewWrapper.appendChild(imgViewItem);
        
            // Create the "open in full" icon
            var openInFullIcon = document.createElement('span');
            openInFullIcon.className = 'material-symbols-outlined showImg';
            openInFullIcon.textContent = 'open_in_full';
            imgViewItem.appendChild(openInFullIcon);

            // Create the image inside imgViewItem
            var imgItemElement = document.createElement('img');
            imgItemElement.src = `../public/images/${img.id}.jpg`;
            imgViewItem.appendChild(imgItemElement);
        });
        this.imgsViewWrapper = imgsViewWrapper;

        // Append the imgViewer to the body
        this.modalBody.appendChild(imgViewer);

        this.imgsViewWrapper.childNodes.forEach((img, index) => {
            const imgShowBtn = img.querySelector('.showImg');
            imgShowBtn.addEventListener('click', () => {
                this.goTo(index+1);
                console.log();
            });
        })
    }

    goTo(index) {
        const imgsArr = [...this.images]
        let itemsToMove = imgsArr.slice(index);
        imgsArr.splice(index);
        imgsArr.unshift(...itemsToMove);

        this.reloadImgs(imgsArr);
    }

    goNext() {
        const imgsArr = [...this.images]
        imgsArr.push(imgsArr.shift());

        this.reloadImgs(imgsArr);
    }

    goPrev() {
        const imgsArr = [...this.images]
        imgsArr.unshift(imgsArr.pop());

        this.reloadImgs(imgsArr);
    }

    reloadImgs(newImgArr) {
        this.images = newImgArr;
        this.imgElement.src = `../public/images/${newImgArr[0].id}.jpg`;

        this.imgsViewWrapper.childNodes.forEach((aBlock, i) => {
            aBlock.querySelector('img').src = `../public/images/${newImgArr[i+1].id}.jpg`;
        })
    }
}

export default ModalViewImg;


