function payment(modeOfPayment, amount) {
    let discount = 0;
    if (modeOfPayment === "UPI") {
        discount = 0.1;
        return amount - (amount * discount);
    }
    else if (modeOfPayment === "Card") {
        discount = 0.05;
        return amount - (amount * discount);
    }
    else if (modeOfPayment === "COD") {
        let newAmount = amount + 50;
        return `You have paid ${newAmount}`;
    }
    else {
        return amount;
    }
}
console.log(payment("UPI", 1000));
console.log(payment("Card", 1000));
console.log(payment("COD", 1000));
console.log(payment("NetBanking", 1000));
