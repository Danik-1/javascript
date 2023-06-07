const user1 = {
    name: 'Max',
    age: 24,
    city: 'New-York'
}

const user2 = {
    name: 'Jane',
    age: 28,
    city: 'Los-Angeles'
}

const couple = { ...user1, ...user2, }

function getCoupleName({name, ...rest}) {
    return rest
}

const cities = ['Paris', 'Barcelona', 'London']
const [city1, city2, city3] = cities

const arr = [1, 2, 3, 4, 5, 6]

console.log(arr.at(-1))