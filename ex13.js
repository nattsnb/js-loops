function invert(array) {
    let invertedArray = []
    for (let i=0; i<array.length; ++i){
        const number = array[i]
        const invertedNumber = -number
        invertedArray.push(invertedNumber)
    }
    return invertedArray
}