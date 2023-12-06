// Given an integer n, return a counter function. 
// This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).


var createCounter = function(n) {
    
    return function() {
        return n++;
        
    };
};

const counter = createCounter(-2)
 counter() // 10
 counter() // 11
 counter() // 12



// Create a function that gives a personalized greeting. 
// This function takes two parameters: name and owner.



function greet (name, owner) {
    if  (name === owner){
        return  "Hello boss"
    }
        return "Hello guest"
}

// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

// Considering these factors, write a function that tells you if it is possible to get to the pump or not.

// Function should return true if it is possible and false if not.
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    if (distanceToPump <= (fuelLeft * mpg)){
        return true
    }
    return false
    
};

// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

// For example, when the input is green, output should be yellow.

function updateLight(current) {
    if (current === "green"){
        return "yellow"
    }
    else if(current === "yellow"){
        return "red"
    } 
    else {
        return "green"
    }
}

// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
function boolToWord( bool ){
    return bool?
    "Yes": "No"
    }


    // Your task is to create a function that does four basic mathematical operations.

    // The function should take three arguments - operation(string/char), value1(number), value2(number).
    // The function should return result of numbers after applying the chosen operation.

    function basicOp(operation, value1, value2) {
        switch(operation) {
            case '+':
            return value1 + value2;
            case '-':
            return value1 - value2;
            case '*':
            return value1 * value2;
            case '/':
            if(value2 !== 0) {
                return value1 / value2;
            } else {
                return "Cannot divide by zero";
            }
        default:
            return "Invalid operation";
        }
        }