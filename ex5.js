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


getAgeDifference(peopleArray); // 70

const people = [{name:"str", age:0}]

function getYoungestPerson(people) {
    let youngestPerson = people[0].age
    for (let i=1; i < people.length; ++i){
        const isYoungerPersonAge = people[i].age
        if (isYoungerPersonAge < youngestPerson) {
            youngestPerson = isYoungerPersonAge
        }
    }
    return youngestPerson

}

function getOldestPerson(people) {
    let oldestPerson = people[0].age
    for (let i=1; i < people.length; ++i){
        const isOlderPersonAge = people[i].age
        if (isOlderPersonAge > oldestPerson) {
            oldestPerson = isOlderPersonAge
        }
    }
    return oldestPerson
}

function getAgeDifference(people) {
    return getOldestPerson(people) - getYoungestPerson(people)
}