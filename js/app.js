// income and expense section
document.getElementById('calculate-button').addEventListener('click', function(){
    // income
    const incomeField = document.getElementById('income');
    const incomeAmountText = incomeField.value;
    const incomeAmount = parseFloat(incomeAmountText);
    incomeField.value = '';
    // console.log(incomeAmount);

    // expense start
    const foodExpenseField = document.getElementById('food-expense');
    const foodExpenseCostText = foodExpenseField.value;
    const foodExpenseCost = parseFloat(foodExpenseCostText);
    foodExpenseField.value = '';
    // console.log(foodExpenseCost);

    const rentExpenseField = document.getElementById('rent-expense');
    const rentExpenseCostText = rentExpenseField.value;
    const rentExpenseCost = parseFloat(rentExpenseCostText);
    rentExpenseField.value = '';
    // console.log(rentExpenseCost);

    const clothesExpenseField = document.getElementById('clothes-expense');
    const clothesExpenseCostText = clothesExpenseField.value;
    const clothesExpenseCost = parseFloat(clothesExpenseCostText);
    clothesExpenseField.value = '';
    // console.log(clothesExpenseCost);

    // calculation of expenses
    const totalExpenseField = document.getElementById('total-expense');
    const totalExpenseText = totalExpenseField.innerText;
    const totalExpenseAmount = parseFloat(totalExpenseText);

    const currentExpense = clothesExpenseCost + rentExpenseCost + foodExpenseCost;
    totalExpenseField.innerText = totalExpenseAmount + currentExpense;
    // expense end

    // total remaining balance calculation
    const totalBalanceField = document.getElementById('total-balance');
    const balanceText = totalBalanceField.innerText;
    const balanceAmount = parseFloat(balanceText);

    const totalBalanceAmount = balanceAmount + incomeAmount;
    const newBalanceAmount = totalBalanceAmount - currentExpense;
    totalBalanceField.innerText = newBalanceAmount;
})

// savings section
