console.log('Script is working')

getReversedString('Hello!'); // '!olleH'
getReversedString('Arrays'); // 'syarrA'

function getReversedString(stringInput) {
    stringToArray = stringInput.split("")
    reversedArray = stringToArray.reverse()
    return reversedArray.join("")
}