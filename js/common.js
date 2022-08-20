function getInputValue(inputId) {
    const inputFeild = document.getElementById(inputId);
    
    
        const inputFeildVString = inputFeild.value;
    const inputFeildValue = parseFloat(inputFeildVString);
    return inputFeildValue;
   

}

function getElementValue(elementId) {
    const element = document.getElementById(elementId);
    const elementValue = element.innerText;
    return elementValue;
}

function setElementVlaue(elementId, value) {
    const element = document.getElementById(elementId);
    const elementValue = element.innerText = value;
    return elementValue;
}


// Total income 
function totalIncaome() {
    const incaomeValue = getInputValue('income-feild');
    
    return incaomeValue;
    
}

 // Total Expanse 
function totalexpanse() {
    // total particular cost 
    const foodValue = getInputValue('food-feild');
    const rentValue = getInputValue('rent-feild');
    const clothesValue = getInputValue('clothes-feild');

    if (foodValue === isNaN || rentValue === isNaN || clothesValue === isNaN ) {
        alert('Please Enter Valid Number')
    }
    else {
        // total expanse 
    const totalCost = foodValue + rentValue + clothesValue;
    return totalCost;
    }
}


// Total balance
function tatalBalance() {
    const incaomeValue = totalIncaome()

    const totalCost = totalexpanse();

    const balance = incaomeValue - totalCost;
    return balance;
}
