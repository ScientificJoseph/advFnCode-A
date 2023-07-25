const add = ((num1, num2) => { // Pure function. Same inputs yield the same results.
    return num1 + num2;
})

// const sendDataToServer = (() => {}) // Side effect neccessary and acceptable

console.log(add(1,5)) // = 6
console.log(add(12,15)) // = 27

const addRandom = ((num1) => { //Not Pure Function. Results may vary.
    return num1 + Math.random()
})
console.log(addRandom(5)) // = ???

let previousResult = 0;

const addMoreNumbers = ((num1, num2) => {// Side effect by changing a variable defined outside of the function
    const sum = num1 + num2;
    previousResult = sum;
    return sum;
})

console.log(addMoreNumbers(1,5))

const hobbies = ['Fitness', 'Meal Prep']

const printHobbies = ((h) => { // Side effect caused by printHobbies adding an additional element to hobbies array 
    h.push('Beat Making')
    console.log(h)
})

printHobbies(hobbies);