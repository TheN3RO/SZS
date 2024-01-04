class Modal {
    constructor(title, type, sizeClass) {
        this.title = title;
        this.type = type;
        this.size = sizeClass;

        var modalBox = document.createElement('div');
        modalBox.id = 'ModalBox';
        modalBox.className = 'modal';
        this.modalBox = modalBox;

        // Create modal content container
        var modalContent = document.createElement('div');
        modalContent.className = `modalContent ${this.size} ${this.modalColor}`;
        modalBox.appendChild(modalContent);
        this.modalContent = modalContent;

        // Create modal header
        var modalHeader = document.createElement('div');
        modalHeader.className = `modalHeader ${this.modalHeaderColor}`;
        modalContent.appendChild(modalHeader);
        this.modalHeader = modalHeader;

        // Create close button in modal header
        var closeBtn = document.createElement('span');
        closeBtn.className = 'close';
        closeBtn.innerHTML = '&times;';
        modalHeader.appendChild(closeBtn);
        this.closeBtn = closeBtn;

        // Create modal header title
        var headerTitle = document.createElement('h2');
        headerTitle.textContent = this.title;
        modalHeader.appendChild(headerTitle);
        this.title = headerTitle;

        // Create modal body
        var modalBody = document.createElement('div');
        modalBody.className = 'modalBody';
        modalContent.appendChild(modalBody);
        this.modalBody = modalBody;

        if (this.type === "normal") {
            // Create modal footer
            var modalFooter = document.createElement('div');
            modalFooter.className = `modalFooter ${this.modalFooterColor}`;
            modalContent.appendChild(modalFooter);
            this.modalFooter = modalFooter;
        }

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