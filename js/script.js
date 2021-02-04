var computerMove, playerMove, playerInput, randomNumber, argButtonName, buttonTest, buttonRock, buttonScissors, buttonPaper ;

playerMove = argButtonName; 
playerInput = argButtonName

buttonTest = document.getElementById('button-test');
buttonTest.addEventListener('click', function(){ 
  buttonClicked('Guzik TEST') 
});
buttonRock = document.getElementById('button-rock');
buttonRock.addEventListener('click', function () {
   buttonClicked('kamień');
  });
buttonScissors = document.getElementById('button-scissors');
buttonScissors.addEventListener('click', function () { 
  buttonClicked('nożyce')
 });
buttonPaper = document.getElementById('button-paper');
buttonPaper.addEventListener('click', function () { 
  buttonClicked('papier')
 });

console.log('Wpisana odpowiedź to: ' + playerInput);
if (playerInput == '1'){playerMove = 'kamień'; }
else if (playerInput == '2') {playerMove = 'papier' ;}
else if (playerInput == '3') {playerMove = 'nożyce' ;}
printMessage('Twój ruch: ' + playerMove);

randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
if (randomNumber == '1') {
    computerMove = 'kamień';
  } else if (randomNumber == "2") {
    computerMove = "papier" ;
} else if (randomNumber == "3") {
    computerMove = "nożyce" ;
} ;
  printMessage('Mój ruch: ' + computerMove);

  var argMoveId, argPlayerMove, argComputerMove;
  
displayResult(playerMove, computerMove);
