console.log('Script is working')

const lettersObject = countLetters('The quick brown fox jumps over the lazy dog');

console.log(lettersObject);


// function countLetters(sentenceInput) {
//     insensitiveInput = sentenceInput.replaceAll(' ', '').toLowerCase()
//     stringToArry = insensitiveInput.split("")
//     arrayLength = stringToArry.length
//     alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
//     for (let i=0; i<=25; i++) {
//         howMany = []
//         for (let u=0; u<=(arrayLength-1); u++) {
//             if (stringToArry[u] == alphabet[i]) {
//                 howMany.push[1]
//             }
//         }
//         console.log(alphabet[i] + ': ' + howMany.length)
//         }
// }

function countLetters(sentenceInput) {
    insensitiveInput = sentenceInput.replaceAll(' ', '').toLowerCase()
    stringToArry = insensitiveInput.split("")
    arrayLength = stringToArry.length
    alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    for (let i=0; i<=25; i++) {
        howMany = []
        for (let u=0; u<=(arrayLength-1); u++) {
            if (stringToArry[u] === alphabet[i]) {
                howMany.push[1]
            }
        }
        console.log(alphabet[i] + ': ' + howMany.length)
        }
}