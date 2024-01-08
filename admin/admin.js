import ToggleTheme from '../src/jScripts/toggleTheme.js';

//toggle theme handler initialization
var toggleBtn = document.getElementById("toggle");
var storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

const toggle = new ToggleTheme(toggleBtn, storedTheme);