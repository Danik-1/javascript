const cities = ['Moscow', 'Denver']

cities.push('Seoul') // add to the end
cities.unshift('Tokyo') // add to the begin

const cities2 = ['Paris', 'Barcelona']

cities.concat(cities2) // concatenate two arrays to the new array
cities.slice(1, 3) // elements from 1 to 3 - 1
cities.splice(1, 3, cities2) // deletes elements from 1 to 3 
                             // and replaces them with cities2

cities.find(city => city === 'Paris') // find first with returned true
cities.filter(city => city === 'Paris') // delete all with returned false

const cart = [
    {
        name: 'First',
        price: 400,
    },
    {
        name: 'Second',
        price: 200,
    }
]

const sum = cart.reduce((acc, product) => acc += product.price, 0)

const personInfo = {
    name: 'Steve',
    lastName: 'Jobs',
    age: 24,
}

console.log(Object.values(personInfo))
console.log(Object.keys(personInfo))
console.log(Object.assign(personInfo, { isOwner: true }))
