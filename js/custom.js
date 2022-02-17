// getting input value function
function getInputValue(id){
    const inputFIeld = document.getElementById(id);
    const idText = inputFIeld.value;
    const idAmount = parseFloat(idText);
    inputFIeld.value = '';
    return idAmount
}

// calculation button
document.getElementById('calculate-button').addEventListener('click', function(){
    const incomeAmount = getInputValue('income');
    const foodExpenseCost = getInputValue('food-expense');
    const rentExpenseCost = getInputValue('rent-expense');
    const clothesExpenseCost = getInputValue('clothes-expense');
    if(typeof((incomeAmount) == 'number' && incomeAmount>0) && typeof(foodExpenseCost) == 'number' && foodExpenseCost>0 && typeof(rentExpenseCost) == 'number' && rentExpenseCost>0 && typeof(clothesExpenseCost) == 'number' && clothesExpenseCost>0){
        
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
    document.getElementById('error-number').style.display = 'none';
    }
    else{
        document.getElementById('error-number').style.display = 'block';
    }
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

    if(typeof(saveMoneyPercentage)=='number' && saveMoneyPercentage>0 && typeof(incomeAmount)=='number' && incomeAmount>0){
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
    // debugger;
    const remainingBalanceField = document.getElementById('total-remaining-balance');
    const remainingBalanceText = remainingBalanceField.innerText;
    const remainingBalanceAmount = parseFloat(remainingBalanceText);

    const remainingBalance = balanceAmount + remainingBalanceAmount;
    const totalRemainingBalance = remainingBalance - newSavings ;

    remainingBalanceField.innerText = totalRemainingBalance;
        document.getElementById('error-number').style.display = 'none';
    }
    else{
        document.getElementById('error-number').style.display = 'block';
    }

    
})