console.log('Script is working')

getReversedString('Hello!'); // '!olleH'
getReversedString('Arrays'); // 'syarrA'

function getReversedString(stringInput) {
    const stringToArray = stringInput.split("")
    const reversedArray = stringToArray.reverse()
    return reversedArray.join("")
}

isPalindrome('Kayak'); // true
isPalindrome('Racecar'); // true
isPalindrome('Was it a cat I saw') // true
isPalindrome('Hello!'); // false

function isPalindrome(isPallindromeInput) {
    const insensitiveInput = isPallindromeInput.replaceAll(' ', '').toLowerCase()
    const pallindromeOutcome = getReversedString(insensitiveInput)
    return pallindromeOutcome == insensitiveInput
}