// З клавіатури вводиться номер місяця. Вивести до якої пори він відноситься

let userMonthNumber = parseInt(prompt('Enter a month number: ','1'))

//Variant with if else
if (userMonthNumber === 12 || userMonthNumber >= 1 && userMonthNumber <= 2 ){
document.write("Winter is now <hr>")
} else if (userMonthNumber <= 5){
    document.write("Spring is now<hr>")
} else if (userMonthNumber <= 8){
document.write("Summer is now<hr>")
} else if (userMonthNumber <= 11){
    document.write("Autumn is now<hr>")
} else {
    document.write("Wrong month number<hr>")
}


// Variant with switch case
switch (userMonthNumber) {
    case 1:
        document.write("Winter is now")
        break;
    case 2:
        document.write("Winter is now")
        break;
    case 3:
        document.write("Spring is now")
        break;
    case 4:
        document.write("Spring is now")
        break;
    case 5:
        document.write("Spring is now")
        break;
    case 6:
        document.write("Summer is now")
        break;
    case 7:
        document.write("Summer is now")
        break;
    case 8:
        document.write("Summer is now")
        break;
    case 9:
        document.write("Autumn is now")
        break;
    case 10:
        document.write("Autumn is now")
        break;
    case 11:
        document.write("Autumn is now")
        break;
    case 12:
        document.write("Winter is now")
        break;
    default:
        document.write("Wrong month number")
}