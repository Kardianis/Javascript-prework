var computerMove, playerMove, playerInput, randomNumber, argButtonName, buttonTest, buttonRock, buttonScissors, buttonPaper ;

playerMove = argButtonName; 

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


buttonTest = document.getElementById('button-test');
buttonTest.addEventListener('click', function(){ 
  buttonClicked('Guzik TEST') 
});

buttonRock.addEventListener('click', function () {
   buttonClicked('kamień')
  });
buttonRock = document.getElementById('button-rock');
buttonScissors.addEventListener('click', function () { 
  buttonClicked('nożyce')
 });
buttonScissors = document.getElementById('button-scissors');
buttonPaper.addEventListener('click', function () { 
  buttonClicked('papier')
 });
buttonPaper = document.getElementById('button-paper');