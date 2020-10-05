let result;

let method;

//Defining the different constants needed to a css elemtent
const methodButtonAddition = document.querySelector('#method-Button-Addition');
const methodButtonSubtraction = document.querySelector('#method-Button-Subtraction');
const methodButtonDivision = document.querySelector('#method-Button-Division');
const methodButtonMultiplication = document.querySelector('#method-Button-Multiplication');

//Event listeners numbers

//Event listeners method 
methodButtonAddition.addEventListener("click", addition);
methodButtonSubtraction.addEventListener("click", subtraction);
methodButtonDivision.addEventListener("click", division);
methodButtonMultiplication.addEventListener("click", multiplication);

function addition()
{
    method = "+";
    if(method === "+")
    {
        console.log("It's adding!");
    };
}

function subtraction()
{
    method = "-";
    if(method === "-")
    {
        console.log("It's subtracting!");
    };
}

function division()
{
    method = "/";
    if(method === "/")
    {
        console.log("It's dividing!");
    };
}

function multiplication()
{
    method = "*";
    if(method === "*")
    {
        console.log("It's multiplying, ELECTRIFYING!");
    };
}



