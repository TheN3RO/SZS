class Modal {
    constructor(modalTitle) {
        this.title = modalTitle;
        var modalBox = document.createElement('div');
        modalBox.id = 'ModalBox';
        modalBox.className = 'modal';
        this.modalBox = modalBox;

        // Create modal content container
        var modalContent = document.createElement('div');
        modalContent.className = 'modalContent container-sm';
        modalBox.appendChild(modalContent);
        this.modalContent = modalContent;

        // Create modal header
        var modalHeader = document.createElement('div');
        modalHeader.className = 'modalHeader';
        modalContent.appendChild(modalHeader);
        this.modalHeader = modalHeader;

        // Create close button in modal header
        var closeBtn = document.createElement('span');
        closeBtn.className = 'close';
        closeBtn.innerHTML = '&times;';
        modalHeader.appendChild(closeBtn);
        this.closeBtn = closeBtn;

        // Create modal header title
        var modalTitle = document.createElement('h2');
        modalTitle.textContent = this.title;
        modalHeader.appendChild(modalTitle);
        this.modalTitle = modalTitle;

        // Create modal body
        var modalBody = document.createElement('div');
        modalBody.className = 'modalBody';
        modalContent.appendChild(modalBody);
        this.modalBody = modalBody;

        // Create modal footer
        var modalFooter = document.createElement('div');
        modalFooter.className = 'modalFooter';
        modalContent.appendChild(modalFooter);
        this.modalFooter = modalFooter;

        closeBtn.onclick = this.destroyModal.bind(this);

        window.onclick = function (event) {
            if (event.target == modalBox) {
                this.destroyModal();
            }
        }.bind(this);

    }

    showModal() {
        document.body.appendChild(this.modalBox);
        document.body.style.overflowY = 'hidden';
    }

    destroyModal() {
        document.body.removeChild(this.modalBox);
        document.body.style.overflowY = 'scroll';
    }
}

export default Modal;