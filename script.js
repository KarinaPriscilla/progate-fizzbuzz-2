const main = document.getElementById('main')
const fizzbuzz = () => {
    const number    = document.getElementById('number')
    const input     = number.value
    const output    = document.createElement('p')
    if (input === '0') {
        output.innerHTML = 'invalid input'
    } else {
        if (input % 3 === 0) {
            if (input % 5 === 0) {
                output.innerHTML = 'FizzBuzz!'
            } else {
                output.innerHTML = 'Fizz!'
            }
        } else if (input % 5 === 0) {
            output.innerHTML = 'Buzz!'
        } else {
            output.innerHTML = input
        }
    }
    main.append(output)
    number.value = ''
}
