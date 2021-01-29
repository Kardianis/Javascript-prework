var computerMove, playerMove, playerInput, randomNumber, argButtonName, buttonTest, buttonKamień, buttonNożyce, buttonPapier ;
playerInput = prompt ('wybierz swór ruch: 1:kamień, 2:papier, 3:nożyce')
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
buttonTest.addEventListener('click', function(){ buttonClicked('Guzik TEST'); });

buttonKamień = document.getElementById('button-rock');
buttonTest.addEventListener('click',{ buttonClicked('kamień'); });
buttonNożyce = document.getElementById('button-scissors');
buttonTest.addEventListener('click',{ buttonClicked('nożyce'); });
buttonPapier = document.getElementById('button-paper')
buttonTest.addEventListener('click',{ buttonClicked('papier'); });