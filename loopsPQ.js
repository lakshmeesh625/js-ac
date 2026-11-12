//print all the even numbers from 1 to 100


for (let i = 1; i <= 100; i++){
    if (i % 2 === 0) {
        console.log(i)
    }
}



// create a game where you start with any random number keep the user guessing intil they guess the correct value


let j = 66;

let userInput = window.prompt("Guess the number between 1 to 100")


while (userInput != j) {
userInput  =    window.prompt("You have guessed it wrong try again")
}

console.log("You have guessed the right number")

