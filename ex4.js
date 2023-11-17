console.log('Script is working')

const lettersObject = countLetters('The quick brown fox jumps over the lazy dog');

console.log(lettersObject);


function countLetters(sentenceInput) {
    const result = {}
    const insensitiveInput = sentenceInput.replaceAll(' ', '').toLowerCase()
    const stringToArray = insensitiveInput.split('')
    const arrayLength = stringToArray.length
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    const alphabetLength = alphabet.length
    for (let i=0; i<=alphabetLength; i++) {
        let letter = alphabet[i]
        let howMany = 0
        let index = arrayLength -1
        while (index >= 0) {
            const findLetter = stringToArray[index]
            index = index-1
            if (findLetter === letter) {
                howMany = howMany + 1
            }
            result[letter] = howMany
        }
    }
    return result
}