// getting input value function
function getInputValue(id){
    const inputFIeld = document.getElementById(id);
    const idText = inputFIeld.value;
    const idAmount = parseFloat(idText);
    inputFIeld.value = '';
    return idAmount
}

// getting innertext function
function getInnerValue(id){
    const innerValueField = document.getElementById(id);
    const innerValueText = innerValueField.innerText;
    const innerValue = parseFloat(innerValueText);
    innerValueField.innerText = '';
    return innerValue; 
}

// calculation button
document.getElementById('calculate-button').addEventListener('click', function(){
    const incomeAmount = getInputValue('income');
    const foodExpenseCost = getInputValue('food-expense');
    const rentExpenseCost = getInputValue('rent-expense');
    const clothesExpenseCost = getInputValue('clothes-expense');

    // getting total expense
    const totalExpenseField = document.getElementById('total-expense');
    const totalExpenseText = totalExpenseField.innerText;
    const totalExpenseAmount = parseFloat(totalExpenseText);
    // calculation
    const currentExpense = clothesExpenseCost + rentExpenseCost + foodExpenseCost;
    totalExpenseField.innerText = totalExpenseAmount + currentExpense;

    // total remaining balance calculation
    const totalBalanceField = document.getElementById('total-balance');
    const balanceText = totalBalanceField.innerText;
    const balanceAmount = parseFloat(balanceText);
    // calculation
    const totalBalanceAmount = balanceAmount + incomeAmount;
    const newBalanceAmount = totalBalanceAmount - currentExpense;
    totalBalanceField.innerText = newBalanceAmount;
})

// savings button
document.getElementById('save-button').addEventListener('click', function(){
    // income
    const incomeField = document.getElementById('income');
    const incomeAmountText = incomeField.value;
    const incomeAmount = parseFloat(incomeAmountText);
    incomeField.value = '';
    // save percentage
    const saveMoneyField = document.getElementById('save-money');
    const saveMoneyText = saveMoneyField.value;
    const saveMoneyPercentage = parseFloat(saveMoneyText);
    saveMoneyField.value = '';

    // percentage
    const newSavings = (incomeAmount/100)*saveMoneyPercentage;

    // savings
    const saveAmountField = document.getElementById('total-saved');
    const saveAmountText = saveAmountField.innerText;
    const saveAmount = parseFloat(saveAmountText);
    saveAmountField.innerText = '';
    const totalSavings = newSavings + saveAmount;

    saveAmountField.innerText = totalSavings;

    // balance
    const totalBalanceField = document.getElementById('total-balance');
    const balanceText = totalBalanceField.innerText;
    const balanceAmount = parseFloat(balanceText);
    // remaining balance
    debugger;
    const remainingBalanceField = document.getElementById('total-remaining-balance');
    const remainingBalanceText = remainingBalanceField.innerText;
    const remainingBalanceAmount = parseFloat(remainingBalanceText);

    const remainingBalance = balanceAmount + remainingBalanceAmount;
    const totalRemainingBalance = remainingBalance - newSavings ;

    remainingBalanceField.innerText = totalRemainingBalance;
})