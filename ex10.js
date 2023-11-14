function digitize(n) {
    const numberAsString = n.toString()
    const numberAsStringArray = numberAsString.split("")
    let numberArray = []
    for (let i = 0; i < numberAsStringArray.length; i++) {
        const newNumber = Number(numberAsStringArray[i])
        numberArray.push(newNumber)
    }
    return numberArray.reverse()
}