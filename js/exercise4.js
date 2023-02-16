// З клавіатури вводиться назва категорії водія (А-мотоцикл, В-легковий автомобіль, С-вантажний автомобіль).
// Вивести на екран назву транспортного засобу, яким він може керувати.

let userDriverCategory = prompt('Enter a driver category A, B or C: ', 'A').toUpperCase();

switch (userDriverCategory.replace(/[D-Z0-9 ]/g, '')[0]) {
    case 'A':
        document.write('You are motorcycle driver')
        break;
    case 'B':
        document.write('You are light car driver')
        break;
    case 'C':
        document.write('You are truck driver')
        break;
    default:
        document.write('You doesnt have a driver license')
}