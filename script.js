let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randomIdx = Math.floor(Math.random() * 3);
  return options[randomIdx];
  //rock,paper,scissors
};

const drawGame = () => {
  console.log("Game Was Draw!");
  msg.innerText = "Game was Draw. Play Again!";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userwin, userchoice, compChoice) => {
  if (userwin) {
    userScore++;
    userscorepara.innerText = userScore;
    msg.innerText = `You Win! ${userchoice} beats ${compChoice}`;
    msg.style.backgroundColor = "Green";
  } else {
    compScore++;
    compscorepara.innerText = compScore;
    msg.innerText = `You Lose! ${compChoice} beats your ${userchoice}`;
    msg.style.backgroundColor = "Red";
  }
};

const playGame = (userchoice) => {
  console.log("user choice =", userchoice);
  //Generate Computer choice
  const compChoice = genCompChoice();
  console.log("comp choice = ", compChoice);

  if (userchoice === compChoice) {
    //draw game
    drawGame();
  } else {
    let userwin = true;
    if (userchoice === "rock") {
      
      userwin = compChoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      
      userwin = compChoice === "scissors" ? false : true;
    } else {
      
      userwin = compChoice === "rock" ? false : true;
    }
    showWinner(userwin, userchoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    playGame(userchoice);
  });
});
