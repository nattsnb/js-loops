function countSheeps(sheep) {
    let sheepNumber = 0
    for (i = 0; i < sheep.length; i++) {
        const currentSheep = sheep[i]
        if (currentSheep === true) {
            sheepNumber = sheepNumber + 1
        }
    }
    return sheepNumber
}