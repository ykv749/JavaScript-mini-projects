let myAccount = {
    name: 'Yash',
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount;
}

let addIncome = function (account, income) {
    account.income = account.income + income;
}

let resetAccount = function (account) {
    account.expenses = 0;
    account.income = 0;
}

let getAccountSummary = function (account) {
    let balance = account.income - account.expenses;
    return `Account for ${account.name} has $${balance} balance.\n$${account.income} in income. $${account.expenses} in expenses.\n`
}

addIncome(myAccount, 4000)
addExpense(myAccount, 150)
addExpense(myAccount, 864)

console.log(getAccountSummary(myAccount))
resetAccount(myAccount)

console.log(getAccountSummary(myAccount))
