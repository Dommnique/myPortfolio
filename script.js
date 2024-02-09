const tabLinks = document.getElementsByClassName('tab-links');
const tabContents = document.getElementsByClassName('tab-contents');
const sidemenu = document.getElementById('sidemenu');
const seeMore = document.getElementById('mySeeMore');
const btn = document.getElementById('btn');

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

function seeMoreWork(){
    seeMore.classList.toggle('hideMore');

    if(seeMore.classList.contains('hideMore')){
        btn.innerHTML= "See more";

    }else{
        btn.innerHTML = "See less"
    }
}