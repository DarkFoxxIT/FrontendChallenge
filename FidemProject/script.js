




let button = document.querySelector('button');
button.onclick = function(){

let financial_transaction_tax = 0.0638;
let  interest_rate = 0.0234;
let loan_amount = 0;
let numberOfInstallments = document.getElementById('text-holding').value;
console.log(numberOfInstallments)
const totalPayable = ((financial_transaction_tax/100) + (interest_rate/100)
+ (numberOfInstallments/1000) + 1) * loan_amount;
const monthlyInstallment = totalPayable / numberOfInstallments;





}
