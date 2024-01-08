class ToggleTheme {
    constructor( toggleBtn, storedTheme) {
        this.toggleBtn = toggleBtn;
        this.storedTheme = storedTheme;
        
        if (storedTheme)
            document.documentElement.setAttribute('data-theme', storedTheme);

        this.toggleBtn.addEventListener('click', () => {
            this.toggleTheme();
        })
    }

    toggleTheme() {
        var currentTheme = document.documentElement.getAttribute("data-theme");
        var targetTheme = "light";
    
        if (currentTheme === "light") {
            targetTheme = "dark";
        }
    
        document.documentElement.setAttribute('data-theme', targetTheme)
        localStorage.setItem('theme', targetTheme);
    }
    
}

export default ToggleTheme;
