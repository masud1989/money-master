// console.log('Yes, I am')

//Gwetting Income 
// function getIncomeValue(){
//     const incomeInput = document.getElementById('inputIncome');
//     const incomeText =  incomeInput.value;
//     const income = parseFloat(incomeText);
//     incomeInput.value = '';
//      return income;

// }

// Calculate
function calculate(){
    // getting food cost 
    const inputFoodCost = document.getElementById('foodCost');
    const inputFoodCostText = inputFoodCost.value;
    const foodCost = inputFoodCostText;
    // getting Rent cost 
    const inputRentCost = document.getElementById('rentCost');
    const inputRentCostText = inputRentCost.value;
    const rentCost = inputRentCostText;
    // getting cloth cost 
    const inputClothCost = document.getElementById('clothCost');
    const inputClothCostText = inputClothCost.value;
    const clothCost = inputClothCostText;
  
    // getting Total Cost 
    const totalCost = parseFloat(foodCost) + parseFloat(rentCost) + parseFloat(clothCost);
    const incomeInput = document.getElementById('inputIncome');
    const incomeText =  incomeInput.value;
    const myIncome = parseFloat(incomeText);
    // getting balance
    const balance = myIncome - totalCost;
    const expenseTotal = document.getElementById('totalExpense');
    const balanceTotal = document.getElementById('totalBalance');
    // const balanceTotal = document.getElementById('totalBalance');
    balanceTotal.innerText = balance;
    expenseTotal.innerText = totalCost;
    inputFoodCost.value = '';
    inputRentCost.value = '';
    inputClothCost.value = '';
    
    if(myIncome < totalCost ){
        window.alert('Sorry! Your Income is less than Expense');
    }
}
 

document.getElementById('calculate-btn').addEventListener('click', function(){
    // console.log('Calculate Button Clicked..');
    // const incomeTest = getIncomeValue();
    // console.log(incomeTest);
    const totalCostTest = calculate();

    // const 
    // const totalExpense = document.getElementById('totalExpense');
    // totalExpense.innerText = totalCost;
    //  console.log(totalCostTest);
    
})
document.getElementById('save-btn').addEventListener('click', function(){
    // console.log('Save Button Clicked..');
    
    const inputSave = document.getElementById('inputSave');
    const inputSaveText = inputSave.value;
    const saveAmountPercent = parseFloat(inputSaveText);
    // console.log(saveAmount)
    const incomeInput = document.getElementById('inputIncome');
    const incomeText =  incomeInput.value;
    const myIncome = parseFloat(incomeText);
    const amountSave = (myIncome*saveAmountPercent)/100;
    // console.log(amountSave);
    const savingAmount = document.getElementById('saving-amount');
    savingAmount.innerText = amountSave;

    const myBalance = document.getElementById('totalBalance')
    const myBalanceText = myBalance.innerText;
    const myBalanceAmount = parseFloat(myBalanceText);
    // console.log(myBalanceAmount);
    
    const remainingBalance = document.getElementById('remaining-balance');
    if(myBalanceAmount > amountSave){
        const myremainingBalance = myBalanceAmount - amountSave;
    remainingBalance.innerText = myremainingBalance;
    incomeInput.value = '';
    }
    else{
        window.alert('Sorry! Your Saving Amount is Over'); 
    }
    
    



})

