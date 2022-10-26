var startBtn = document.querySelector("#btn");
var botOptions = ["Rock", "Paper", "Scissors"]
var wins = 0;
document.getElementById("wins").innerText = ("Wins: " + wins)

function selection() {

    document.getElementById("user_rock").style.display="none";
    document.getElementById("user_paper").style.display="none";
    document.getElementById("user_scissors").style.display="none";
    document.getElementById("bot_rock").style.display="none";
    document.getElementById("bot_paper").style.display="none";
    document.getElementById("bot_scissors").style.display="none";

    var botChoice = Math.floor(Math.random()* botOptions.length);
    console.log(botChoice);

    window.alert("Welcome to Rock, Paper, Scissors!");
    var choice = window.prompt("Please choose Rock, Paper, or Scissors!");

   if (choice === ("Rock" || "rock")){
    document.getElementById("user_rock").style.display="block";
    setTimeout(() => {rock();}, 100);
   }
   else if (choice === ("Paper" || "paper")) {
    document.getElementById("user_paper").style.display="block";
    setTimeout(() => {paper();}, 100);
   }
   else if (choice === ("Scissors" || "scissors")){
    document.getElementById("user_scissors").style.display="block";
    setTimeout(() => {scissors();}, 100);
   } else {
    window.alert("Please choose a correct item")
   }
   return;

  
function rock() {
    window.alert("You chose Rock!")
   if (botChoice === 0) {
    document.getElementById("bot_rock").style.display="block";
        setTimeout(() => {window.alert("The bot chose Rock, you tied!");}, 100);
    setTimeout(() => {document.getElementById("user_rock").style.display="none";}, 1000);
    setTimeout(() => {document.getElementById("bot_rock").style.display="none";}, 1000);
    setTimeout(() => {document.getElementById("wins").innerText = ("Wins: " + wins);}, 1000);
   } else if (botChoice === 1) {
    document.getElementById("bot_paper").style.display="block";
        setTimeout(() => {window.alert("The bot chose Paper, you lose!");}, 100);
    setTimeout(() => {document.getElementById("user_rock").style.display="none";}, 1000);
    setTimeout(() => {document.getElementById("bot_paper").style.display="none";}, 1000);
    setTimeout(() => {document.getElementById("wins").innerText = ("Wins: " + wins);}, 1000);
    } else {
    document.getElementById("bot_scissors").style.display="block";
        setTimeout(() => {window.alert("The bot chose Scissors, you win!");}, 100)
    setTimeout(() => {document.getElementById("user_rock").style.display="none";}, 1000);
    setTimeout(() => {document.getElementById("bot_scissors").style.display="none";}, 1000);
    wins += 1;
    setTimeout(() => {document.getElementById("wins").innerText = ("Wins: " + wins);}, 1000);
   }
}

function paper() {
    window.alert("You chose Paper!")
   if (botChoice === 0) {
    document.getElementById("bot_rock").style.display="block";
        setTimeout(() => {window.alert("The bot chose Rock, you win!");}, 100)
    setTimeout(() => {document.getElementById("user_paper").style.display="none";}, 1000);
    setTimeout(() => {document.getElementById("bot_rock").style.display="none";}, 1000);
    wins += 1;
    setTimeout(() => {document.getElementById("wins").innerText = ("Wins: " + wins);}, 1000);
} else if (botChoice === 1) {
    document.getElementById("bot_paper").style.display="block";
        setTimeout(() => {window.alert("The bot chose Paper, you tied!");}, 100)
    setTimeout(() => {document.getElementById("user_paper").style.display="none";}, 1000);
    setTimeout(() => {document.getElementById("bot_paper").style.display="none";}, 1000);
    setTimeout(() => {document.getElementById("wins").innerText = ("Wins: " + wins);}, 1000);
   } else {
    document.getElementById("bot_scissors").style.display="block";
        setTimeout(() => {window.alert("The bot chose Scissors, you lose!");}, 100)
    setTimeout(() => {document.getElementById("user_paper").style.display="none";}, 1000);
    setTimeout(() => {document.getElementById("bot_scissors").style.display="none";}, 1000);
    setTimeout(() => {document.getElementById("wins").innerText = ("Wins: " + wins);}, 1000);
   }
}

function scissors() {
    window.alert("You chose Scissors!")
   if (botChoice === 0) {
    document.getElementById("bot_rock").style.display="block";
        setTimeout(() => {window.alert("The bot chose Rock, you lose!");}, 100)
    setTimeout(() => {document.getElementById("user_scissors").style.display="none";}, 1000);
    setTimeout(() => {document.getElementById("bot_rock").style.display="none";}, 1000);
    setTimeout(() => {document.getElementById("wins").innerText = ("Wins: " + wins);}, 1000);
    } else if (botChoice === 1) {
    document.getElementById("bot_paper").style.display="block";
        setTimeout(() => {window.alert("The bot chose Paper, you win!");}, 100)
    setTimeout(() => {document.getElementById("user_scissors").style.display="none";}, 1000);
    setTimeout(() => {document.getElementById("bot_paper").style.display="none";}, 1000);
    wins += 1;
    setTimeout(() => {document.getElementById("wins").innerText = ("Wins: " + wins);}, 1000);
   } else {
    document.getElementById("bot_scissors").style.display="block";
        setTimeout(() => {window.alert("The bot chose Scissors, you tied!");}, 100)
    setTimeout(() => {document.getElementById("user_scissors").style.display="none";}, 1000);
    setTimeout(() => {document.getElementById("bot_scissors").style.display="none";}, 1000);
    setTimeout(() => {document.getElementById("wins").innerText = ("Wins: " + wins);}, 1000);
   }
}

}

startBtn.addEventListener("click", selection);