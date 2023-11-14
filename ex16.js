var countSheep = function (num){
    let stringToReturn = ""
    if (num > 0) {
        for (let i=0; i<num; ++i){
            stringToReturn = stringToReturn.concat(i+1 + " sheep...")
        }
    }
    return stringToReturn
}