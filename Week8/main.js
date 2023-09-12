function calculate(firstNum, secondNum, operation) {
    if (firstNum === undefined) {
        return "First Number Not Found";
    }

    if (secondNum === undefined) {
        return "Second Number Not Found";
    }
    if (operation === undefined) {
        operation = "add";
    }

    switch (operation) {
        case "add": 
            return firstNum + secondNum;
        case "subtract":
            return firstNum - secondNum;
        case "multiply":
            return firstNum * secondNum;
        default:
            return "Invalid Operation";
    }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600