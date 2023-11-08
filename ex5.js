console.log('Script is working')

const peopleArray = [
    {
        name: 'Adam',
        age: 20
    },
    {
        name: 'Amanda',
        age: 5
    },
    {
        name: 'John',
        age: 75
    },
    {
        name: 'Dave',
        age: 15
    }
]

console.log(getAgeDifference(peopleArray)); // 70

function getYoungestPerson(peopleArray) {
    let youngestArray = peopleArray.sort((c1, c2) => (c1.age < c2.age) ? 1 : (c1.age > c2.age) ? -1 : 0);
    return youngestArray[0].age
}



function getOldestPerson(peopleArray) {
    let oldestArray = peopleArray.sort((c1, c2) => (c1.age > c2.age) ? 1 : (c1.age < c2.age) ? -1 : 0);
    return oldestArray[0].age;
}

function getAgeDifference(peopleArray) {
    console.log(getOldestPerson(peopleArray) - getYoungestPerson(peopleArray))
}