let price = Number(prompt("Enter the price:"));

function calculatedis(price) {
    if (price > 6000) {
        let discount = price * 0.25;
        let finalprice = price - discount;
        return "The final price is: " + finalprice;
    } 
    else if (price > 2000) {
        let discount = price * 0.15;
        let finalprice = price - discount;
        return "The final price is: " + finalprice;
    } 
    else {
        return "No discount applied. The final price is: " + price;
    }
}

let totalprice = calculatedis(price);
console.log(totalprice);