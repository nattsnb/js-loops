function squareSum(numbers){
    let sumOfSquares = 0
    for (i=0; i<numbers.length; i++) {
        const squaredNumber = numbers[i] * numbers[i]
        sumOfSquares = sumOfSquares + squaredNumber
    }
    return sumOfSquares
}