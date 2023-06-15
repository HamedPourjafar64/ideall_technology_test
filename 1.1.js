// Declrative function to process an array of numbers
function decProcessor(inputArr, formatterFunction) {
    return inputArr.map(formatterFunction);
}   

const inputArr = [1, 2, 3, 4, 5];
const formatterFunction = (num) => num * 2;

console.log('Processed output: ', decProcessor(inputArr, formatterFunction));

// Imperative function to process an array of numbers
function impProcessor(inputArr, formatterFunction) {
    const outputArr = [];
    for (let i = 0; i < inputArr.length; i++) {
        outputArr.push(formatterFunction(inputArr[i]));
    }
    return outputArr;
}

console.log('Processed output: ', impProcessor(inputArr, formatterFunction));