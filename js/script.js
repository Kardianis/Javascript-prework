var computerMove;
computerMove = 'kamień';
printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');

var playerMove;
playerMove = 'papier'

var randomNumber;
randomNumber = Math.floor(Math.random() * 9 + 11);
printMessage('Wylosowana liczba to: ' + randomNumber);