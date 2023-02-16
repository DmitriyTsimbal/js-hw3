// З клавіатури вводиться вік людини. Вивести на екран ким він є (дитиною у садочку, школярем, студентом, працівником, пенсіонером).

let userAge = parseInt(prompt('Enter a user age, please: ', "18"));

if (userAge < 0){
    document.write("User is not born yet. You are from the future? 👀")
} else if (userAge < 2){
    document.write("User is a baby")
} else if (userAge <= 6){
    document.write("User is a kindergartner")
} else if (userAge <= 15){
    document.write("User is a schoolboy")
} else if (userAge <= 23){
    document.write("User is a student")
} else if (userAge <= 60){
    document.write("User is a worker")
} else if (userAge <= 120){
    document.write("User is a pensioner")
} else if (userAge > 120){
    document.write("You are dead. Sorry...😥💀")
}
