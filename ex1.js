console.log('Script is working')

getSquaredNumbers([1, 2, 3, 4, 5]); // [1, 4, 9, 16, 25]
getSquaredNumbers([6, 7, 8, 9, 10]); // [36, 49, 64, 81, 100]

const numbers = [1, 2, 3];
console.log(getSquaredNumbers(numbers)); // [1, 4, 9]
console.log(numbers); // [1, 2, 3]

function getSquaredNumbers(numbersInput) {
    squeredArray = []
    arrayLength = numbersInput.length
    for (let i=0; i<=arrayLength; ++i) {
        squeredArray.push(numbersInput[i]*numbersInput[i])
    }
    return squeredArray
}