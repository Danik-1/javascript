const body = document.querySelector('body')
body.style.backgroundColor = "#1C1B22"
body.style.color = 'white'

const heading = body.querySelector('.heading')
heading.textContent = 'Hello'

const button = body.querySelector('button')
button.addEventListener('click', () => {
    const color = prompt('What color')
    heading.style.color = color
})