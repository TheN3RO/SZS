const navigation = document.querySelector('nav');
const ulTogglers = document.querySelectorAll('.caret');
const uls = document.querySelectorAll('.nested');
const navTrigger = document.querySelector('.navCatHeader');
const navHeader = document.querySelector('.navCategories');
const navContent = document.querySelector('.navCatContent');
const navIcon = document.querySelector('.catLessIcon');

class navTree {
    constructor( nav, nestedUls, togglers, trigger, content, header, icon) {
        this.navigation = nav;
        this.uls = nestedUls;
        this.ulTogglers = togglers;
        this.navTrigger = trigger;
        this.navContent = content;
        this.navHeader = header;
        this.navIcon = icon;
        this.ulTriggers = [...togglers]
    }

    updateOpenedUls(target, index) {
        let ulLists = [...uls];
        ulLists.splice(index, 1);
        ulLists.forEach(ul => {
            ul.classList.remove('active');
            if (ul.parentElement.classList == "open") ul.parentElement.classList.remove('open');
        })
        target.classList.toggle('active');
        target.parentElement.classList.toggle('open');
    }

    openNested() {
        this.ulTriggers.forEach((trigger, i) => {
            trigger.addEventListener('click', () => {
                this.updateOpenedUls(this.uls[i], i);
            })
        })
    }

    openNav() {
        this.navTrigger.addEventListener('click', () => {
            const backgroundColorProp = getComputedStyle(document.documentElement).getPropertyValue('--primary');
            const borderColorProp = getComputedStyle(document.documentElement).getPropertyValue('--tertiary');
            if (!this.navTrigger.classList.contains("closed")) {
                TweenLite.to(this.navContent, 0.2, {scaleY: 0, onComplete: () => {
                    TweenLite.to(this.navHeader, 0.3, {width: "auto"});
                    this.navIcon.style.transform = "rotate(0deg)"
                    this.navTrigger.style.borderLeft = "none";
                    this.navHeader.classList.remove('changeTheme');
                }});
                this.navTrigger.classList.add('closed');
            } else {
                TweenLite.to(this.navHeader, 0.3, {width: "350px", onComplete: () => {
                    TweenLite.fromTo(this.navContent, 0.2, {scaleY: 0}, {scale: 1})
                    this.navIcon.style.transform = "rotate(180deg)"
                    this.navTrigger.style.borderLeft = `1px ${borderColorProp} solid`;
                    this.navHeader.classList.add('changeTheme');
                }});
                this.navTrigger.classList.remove("closed");
            }
        })
    }

    monitorPassage() {
        window.addEventListener('scroll', () => {
            const scrollPos = window.scrollY;
            if (scrollPos > 0) {
                this.navigation.style.boxShadow = "rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px";
            } else {
                this.navigation.style.boxShadow = "none";
            }
        })
    }
}

const nav = new navTree( navigation, uls, ulTogglers, navTrigger, navContent, navHeader, navIcon);
nav.openNested();
nav.openNav();
nav.monitorPassage();

