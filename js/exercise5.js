// З клавіатури вводиться номер дня тижня. Вивести на екран назву дня.

let userDayNumber = parseInt(prompt('Enter a day number(1-7): ', '1'));

switch (userDayNumber){
    case 1:
        document.write('Monday')
        break;
    case 2:
        document.write('Tuesday')
        break;
    case 3:
        document.write('Wednesday')
        break;
    case 4:
        document.write('Thursday')
        break;
    case 5:
        document.write('Friday')
        break;
    case 6:
        document.write('Saturday')
        break;
    case 7:
        document.write('Sunday')
        break;
    default:
        document.write('Wrong day number!')
}