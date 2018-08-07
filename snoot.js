/*
    File: snoot.js
    Form validation code for snoot.html

    Author: Cynthia Sepulveda
    Date: 8.6.2018
 */

"use strict";

// a function to remove select width default 
function removeSelectDefaults() { 
    var emptyBoxes = document.getElementsByTagName("select");
    alert("select lists: " + emptyBoxes.length);
}

     //load event handlers 
if (window.addEventListener) {
window.addEventListener("load", removeSelectDefaults, false);
} else if (window.attachEvent) {
    window.attatchEvent("onload", removeSelectDefaults, false);
}

