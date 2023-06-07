const num = 5

if (num === 5) { // must use {} for multiple lines 
    num += 5
    console.log('if')
}
else if (num == '10')
    console.log(num % 2 === 0 ? 'hey' : 'ho') // ternary operator
             //   statement   ? if true : if false
else
    console.log('else')

function sum(num1, num2) {
    return num1 + num2
}

const arrow = (a, b) => a + b

const price = (carBrand) => {
    switch (carBrand) {
        case 'BMW':
            return '100 000$'
        case 'Audi':
            return '200 000$'
        case 'Porshe':
            return '300 000$'

        default:
            return "Нет такой машины"
    }
}
