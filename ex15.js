function arrayPlusArray(arr1, arr2) {
    return sum(arr1) + sum(arr2); //something went wrong
}

function sum (numbers) {
    let sum = 0
    for (let i=0; i<numbers.length; ++i){
        const number = numbers[i]
        sum = sum + number
    }
    return sum
}