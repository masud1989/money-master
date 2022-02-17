// console.log('Yes, I am')

function getIncomeValue(){
    const incomeInput = document.getElementById('inputIncome');
    const incomeText =  incomeInput.value;
    const income = parseFloat(incomeText);
    incomeInput.value = '';
    return income;
   
}



document.getElementById('calculate-btn').addEventListener('click', function(){
    // console.log('Calculate Button Clicked..');
    const incomeTest = getIncomeValue();
    console.log(incomeTest);
    
})
document.getElementById('save-btn').addEventListener('click', function(){
    // console.log('Save Button Clicked..');
})

