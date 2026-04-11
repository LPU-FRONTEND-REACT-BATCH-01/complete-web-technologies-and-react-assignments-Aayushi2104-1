let account = {
    balance:0,
    transactions:[]
};

function deposit(amount){
   if(amount<=0){
    console.log("amount must be greater than 0");
    return;
   }
   account.balance+=amount
   account.transactions.push(`Deposited:${amount}`);
}
function withdraw(amount){
    if(amount<=0){
    console.log("amount must be greater than 0");
    return;
   }
   if(amount>account.balance){
    console.log("cannot withdraw more than balance");
    return;
   }
   if(account.balance-amount < 500){
    console.log("minimum balance 500 must be maintained");
    return;
   }
   if(amount>10000){
    console.log("Maximum withdrawal is 10000");
    return;
   }
   account.balance-=amount;
   account.transactions.push(`withdrawn: ${amount}`);
   
}
function getBalance(){
  return account.balance;
}

function getTransactions(){
    return account.transactions;
}
deposit(2000)
withdraw(500)
deposit(1000)

let finalbalance= getBalance();
console.log(`Finalbalance: ${finalbalance}`);

console.log(getTransactions());

let tran=account.transactions.map((value,index)=>console.log(value))











































