console.log("helloooo")

const startBtn = document.querySelector('.speel');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-button')
const main = document.querySelector('.main')
const speelQuizKnop = document.querySelector('.doorgaan-button')
const quizPopup = document.querySelector('.quiz-section')
const allesPlay = document.querySelector('.allesplay')
const quizBox = document.querySelector('.quiz-box')
const resultBox = document.querySelector('.result-box')
const tryAgainBtn = document.querySelector('.tryAgain-btn')
const goHomeBtn = document.querySelector('.goHome-btn')


startBtn.onclick = () => {
    popupInfo.classList.add('active');
    main.classList.add('active');
}

exitBtn.onclick = () => {
    popupInfo.classList.remove('active');
    main.classList.remove('active');
}

speelQuizKnop.onclick =  () => {
    quizPopup.classList.add('active')
    popupInfo.classList.remove('active')
    allesPlay.classList.add('hidden');
    quizBox.classList.add('active')

}


const vlaggen = [
    { land: "Frankrijk", src: "images/Flag_of_France.png" },
    { land: "Duitsland", src: "images/Flag_of_Germany.png" },
    { land: "Italie", src: "images/Flag_of_Italy.png" },
    { land: "Japan", src: "images/Flag_of_Japan.png" },
    { land: "Brazilie", src: "images/Flag_of_Brazil.png" }
];

let huidigeVlagIndex = 0;
const vlagAfbeelding = document.getElementById("flag");
const antwoordInput = document.getElementById("answer");
const resultaatTekst = document.getElementById("result");
const verstuurKnop = document.getElementById("submit");

function laadVlag() {
    vlagAfbeelding.src = vlaggen[huidigeVlagIndex].src;
    antwoordInput.value = "";
    resultaatTekst.textContent = "";
}

function controleerAntwoord() {
    const gebruikersAntwoord = antwoordInput.value.trim().toLowerCase(); // het .trim().toLowerCase vroeg ik aan chatgpt omdat het vervelend was dat spaties of niet hoofdletters voor een fout antwoord zorgde
    const juisteAntwoord = vlaggen[huidigeVlagIndex].land.toLowerCase();
    
    if (gebruikersAntwoord === juisteAntwoord) {
        resultaatTekst.textContent = "Correct!";
        resultaatTekst.style.color = "green";
        huidigeVlagIndex = (huidigeVlagIndex + 1) % vlaggen.length;
        setTimeout(laadVlag, 1000); 
    } else {
        resultaatTekst.textContent = "Incorrect! Probeer opnieuw.";
        resultaatTekst.style.color = "red";
    }
}

window.onload = function() {
    laadVlag();
    verstuurKnop.addEventListener("click", controleerAntwoord);
};




