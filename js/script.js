var computerMove;
computerMove = 'kamień';
printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');

var playerMove, playerInput;
playerInput = prompt ('wybierz swór ruch: 1:papier, 2:nożyce, 3:kamień')
console.log('Wpisana odpowiedź to: ' + playerInput);
if (playerInput == '1'){playerMove = 'papier'; }
else if (playerInput == '2') {playerMove = 'nożyce' ;}
else if (playerInput == '3') {playerMove = 'kamień' ;}
printMessage('Twój ruch: ' + playerMove);


var randomNumber, randomNumber;
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