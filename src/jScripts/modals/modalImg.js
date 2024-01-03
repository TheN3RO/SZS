import Modal from './modal.js';

class ModalViewImg extends Modal {
    constructor(modalTitle, desc, date, images) {
        super(modalTitle);
        this.desc = desc;
        this.date = date;
        this.images = images;

        // Add image to modal body
        var imgViewer = document.createElement('div');
        imgViewer.className = 'imgViewer';

        // Create the imgViewContent container
        var imgViewContent = document.createElement('div');
        imgViewContent.className = 'imgViewContent';
        imgViewer.appendChild(imgViewContent);

        console.log(this.images[0].id);

        // Create the image element inside imgViewContent
        var imgElement = document.createElement('img');
        imgElement.src = `../public/images/${this.images[0].id}.jpg`;
        imgViewContent.appendChild(imgElement);
        this.images.shift();

        // Create the imgViewControls container
        var imgViewControls = document.createElement('div');
        imgViewControls.className = 'imgViewControls';
        imgViewContent.appendChild(imgViewControls);

        // Create the previous control
        var prevControl = document.createElement('div');
        prevControl.innerHTML = '<span class="material-symbols-outlined imgViewerControlsPrev">arrow_back_ios</span>';
        imgViewControls.appendChild(prevControl);

        // Create the next control
        var nextControl = document.createElement('div');
        nextControl.innerHTML = '<span class="material-symbols-outlined imgViewerControlsNext">arrow_forward_ios</span>';
        imgViewControls.appendChild(nextControl);

        // Create the imgsViewWrapper container
        var imgsViewWrapper = document.createElement('div');
        imgsViewWrapper.className = 'imgsViewWrapper';
        imgViewer.appendChild(imgsViewWrapper);

        this.images.forEach(img => {
            // Create the imgsViewItem container
            var imgsViewItem = document.createElement('div');
            imgsViewItem.className = 'imgsViewItem';
            imgsViewWrapper.appendChild(imgsViewItem);

            // Create the "open in full" icon
            var openInFullIcon = document.createElement('span');
            openInFullIcon.className = 'material-symbols-outlined';
            openInFullIcon.textContent = 'open_in_full';
            imgsViewItem.appendChild(openInFullIcon);

            // Create the image inside imgsViewItem
            var imgItemElement = document.createElement('img');
            imgItemElement.src = `../public/images/${img.id}.jpg`;
            imgsViewItem.appendChild(imgItemElement);
        });

        // Append the imgViewer to the body
        this.modalBody.appendChild(imgViewer);

        // Add event description to modal body
        var text1 = document.createElement('h3');
        text1.textContent = this.desc;
        this.modalBody.appendChild(text1);

        var text2 = document.createElement('p');
        text2.textContent = this.date;
        this.modalBody.appendChild(text2);
    }
}

export default ModalViewImg;


