let randomNumber = Math.floor(Math.random() * 3 + 1);
printMessage('Twój ruch to: ' + playerMove);

  console.log('Wylosowana liczba to: ' + randomNumber);

  let computerMove = 'nieznany ruch';
  
  if(randomNumber == 1){
    computerMove = 'kamień';
  }
  if(randomNumber == 2){
    computerMove = 'papier';
  }
  if(randomNumber == 3){
    computerMove = 'nożyczki';
  }
  printMessage('Mój ruch to: ' + computerMove);

  let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
}
if(playerInput == '2'){
  playerMove = 'papier';
}
if(playerInput == '3'){
  playerMove = 'nożyce';
}
printMessage('Twój ruch to: ' + playerMove);
const displayResult = function(ComputerMove, PlayerMove){
  {printMessage("Zagrałem " + ComputerMove + ", a Ty " + PlayerMove);
}
if(ComputerMove=="kamień" && PlayerMove=="papier") {
  printMessage("Wygrywasz");
}
else if(ComputerMove=="papier" && PlayerMove=="nożyce") {
  printMessage("Wygrywasz");
}
else if(ComputerMove=="nożyce" && PlayerMove=="kamień") {
  printMessage("Wygrywasz");
}
else if(ComputerMove=="kamień" && PlayerMove=="nożyce") {
  printMessage("Przegrywasz");
}
else if(ComputerMove=="papier" && PlayerMove=="kamień") {
  printMessage("Przegrywasz");
}
else if(ComputerMove=="nożyce" && PlayerMove=="papier") {
  printMessage("Przegrywasz");
}
else if(ComputerMove == PlayerMove) {printMessage("Mamy remis");
}
else if(PlayerMove == 'nieznany ruch') {printMessage("Runda nierozstrzygnięta");
}
}

