// З клавіатури вводиться назва категорії водія (А-мотоцикл, В-легковий автомобіль, С-вантажний автомобіль).
// Вивести на екран назву транспортного засобу, яким він може керувати.

let userDriverCategory = prompt('Enter a driver category A, B or C(wrong letter or number will be replaced to A category): ', 'A').toUpperCase().replace(/^[D-Z0-9]/gi,'A');

switch (userDriverCategory) {
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