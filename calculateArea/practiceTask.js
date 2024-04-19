let groceryFirst;
let grocerySecond;
let groceryThird;

function groceryTracker(){

    groceryFirst = parseFloat(document.getElementById("grocery1").value)
    grocerySecond = parseFloat(document.getElementById("grocery2").value)
    groceryThird = parseFloat(document.getElementById("grocery3").value)

    let totalExpenditure = groceryFirst + grocerySecond + groceryThird

    document.getElementById('result').innerText = 
        `The total cost of your groceries is: R${totalExpenditure}`;

}
