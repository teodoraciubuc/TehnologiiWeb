const getDivisibleSum = (numbers, divisor) => {
    return numbers
        .filter(num => num % divisor === 0)
        .reduce((sum, num) => sum + num, 0);
}

const numbers = [10, 15, 20, 25, 30, 33, 40];
const divisor = 5;

const result = getDivisibleSum(numbers, divisor);
console.log("result:", result);