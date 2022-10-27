var startBtn = document.querySelector("#btn");
var botOptions = ["Rock", "Paper", "Scissors"];
var wins = 0;
var ties = 0;
var losses = 0;
var user_rock = document.getElementById("user_rock");
var user_paper = document.getElementById("user_paper");
var user_scissors = document.getElementById("user_scissors");
var bot_rock = document.getElementById("bot_rock");
var bot_paper = document.getElementById("bot_paper");
var bot_scissors = document.getElementById("bot_scissors");
var win_count = document.getElementById("wins");
var tie_count = document.getElementById("ties");
var lose_count = document.getElementById("losses");


win_count.innerText = ("Wins: " + wins);
tie_count.innnerText = ("Ties: " + ties);
lose_count.innerText = ("Losses: " + losses);


function selection() {

    user_rock.style.display="none";
    user_paper.style.display="none";
    user_scissors.style.display="none";
    bot_rock.style.display="none";
    bot_paper.style.display="none";
    bot_scissors.style.display="none";

    var botChoice = Math.floor(Math.random()* botOptions.length);
    console.log(botChoice);

    window.alert("Welcome to Rock, Paper, Scissors!");
    var choice = window.prompt("Please choose Rock, Paper, or Scissors!");

   if (choice === "Rock" || choice === "rock"){
    user_rock.style.display="block";
    setTimeout(() => {rock();}, 100);
   }
   else if (choice === "Paper" || choice === "paper") {
    user_paper.style.display="block";
    setTimeout(() => {paper();}, 100);
   }
   else if (choice === "Scissors" || choice === "scissors"){
    user_scissors.style.display="block";
    setTimeout(() => {scissors();}, 100);
   } else {
    window.alert("Please choose a correct item")
   }
   return;

  
function rock() {
    window.alert("You chose Rock!")
   if (botChoice === 0) {
    bot_rock.style.display="block";
        setTimeout(() => {window.alert("The bot chose Rock, you tied!");}, 100);
    setTimeout(() => {user_rock.style.display="none";}, 1000);
    setTimeout(() => {bot_rock.style.display="none";}, 1000);
    ties += 1;
    setTimeout(() => {tie_count.innerText = ("Ties: " + ties);}, 1000);
   } else if (botChoice === 1) {
    bot_paper.style.display="block";
        setTimeout(() => {window.alert("The bot chose Paper, you lose!");}, 100);
    setTimeout(() => {user_rock.style.display="none";}, 1000);
    setTimeout(() => {bot_paper.style.display="none";}, 1000);
    losses += 1;
    setTimeout(() => {lose_count.innerText = ("Losses " + losses);}, 1000);
    } else {
    bot_scissors.style.display="block";
        setTimeout(() => {window.alert("The bot chose Scissors, you win!");}, 100)
    setTimeout(() => {user_rock.style.display="none";}, 1000);
    setTimeout(() => {bot_scissors.style.display="none";}, 1000);
    wins += 1;
    setTimeout(() => {win_count.innerText = ("Wins: " + wins);}, 1000);
   }
}

function paper() {
    window.alert("You chose Paper!")
   if (botChoice === 0) {
    bot_rock.style.display="block";
        setTimeout(() => {window.alert("The bot chose Rock, you win!");}, 100)
    setTimeout(() => {document.getElementById("user_paper").style.display="none";}, 1000);
    setTimeout(() => {bot_rock.style.display="none";}, 1000);
    wins += 1;
    setTimeout(() => {win_count.innerText = ("Wins: " + wins);}, 1000);
} else if (botChoice === 1) {
    bot_paper.style.display="block";
        setTimeout(() => {window.alert("The bot chose Paper, you tied!");}, 100)
    setTimeout(() => {document.getElementById("user_paper").style.display="none";}, 1000);
    setTimeout(() => {bot_paper.style.display="none";}, 1000);
    ties += 1;
    setTimeout(() => {tie_count.innerText = ("Ties: " + ties);}, 1000);
   } else {
    bot_scissors.style.display="block";
        setTimeout(() => {window.alert("The bot chose Scissors, you lose!");}, 100)
    setTimeout(() => {document.getElementById("user_paper").style.display="none";}, 1000);
    setTimeout(() => {bot_scissors.style.display="none";}, 1000);
    losses += 1;
    setTimeout(() => {lose_count.innerText = ("Losses: " + losses);}, 1000);
   }
}

function scissors() {
    window.alert("You chose Scissors!")
   if (botChoice === 0) {
    bot_rock.style.display="block";
        setTimeout(() => {window.alert("The bot chose Rock, you lose!");}, 100)
    setTimeout(() => {user_scissors.style.display="none";}, 1000);
    setTimeout(() => {bot_rock.style.display="none";}, 1000);
    losses += 1;
    setTimeout(() => {lose_count.innerText = ("Losses: " + losses);}, 1000);
    } else if (botChoice === 1) {
    bot_paper.style.display="block";
        setTimeout(() => {window.alert("The bot chose Paper, you win!");}, 100)
    setTimeout(() => {user_scissors.style.display="none";}, 1000);
    setTimeout(() => {bot_paper.style.display="none";}, 1000);
    wins += 1;
    setTimeout(() => {win_count.innerText = ("Wins: " + wins);}, 1000);
   } else {
    bot_scissors.style.display="block";
        setTimeout(() => {window.alert("The bot chose Scissors, you tied!");}, 100)
    setTimeout(() => {user_scissors.style.display="none";}, 1000);
    setTimeout(() => {bot_scissors.style.display="none";}, 1000);
    ties += 1;
    setTimeout(() => {tie_count.innerText = ("Ties: " + ties);}, 1000);
   }
}

}

startBtn.addEventListener("click", selection);