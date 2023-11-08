console.log('Script is working')

getReversedString('Hello!'); // '!olleH'
getReversedString('Arrays'); // 'syarrA'

function getReversedString(stringInput) {
    stringToArray = stringInput.split("")
    reversedArray = stringToArray.reverse()
    return reversedArray.join("")
}

isPalindrome('Kayak'); // true
isPalindrome('Racecar'); // true
isPalindrome('Was it a cat I saw') // true
isPalindrome('Hello!'); // false

function isPalindrome(isPallindromeInput) {
    insensitiveInput = isPallindromeInput.replaceAll(' ', '').toLowerCase()
    pallindromeOutcome = getReversedString(insensitiveInput)
    return pallindromeOutcome == insensitiveInput
}