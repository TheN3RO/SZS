import NavTree from '../src/jScripts/categoryTreeView.js';
import ToggleTheme from '../src/jScripts/toggleTheme.js';

//manu initialization
const navigation = document.querySelector('nav');
const ulTogglers = document.querySelectorAll('.caret');
const uls = document.querySelectorAll('.nested');
const navTrigger = document.querySelector('.navCatHeader');
const navHeader = document.querySelector('.navCategories');
const navContent = document.querySelector('.navCatContent');
const navIcon = document.querySelector('.catLessIcon');

const nav = new NavTree( navigation, uls, ulTogglers, navTrigger, navContent, navHeader, navIcon);
nav.openNested();
nav.openNav();
nav.monitorPassage();

//toggle theme handler initialization
var toggleBtn = document.getElementById("toggle");
var storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

const toggle = new ToggleTheme(toggleBtn, storedTheme);
