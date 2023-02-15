// З клавіатури вводиться ціна товару і кількість грошей.
// Якщо грошей не вистачає, то відмовляємо у покупці, інакше, якщо ще залишаються гроші, то пропонуємо купити лотерею за 4 грн.


let itemName = prompt('Enter an item name', 'Screwdriver');
let itemPrice = parseFloat(prompt(`Please, enter a price of ${itemName}`, '50'));
let userMoney = parseFloat(prompt('Enter a count of money in your wallet', '100'));

const TICKET_PRICE = 4;

if (userMoney >= itemPrice){
    userMoney -= itemPrice;
if (userMoney >= TICKET_PRICE){
    if (confirm(`Do you want to buy a lottery ticker for a 4 dollars? Your balance is ${userMoney.toFixed(2)}\$`)){
        userMoney -= TICKET_PRICE;
        document.write(`Thank you for purchase! Have a nice day! Your balance now is ${userMoney.toFixed(2)}\$`)
    } else {
        document.write(`Thank you. Have a nice day. Your balance now is ${userMoney.toFixed(2)}\$`)
    }
} else {
    document.write(`Thank you. Have a nice day. Your balance now is ${userMoney.toFixed(2)}\$`)
}
}else if(userMoney < itemPrice){
document.write(`You have no money to buy this item. Your balance is ${userMoney.toFixed(2)}\$, you need ${itemPrice.toFixed(2)}\$`)
}