// З клавіатури вводяться імена двох дітей та кількість у них цукерок.
// Вивести не екран ім’я тієї дитини, у якої кількість цукерок є більшою, або вивести, що кількість однакова.

let firstChildName = prompt('Enter first child');
let secondChildName = prompt('Enter second child');

let firstChildCandies = parseInt(prompt(`Enter a number of ${firstChildName} candies`, '1'));
let secondChildCandies = parseInt(prompt(`Enter a number of ${secondChildName} candies`, '1'));

if (firstChildCandies > secondChildCandies){
    document.write(`${firstChildName} have more candies than ${secondChildName}`);
} else if (firstChildCandies < secondChildCandies){
    document.write(`${secondChildName} have more candies than ${firstChildName}`);
} else {
    document.write(`${firstChildName} and ${secondChildName} have the same candies quantity `);
}