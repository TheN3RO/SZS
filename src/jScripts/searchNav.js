const menuContainer = document.querySelector('#filterMenu');
const filtersContainer = document.querySelector('#filters');
const menuTrigger = document.querySelector('.menuTrigger');
const filterPopup = document.querySelector('#filtersPopup');

class SearchMenu {
    constructor(menu, filters, trigger, popup) {
        this.menuContainer = menu;
        this.filtersContainer = filters;
        this.menuTrigger = trigger;
        this.filterPopup = popup;

        window.addEventListener('resize', () => {
            this.menuFiltersHandler();
        });
    }

    menuFiltersHandler() {
        if (window.innerWidth < 1100) {
            TweenLite.to(this.filtersContainer, 0.3, {scale: 0, onComplete: () => {
                this.filtersContainer.style.display = "none";
                this.menuContainer.style.display = "flex";
            }});
        } else {
            if (this.filtersContainer.style.display == "none") {
                TweenLite.to(this.filtersContainer, 0.3, {scale: 1, onComplete: () => {
                    this.filtersContainer.style.display = "block";
                    this.menuContainer.style.display = "none";
                }});
            }
        }
    }

    openMenu() {
        this.menuFiltersHandler();
        this.menuTrigger.addEventListener("click", () => {
            if (!this.menuTrigger.classList.contains("closed")) {
                TweenLite.to(this.filterPopup, 0.3, {scale: 0, display: "none"});
                this.menuTrigger.classList.add('closed');
                this.menuTrigger.classList.remove("opened");
            } else {
                TweenLite.fromTo(this.filterPopup, 0.3, {scale: 0, display: "none"}, {scale: 1, display: "flex"});
                this.menuTrigger.classList.remove("closed");
                this.menuTrigger.classList.add('opened');
            }
        });
    }
}

const menu = new SearchMenu(menuContainer, filtersContainer, menuTrigger, filterPopup);
menu.menuFiltersHandler();
menu.openMenu();