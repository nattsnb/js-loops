function positiveSum(arr){
    let sum = 0
    for (let i=0; i<arr.length; i++) {
        const number = arr[i]
        if (number >= 0){
            sum = sum + number
        }
    }
    return sum
}