const tabLinks = document.getElementsByClassName('tab-links');
const tabContents = document.getElementsByClassName('tab-contents');
const sidemenu = document.getElementById('sidemenu');

function openTab(tabname) {
    for (x of tabLinks) {
        x.classList.remove('active-link')
    }
    for (x of tabContents) {
        x.classList.remove('active-tab')
    }

    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab');
}

function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}