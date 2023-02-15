// Випадковим чином генерується число від 1 до 5. Спробуйте вгадати число за 2 спроби.

const MIN = 1;
const MAX = 5;

guessTheNumber();

document.querySelector('.restart').addEventListener('click', guessTheNumber);

function guessTheNumber() {
    let randomNum = Math.floor(Math.random() * (MAX - MIN + 1) + MIN);
    let triesCounter = 2
     while (triesCounter > 0) {
        let userNumber = parseInt(prompt('Enter an integer num (from 1 to 5)','1'));
        if (userNumber === randomNum){
            alert("You won!")
            break;
        } else if (userNumber < MIN || userNumber > MAX){
            alert("Invalid number!")
        }
        else {
            triesCounter--
            if (triesCounter !== 0){
                alert(`Try again! You have ${triesCounter} tries`)
            } else if (triesCounter === 0){
                alert(`You loose!`)
            }
        }
    }
}