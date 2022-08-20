document.getElementById('calculate-btn').addEventListener('click', function () {

    // Total cost 
    const totalCost = totalexpanse();
    
    // now Balance 
   const balance = tatalBalance();
    
    if (isNaN(totalCost,true)){
        
        alert('Pleas Enter Valid Nubmer')
        return;
    }
    else {
        if (totalCost == Math.abs(totalCost) && balance == Math.abs(balance)){
            if (balance > totalCost) {
                // total expanse Dispaly 
    setElementVlaue('total-expanse', totalCost);
    // total balance display 
    setElementVlaue('total-balance', balance);
            }
            else {
                alert("You have not enough money")
            }
        }
        else {
            alert('Your value not will be Minus')
            return;
        }
    }

})

document.getElementById('save-btn').addEventListener('click', function () {
    const savecondition = getInputValue('save-money-feild')
    if (savecondition < 100) {
        const balance = tatalBalance();
        const save = balance / 100;
        const saveAmount = save * savecondition
        setElementVlaue('save-total', saveAmount);
        const reminingBalence = balance - saveAmount;
        setElementVlaue('remining-balance',reminingBalence.toFixed(1))
    }
    else {
        alert('You can not save 100% ')
    }
    
    
})
