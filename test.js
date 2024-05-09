const readline = require('readline');

class Calculator {
    constructor() {
        this.result = 0;
    }

    add(a, b) {
        this.result = a + b;
        return this.result;
    }

    subtract(a, b) {
        this.result = a - b;
        return this.result;
    }

    multiply(a, b) {
        this.result = a * b;
        return this.result;
    }

    divide(a, b) {
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        this.result = a / b;
        return this.result;
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const calculator = new Calculator();

rl.question('Enter the first number: ', (answer1) => {
    rl.question('Enter the second number: ', (answer2) => {
        rl.question('Enter the operator (+, -, *, /): ', (operator) => {
            let result;
            const num1 = parseFloat(answer1);
            const num2 = parseFloat(answer2);

            switch (operator) {
                case '+':
                    result = calculator.add(num1, num2);
                    break;
                case '-':
                    result = calculator.subtract(num1, num2);
                    break;
                case '*':
                    result = calculator.multiply(num1, num2);
                    break;
                case '/':
                    result = calculator.divide(num1, num2);
                    break;
                default:
                    console.log('Invalid operator');
                    rl.close();
                    return;
            }

            console.log(`The result is: ${result}`);
            rl.close();
        });
    });
});