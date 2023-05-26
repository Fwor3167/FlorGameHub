const pass = document.getElementById("pass");
const start = document.getElementById("start");
const buttons = document.getElementById("buttons");
const hangman = document.getElementById("hangman");

const words = ["HASLO", "TEKST", "NAZWA", "KATEGORIA", "DLUGIWYRAZ"];

start.addEventListener('click', (e) => {
    start.style.display = "none";
    buttons.style.display = "block";
    hangman.style.display = "block";
    pass.style.display = "block";

    const l = words.length;
    const rand = Math.floor(Math.random() * l);
    const rpass = words[rand];
    const arr = Array.from(rpass);
    const wordLength = arr.length;
    let HP = 10;

    createPassLetters(arr);
    createButtons(arr, wordLength, HP);
});

function createPassLetters(arr) {
    for(let i = 0; i < arr.length; i++) {
        const letter = document.createElement("div");
        letter.id = "letter";
        letter.innerHTML = "_";
        letter.className = arr[i];
        pass.appendChild(letter);
    } 
}

function createButtons(arr, wordLength, HP) {
    let remainingLetters = wordLength;

    for(let i = 65; i <= 90; i++) {
        const btn = document.createElement("button");
        btn.className = "button";
        btn.innerHTML = String.fromCharCode(i);
        btn.style.backgroundColor = "rgba(128, 128, 128, 0.400);";
        btn.addEventListener('click', (e) => {
            btn.style.backgroundColor = "grey";
            btn.disabled = true;
            let letterFound = false;
            
            for(let j = 0; j < wordLength; j++) {
                if(btn.innerHTML === arr[j]) {
                    letterFound = true;
                    const lit = document.querySelectorAll("." + arr[j]);
                    btn.style.backgroundColor = "blue";
                    let c = lit.length;

                    while(c) {
                        lit[c - 1].innerHTML = arr[j];
                        c--;
                    }

                    remainingLetters--;
                }
            }
            
            if(remainingLetters === 0) {
                hangman.innerHTML = "You Win!";
            }

            if(!letterFound) {
                HP--;
                if(HP === 0) {
                    hangman.innerHTML = "You Lose!";
                    const btns = document.querySelectorAll(".button");
                    let o = btns.length;
                    
                    while(o) {
                        btns[o - 1].disabled = true;
                        o--;
                    }
                }
            }
        });

        buttons.appendChild(btn);
    }
}