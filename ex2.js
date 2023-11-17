console.log('Script is working')

getReversedString('Hello!'); // '!olleH'
getReversedString('Arrays'); // 'syarrA'

function getReversedString(stringInput) {
    const stringToArray = stringInput.split("")
    const reversedArray = stringToArray.reverse()
    return reversedArray.join("")
}