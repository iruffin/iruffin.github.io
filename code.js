var root = document.querySelector(':root');
    var rootstyles = getComputedStyle(root);
    root.style.setProperty('--bs-nav-pills-link-active-bg', 'red');

function $(x){
    return document.getElementById(x);
}

// Your JavaScript code goes here
document.addEventListener("DOMContentLoaded", function () {

    // This function will be executed when the DOM is fully loaded
   
    console.log("heylo");
    
});

//redirection to different page functions

function redirectToAboutPage() {
    // Change 'linked_page.html' to the actual filename or URL of your linked page
    window.location.href = 'about.html';
}

function redirectToWorkPage() {
    // Change 'linked_page.html' to the actual filename or URL of your linked page
    window.location.href = 'portfolio.html';
}

function redirectToHomePage() {
    // Change 'linked_page.html' to the actual filename or URL of your linked page
    window.location.href = 'home.html';
}


