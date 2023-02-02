{
    const playGame = function(playerInput){
    
        clearMessages();
    
        const getMoveName = function(argMoveId){
            if(argMoveId == 1) return "kamień";
            if(argMoveId == 2) return "nożyce";
            if(argMoveId == 3) return "papier";
        }
  
        const displayResult = function(argComputerMove, argPlayerMove){
          printMessage("Zagrałem " + argComputerMove + ", a Ty " + argPlayerMove);
  
            if(
              (argComputerMove=="kamień" && argPlayerMove=="papier") ||
              (argComputerMove=="papier" && argPlayerMove=="nożyce") || 
              (argComputerMove=="nożyce" && argPlayerMove=="kamień")
            ) {
                printMessage("Wygrywasz");
            }
            else if(argComputerMove == argPlayerMove) { 
              printMessage("Mamy remis");
           }
           else {
              printMessage("Przegrywasz");
          }
        }
        
        const randomNumber = Math.floor(Math.random() * 3 + 1);
        console.log("Komputer wylosował: " + randomNumber);
    
        const computerMove = getMoveName(randomNumber);
    
        const playerMove = getMoveName(playerInput);
    
        displayResult(computerMove, playerMove);
    }
    
    
    document.getElementById('play-rock').addEventListener('click', function(){
      playGame(1);
    });
  
  document.getElementById('play-scissors').addEventListener('click', function(){
      playGame(2);
    });
  
    document.getElementById('play-paper').addEventListener('click', function(){
      playGame(3);
    });
  }