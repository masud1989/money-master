// console.log('Yes, I am')

//Gwetting Income 
// function getIncomeValue(){
//     const incomeInput = document.getElementById('inputIncome');
//     const incomeText =  incomeInput.value;
//     const income = parseFloat(incomeText);
//     incomeInput.value = '';
//      return income;

// }

// Getting Expense
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
    
    const balance = myIncome - totalCost;
    const expenseTotal = document.getElementById('totalExpense');
    const balanceTotal = document.getElementById('totalBalance');
    // const balanceTotal = document.getElementById('totalBalance');
    balanceTotal.innerText = balance;
    expenseTotal.innerText = totalCost;
    incomeInput.value = '';
    inputFoodCost.value = '';
    inputRentCost.value = '';
    inputClothCost.value = '';
  
    // return totalCost;
}
 


// function calculate(){
//     const expenseTotal = document.getElementById('totalExpense');
//     // const balance = income - totalCost;
//     expenseTotal.innerText = totalCost;
//     getExpense()

// }

 

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
})

