// fullscreen

const openFullScreen = document.querySelector('.openfullscreen');
const quitFullScreen = document.querySelector('.closefullscreen');

openFullScreen.addEventListener('click', fullScreen);
quitFullScreen.addEventListener('click', closeFullScreen);

function fullScreen(){
    document.documentElement.requestFullscreen();
    openFullScreen.classList.add('closefullscreen');
    openFullScreen.classList.remove('openfullscreen');
}

function closeFullScreen(){
    document.exitFullscreen()
    openFullScreen.classList.add('openfullscreen');
    openFullScreen.classList.remove('closefullscreen');
}

// end of fullscreen

// audio and active key
const piano = document.querySelector('.piano');
piano.addEventListener('mousedown', playMouse);
piano.addEventListener('mouseup', removeActive);
piano.addEventListener('mouseout', removeActive);

window.addEventListener('keydown', playSound);
window.addEventListener('keyup', removeActiveButton);


function removeActive(event) {
    event.target.classList.remove('piano-key-active');
}

function removeActiveButton(event) {
    const eventCode = event.key; 
    const letterUP = eventCode.toUpperCase();
    const button = document.querySelector(`.piano-key[data-letter='${letterUP}']`);
    button.classList.remove('piano-key-active')
}


function playMouse(event) {
    const sound = document.querySelector(`audio[data-button='Key${event.target.dataset.letter}']`);
    sound.currentTime = 0;
    sound.play();
    event.target.classList.add('piano-key-active');
}

function playSound(event){
    const sound = document.querySelector(`audio[data-button='${event.code}']`);
    const eventCode = event.key; 
    const letterUP = eventCode.toUpperCase();
    const button = document.querySelector(`.piano-key[data-letter='${letterUP}']`);
    button.classList.add('piano-key-active')
    if (sound != undefined){
    sound.currentTime = 0;
    sound.play();
    }
    
   }

// audio and active key dend

//toggles

const toggles = document.querySelector('.btn-container');
const togButtons = document.querySelectorAll('.btn');
toggles.addEventListener('click', toggleNotes);
const pianoKeys =  document.querySelectorAll('.piano-key');

function toggleNotes(event){
    const toggleBut = event.target;
    togButtons.forEach(elem => elem.classList.remove('btn-active'));
    pianoKeys.forEach(elem => elem.classList.remove('rus'));
    pianoKeys.forEach(elem => elem.classList.remove('letter'));
    pianoKeys.forEach(elem => elem.classList.remove('note'));
    pianoKeys.forEach(elem => elem.classList.remove('nonebut'));
    toggleBut.classList.add('btn-active');
    pianoKeys.forEach(elem => elem.classList.add(`${event.target.dataset.toggle}`));
}

//toggles end