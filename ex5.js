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
    let youngestPersonAge = people[0].age
    for (let i=1; i < people.length; ++i){
        const nextYoungerPersonAge = people[i].age
        if (nextYoungerPersonAge < youngestPersonAge) {
            youngestPersonAge = nextYoungerPersonAge
        }
    }
    return youngestPersonAge

}

function getOldestPerson(people) {
    let oldestPersonAge = people[0].age
    for (let i=1; i < people.length; ++i){
        const nextOlderPersonAge = people[i].age
        if (nextOlderPersonAge > oldestPersonAge) {
            oldestPersonAge = nextOlderPersonAge
        }
    }
    return oldestPersonAge
}

function getAgeDifference(people) {
    return getOldestPerson(people) - getYoungestPerson(people)
}