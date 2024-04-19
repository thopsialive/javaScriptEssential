// Step 2: Defining variables and function to calculate area
let length;
let width;

function calculateArea(){
/*
    //my answer:
    length = document.getElementById("length")
    width = document.getElementById("width")
*/
    //use parseFloat so that the user input (json, string or whatever) is for sure turned into a float
    length = parseFloat(document.getElementById("length").value)
    width = parseFloat(document.getElementById("width").value)

/*
    //my answer
    var area = length * width
*/
    let area = length * width

    document.getElementById('result').innerText = 
        `The area of the rectangle is: ${area}`;
}
