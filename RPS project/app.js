let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const genComputerChoice =  () =>{
  const options = ["rock","paper","scissors"];
  const randIdx = Math.floor(Math.random()*3);
  return options[randIdx];
}

const drawGame = () =>{
    msg.innerText = "Game was draw. play again!"
    msg.style.backgroundColor = "#081b31" ;
}

const showWinner = (userWin,userchoice,compChoice) =>{
    if(userWin){
        userScore++;
        userScorepara.innerText  = userScore;
        msg.innerText = `you win! ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green" ;
        
    }else{
        compScore++;
        compScorepara.innerText = compScore;
        msg.innerText = `you lose. ${compChoice} beats ${userchoice}`;
        msg.style.backgroundColor = "red" ;
    }
}

const playGame = (userchoice)=>{
  //Generate Computer choice
  const compChoice = genComputerChoice();

if(userchoice === compChoice){
    //Draw Game
    drawGame();
}else{
    let userWin = true;
    if(userchoice === "rock"){
        //scissors , paper
        userWin = compChoice === "paper" ? false : true;
    }else if(userchoice === "paper"){
        //rock,scissors
        userWin = compChoice === "scissors" ? false : true;
    }else{
        //rock, paper
        userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin,userchoice,compChoice)
};
}

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    playGame(userchoice);
  });
});
