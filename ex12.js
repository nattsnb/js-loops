function maps(x){
    let newX = []
    for (let i=0; i<x.length; i++){
        const newNumber = x[i] * 2
        newX.push(newNumber)
    }
    return newX
}