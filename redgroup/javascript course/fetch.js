let num  = 3

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(data => data.ok ? data.json()
                          : data.statusText)
    .then(console.log)

const fetchData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        if (!response.ok)
            return console.log(response.statusText)

        const data = await response.json()
        return console.log(data)
    } catch (error) {
        console.log(error)
    }
}