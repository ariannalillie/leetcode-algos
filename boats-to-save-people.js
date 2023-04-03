const numRescueBoats = (people, limit) => {
    let boats = 0;
    let peopleOnBoat = 0
    let weight = 0;
    people.forEach((person, index) => {
        if (!(weight < limit) || peopleOnBoat === 2) {
            peopleOnBoat === 0;
            weight = 0;
            boats++
            return;
        }
        weight += index
        peopleOnBoat ++
    })
    return boats
};

const people = [3,2,2,1];
const limit = 3;
console.log(numRescueBoats(people, limit)) // Output: 3
// Explanation: 3 boats (1, 2), (2) and (3)