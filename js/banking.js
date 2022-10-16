function getInput(inputValue){
    const myInput = document.getElementById(inputValue);
    const newInput = myInput.value;
    myInput.value = '';
    return newInput; 
}

function updateTotal(totalFieldId, newInput){
    const totalField = document.getElementById(totalFieldId);
    const previousTotal = totalField.innerText;
    totalField.innerText = parseFloat(previousTotal) + parseFloat(newInput);
}

function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total');
    const previousBalance = parseFloat(balanceTotal.innerText);
    return previousBalance;
}

function updateBalance(newInput, isAdd){
    const balanceTotal = document.getElementById('balance-total');
    const previousBalance = getCurrentBalance();
    if (isAdd == true){
        balanceTotal.innerText = parseFloat(previousBalance) + parseFloat(newInput);
    }
    else{
        balanceTotal.innerText = parseFloat(previousBalance) - parseFloat(newInput);
    } 
}

document.getElementById('deposit-btn').addEventListener('click', function(){
    const newDeposit = getInput('deposit-input');
    if(newDeposit > 0){
        updateTotal('deposit-total', newDeposit);
        updateBalance(newDeposit, true);
    }
});

document.getElementById('withdraw-btn').addEventListener('click', function(){
    const newWithdraw = getInput('withdraw-input');
    const currentBalance = getCurrentBalance();
    if(newWithdraw > 0 && newWithdraw < currentBalance){
        updateTotal('withdraw-total', newWithdraw);
        updateBalance(newWithdraw, false);
    }
});