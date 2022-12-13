// collect all the divs
let divs = document.getElementsByTagName('span');
// get window width and height
let winWidth = window.innerWidth;
let winHeight = window.innerHeight;

// i stands for "index". you could also call this banana or haircut. it's a variable
for ( let i=0; i < divs.length; i++ ) {

    // shortcut! the current div in the list
    let thisDiv = divs[i];

    // get random numbers for each element
    let randomTop = getRandomNumber(50, winHeight-50);
    let randomLeft = getRandomNumber(100, winWidth-100);

    // update top and left position
    thisDiv.style.top = randomTop +"px";
    thisDiv.style.left = randomLeft +"px";

}

// function that returns a random number between a min and max
function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}


function allowDrop(ev){
    ev.preventDefault();
}
function drag(ev){
    ev.dataTransfer.setData("Text",ev.target.id);
}
function drop(ev){
    ev.preventDefault();
    let data=ev.dataTransfer.getData("Text");
    ev.target.parentNode.replaceChild(document.getElementById(data), ev.target);
    document.getElementById(data).className = "";

    let draggable = document.getElementsByClassName('draggable');
    if (draggable.length === 0) {
        WellDone();
    }

}




function WellDone(){
    let social = document.getElementById('social');
    social.textContent = 'Well Done!';
    social.style.color = 'lime';
    let socialNetwork = document.createElement("div")
    socialNetwork.className = "social-network"
    let aboutText = document.getElementById('about-text');
    aboutText.append(socialNetwork)
    let instagramIcon = document.createElement("div");
    let linkedinIcon = document.createElement("div");
    let behanceIcon = document.createElement("div");
    socialNetwork.append(instagramIcon);
    socialNetwork.append(linkedinIcon);
    socialNetwork.append(behanceIcon);
    linkedinIcon.outerHTML += '<a href="https://www.linkedin.com/in/carlosjalves21/" target="_blank"><svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="60px" height="60px"><path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M9,17H6.5v-7H9V17z M7.7,8.7c-0.8,0-1.3-0.5-1.3-1.2s0.5-1.2,1.4-1.2c0.8,0,1.3,0.5,1.3,1.2S8.6,8.7,7.7,8.7z M18,17h-2.4v-3.8c0-1.1-0.7-1.3-0.9-1.3\ts-1.1,0.2-1.1,1.3c0,0.2,0,3.8,0,3.8h-2.5v-7h2.5v1c0.3-0.6,1-1,2.2-1s2.2,1,2.2,3.2V17z"/></svg></a>';
    behanceIcon.outerHTML += '<a href="https://www.behance.net/carlosjalves" target="_blank"><svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="60px" height="60px"><path d="M 5 3 C 3.898438 3 3 3.898438 3 5 L 3 19 C 3 20.101563 3.898438 21 5 21 L 19 21 C 20.101563 21 21 20.101563 21 19 L 21 5 C 21 3.898438 20.101563 3 19 3 Z M 6.40625 7.6875 L 9 7.6875 C 11.300781 7.6875 11.6875 9.101563 11.6875 10 C 11.6875 11.300781 10.792969 11.710938 10.59375 11.8125 C 10.792969 11.914063 11.8125 12.1875 11.8125 13.6875 C 11.914063 15.488281 10.789063 16.1875 9.1875 16.1875 L 6.40625 16.1875 Z M 13.40625 7.6875 L 17.09375 7.6875 L 17.09375 8.6875 L 13.40625 8.6875 Z M 8.09375 9.09375 L 8.09375 11.1875 L 9 11.1875 C 9.601563 11.1875 10 10.988281 10 10.1875 C 10 9.488281 9.699219 9.09375 9 9.09375 Z M 15.59375 9.8125 C 16.992188 9.8125 18 10.605469 18 12.90625 L 18 13.59375 L 14.59375 13.59375 C 14.59375 13.894531 14.613281 15 15.8125 15 C 16.613281 15 16.988281 14.605469 17.1875 14.40625 L 17.90625 15.40625 C 17.804688 15.507813 17.113281 16.3125 15.8125 16.3125 C 14.3125 16.3125 13.09375 15.507813 13.09375 13.40625 L 13.09375 12.90625 C 13.09375 10.605469 14.292969 9.8125 15.59375 9.8125 Z M 15.40625 11.09375 C 15.105469 11.09375 14.5 11.207031 14.5 12.40625 L 16.1875 12.40625 C 16.1875 12.40625 16.40625 11.09375 15.40625 11.09375 Z M 8.09375 12.5 L 8.09375 14.8125 L 9.1875 14.8125 C 9.789063 14.8125 10.09375 14.386719 10.09375 13.6875 C 10.195313 12.886719 9.914063 12.5 9.3125 12.5 Z"/></svg>';
    instagramIcon.outerHTML += '<a href="https://www.instagram.com/carlosj_alves/" target="_blank"><svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" width="60px" height="60px"><path d="M 21.580078 7 C 13.541078 7 7 13.544938 7 21.585938 L 7 42.417969 C 7 50.457969 13.544938 57 21.585938 57 L 42.417969 57 C 50.457969 57 57 50.455062 57 42.414062 L 57 21.580078 C 57 13.541078 50.455062 7 42.414062 7 L 21.580078 7 z M 47 15 C 48.104 15 49 15.896 49 17 C 49 18.104 48.104 19 47 19 C 45.896 19 45 18.104 45 17 C 45 15.896 45.896 15 47 15 z M 32 19 C 39.17 19 45 24.83 45 32 C 45 39.17 39.169 45 32 45 C 24.83 45 19 39.169 19 32 C 19 24.831 24.83 19 32 19 z M 32 23 C 27.029 23 23 27.029 23 32 C 23 36.971 27.029 41 32 41 C 36.971 41 41 36.971 41 32 C 41 27.029 36.971 23 32 23 z"/></svg>';

}

