const plateSize = 90;
const bombNum = 10; 
const dzielna = 10;

function randBombPlace(){
    var bomb = new Array(plateSize+1).fill(0);
    let i = 0;
    while(i != bombNum){
        var bombPlace = Math.round(Math.random() * plateSize);

        if(bomb[bombPlace] != "B"){
            
            bomb[bombPlace] = "B";
            addNum(bomb, bombPlace);

            i++;
        }
    }
    generatePlate(bomb);
}


function generatePlate(bomb){
    var n = 0;
    for(let i = 1; i<=plateSize; i++){
        let btn = document.createElement("button");
        btn.className = "btn";
        btn.addEventListener("click", (k) =>{
            btnPress(btn, bomb, i);
        })
        btn.innerHTML = "p";
        plate.appendChild(btn);
        n++;

        if(n%dzielna == plateSize%dzielna){
            plate.appendChild(document.createElement("br"));
            n = 0;
        }
        
    }
}

function btnPress(btn, bomb, i){
    let allBtn = document.querySelectorAll(".btn");
    if(bomb[i] == "B"){
        console.log("BOBMA!");
        for(let l = 0; l<plateSize; l++){
            allBtn[l].disabled = true;
        }
    }else{
        btn.innerHTML = bomb[i];
    }

    btnColor(bomb, i, btn);
}


function addNum(bomb, j){
    if(bomb[j] == "B"){
        if(bomb[j+1] != "B" && j%dzielna != 0 && j+1 != null){
            bomb[j+1] += 1; 
        }
        if(bomb[j-1] != "B" && j%dzielna != 1 && j-1 != null){
            bomb[j-1] += 1; 
        }
        if(bomb[j+dzielna] != "B" && j+dzielna != null){
            bomb[j+dzielna] += 1; 
        }
        if(bomb[j-dzielna] != "B" && j-dzielna != null){
            bomb[j-dzielna] += 1; 
        }
        if(bomb[j+dzielna+1] != "B" && j%dzielna != 0  && j-dzielna != null){
            bomb[j+dzielna+1] += 1; 
        }
        if(bomb[j-dzielna+1] != "B" && j%dzielna != 0  && j-dzielna+1 != null){
            bomb[j-dzielna+1] += 1; 
        }
        if(bomb[j+dzielna-1] != "B" && j%dzielna != 1  && j-dzielna-1 != null){
            bomb[j+dzielna-1] += 1; 
        }
        if(bomb[j-dzielna-1] != "B" && j%dzielna != 1  && j-dzielna-1 != null){
            bomb[j-dzielna-1] += 1; 
        }

    }
}

function btnColor(bomb, i, btn){
    if(bomb[i] == "B"){
        btn.style.backgroundColor = "red";
    }
    if(bomb[i]==1){
        btn.style.backgroundColor = "lightblue";
    }
    if(bomb[i]==2){
        btn.style.backgroundColor = "blue";
    }
    if(bomb[i]==3){
        btn.style.backgroundColor = "purple";
    }
    if(bomb[i]==4){
        btn.style.backgroundColor = "magenta";
    }
}


randBombPlace();

let btns = document.querySelectorAll(".btn");
