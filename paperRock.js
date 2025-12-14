
const msg=document.querySelector(".msg");
let userScore=document.querySelector("#user-score");
let compScore=document.querySelector("#comp-score");
let reset=document.querySelector(".reset");
let userscore = 0;
let compscore = 0;
const choice = document.querySelectorAll(".choice");


for (let choices of choice) {
    choices.addEventListener("click", () => {
        const userChoice = choices.getAttribute("id");
        playgame(userChoice);
    });
}


const gencompchoice = () => {
    let options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const playgame = (userChoice) => {
    console.log("user choice is:", userChoice);
    const compchoice = gencompchoice();
    console.log("comp choice is", compchoice);
    if(userChoice===compchoice){
        drawgame();
    }
    else if (userChoice === "rock" && compchoice === "scissors") {
        userwin();
    } else if (userChoice === "paper" && compchoice === "rock") {
        userwin();
    } else if (userChoice === "scissors" && compchoice === "paper") {
        userwin();
    } else {
        compwin();
    }
};

const drawgame=()=>{
    console.log("Draw");
    msg.innerText="Draw";
    msg.classList.remove("hide");
    
}
const userwin=()=>{
    msg.innerText="You Won,Comp Lost";
    msg.classList.remove("hide");
    userscore=userscore+1;
    userScore.innerText=userscore;
   
}
const compwin=()=>{
    msg.innerText="You Lost,Computer Won";
    msg.classList.remove("hide");
    compscore=compscore+1;
    compScore.innerText=compscore;
    
}

reset.addEventListener("click",()=>{
    restScore();
})

const restScore=()=>{
    userscore=0;
    compscore=0;
    userScore.innerText=userscore;
    compScore.innerText=compscore;
}