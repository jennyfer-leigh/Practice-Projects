import {fortunes} from './fortunes.js';

const panels = document.querySelectorAll('.panel');


panels.forEach(panel =>{
    panel.addEventListener('click', () =>{
       removeActive();
       panel.childNodes[1].innerHTML = getFortune();
       console.log(panel.childNodes[0]);
       panel.style.backgroundImage = `url('images/${getImage()}.jpeg')`;
    panel.classList.add('active')
        }
    )}
);

function removeActive() {    
    panels.forEach(panel => {    
        panel.classList.remove('active');
        panel.style.backgroundImage = 'none';
    });
}

function getFortune(){
let randomFortune = Math.floor(Math.random() * fortunes.length );
    return fortunes[randomFortune];
}

function getImage(){
    return Math.floor(Math.random() * 15);
    
}






