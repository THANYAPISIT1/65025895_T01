let randNum = Math.floor(Math.random() * 101);
var clicks = 0;


function RANDOM() {
    clicks += 1;
    const Guess_Number = document.getElementById('GN').value;
    if (Guess_Number == randNum){
        alert("Guess successed!! You've guessed "+clicks+" times");
    }else if (Guess_Number > randNum){
        alert("Higher!!");
    }else if (Guess_Number < randNum){
        alert("Lower!!");
    }
    
}