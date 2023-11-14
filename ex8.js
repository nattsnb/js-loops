function abbrevName(name){
    const words = name.split(" ")
    const firstNameArray = words[0].split("")
    const firstInitial = firstNameArray[0].toUpperCase()
    const lastNameArray = words[1].split("")
    const lastInitial = lastNameArray[0].toUpperCase()
    return firstInitial + "." + lastInitial
}