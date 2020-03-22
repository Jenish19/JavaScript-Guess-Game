let computerGeneratedNumber = this.getRandonNumber();
console.log(computerGeneratedNumber)
let guessHistoryArr = [];

window.onload = function() {
    document.getElementById('form-submit').addEventListener("click", playGame);
    document.getElementById('reset-game').addEventListener("click", resetGame);
    this.getRandonNumber ();
   
}

function playGame() {
   let numberGuess =  document.getElementById('number-input').value;
   disaplayResults(numberGuess);
   saveGuessHistory(numberGuess);
   displayGuessHistory(numberGuess);
}

function disaplayResults (numberGuess) {
    if(numberGuess > computerGeneratedNumber){
        displayTooHigh();
       } else if (numberGuess < computerGeneratedNumber) {
        displayTooLow();
       }else {
        displayYouWon ();
       }
}

function getAlert (alertType, message) {
    let alertBox;
    switch(alertType) {
        case "danger":
            alertBox = "<div class='alert alert-danger' role='alert'>"
            break;
        case "won":
            alertBox = "<div class='alert alert-success' role='alert'>"
            break;
    }
    alertBox += message;
    alertBox += "</div>"
    return alertBox;
}

function getRandonNumber() {
    let randomNumber = Math.random(); //number between 0 to 1 exclude 1
    let numberWithDecimal = randomNumber * 100; //gives number between 0.xx to 99.xx
    let wholeNumber = Math.floor(numberWithDecimal) + 1; //removing decimal points. Adding 1 to get number between 0 to 100
    return wholeNumber;
}

function displayYouWon () {
    const message = "Great! You won!"
    let alertBox = getAlert('won', message);
    document.getElementById('result').innerHTML = alertBox;
}

function displayTooHigh() {
    const message = "Aww.. Number too high"
    let alertBox = getAlert('danger', message);
    document.getElementById('result').innerHTML = alertBox;
}

function displayTooLow() {
    const message = "Aww.. Number too low"
    let alertBox = getAlert('danger', message);
    document.getElementById('result').innerHTML = alertBox;
}

function saveGuessHistory(guessedNumber) {
    guessHistoryArr.push(guessedNumber);
}

function displayGuessHistory() {
    let index = guessHistoryArr.length -1;
    let list = "<ul class='list-group'>";  
        while(index >= 0){
            list += "<li class='list-group-item list-group-item-info'>" + "You guesssed: <strong>" + guessHistoryArr[index] + "</strong></li>"
            document.getElementById('history').innerHTML = list;    
            index --;
        }
    list += "</ul>"
}

function resetGame() {

    computerGeneratedNumber = getRandonNumber();
    document.getElementById('result').innerHTML = "";
    guessHistoryArr = [];
    document.getElementById('history').innerHTML = "";
    // displayGuessHistory();




}