function maps(inputArray){
    let doubledArray = []
    for (let i=0; i<inputArray.length; i++){
        const newNumber = inputArray[i] * 2
        doubledArray.push(newNumber)
    }
    return doubledArray
}