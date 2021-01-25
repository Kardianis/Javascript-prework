var computerMove;
computerMove = 'kamień';
printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');

var playerMove;
playerMove = 'papier'

var randomNumber, randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
if (randomNumber == '1') {
    computerMove = 'kamień';
  } 
else if (randomNumber == "2") {
    computerMove = "papier"
}
else if (randomNumber == "3") {
    computerMove = "nożyce"
} 
  printMessage('Mój ruch: ' + computerMove);