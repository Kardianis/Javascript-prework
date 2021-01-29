var computerMove, playerMove, playerInput, randomNumber;;
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
  function getMoveName(argMoveId) {
    console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
    if (argMoveId == 1) {
      return 'kamień';
    } else if (argMoveId == 2) {
     return 'papier'; 
    } else if (argMoveId == 3) {
      return 'nożyce';
    }
  }

  function displayResult(argPlayerMove, argComputerMove){
    if(argPlayerMove == 'papier' && argComputerMove == 'kamień'){
      printMessage('Wygrywasz!');
    } if(argPlayerMove == 'nożyce' && argComputerMove == 'papier'){
      printMessage('Wygrywasz!');
    } if(argPlayerMove == 'kamień' && argComputerMove == 'nożyce'){
      printMessage('Wygrywasz!');
    } else { printMessage ('Przegrywasz');
    }
    
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}
displayResult(playerMove, computerMove);

