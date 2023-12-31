// Pure Functions / Side Efx
const add = ((num1, num2) => { // Pure function. Same inputs yield the same results.
    return num1 + num2;
})

// const sendDataToServer = (() => {}) // Side effect neccessary and acceptable

// console.log(add(1,5)) // = 6
// console.log(add(12,15)) // = 27

const addRandom = ((num1) => { //Not Pure Function. Results may vary.
    return num1 + Math.random()
})
// console.log(addRandom(5)) // = ???

let previousResult = 0;

const addMoreNumbers = ((num1, num2) => {// Side effect by changing a variable defined outside of the function
    const sum = num1 + num2;
    previousResult = sum;
    return sum;
})

// console.log(addMoreNumbers(1,5))

const hobbies = ['Fitness', 'Meal Prep']

const printHobbies = ((h) => { // Side effect caused by printHobbies adding an additional element to hobbies array 
    h.push('Beat Making')
    console.log(h)
})

// printHobbies(hobbies);

//Factory Functions

let multiplier = 1.1;

const createTaxCalculator = ((tax) => { // Factory Function - Receives tax rate from function call 
    // console.log(tax)
    const calculateTax = ((amount) => { // inner function has access to outer functions parameters due to scope. Receives amount via call from calculateVatAmount
        console.log(multiplier)
        return amount * tax * multiplier;
    })
    // console.log(calculateTax)
    return calculateTax; //returns pointer to fucntion used by calculateVatAmount
})

const calculateVatAmount = createTaxCalculator(.19) // passes .19 to createTaxCalculator, wich reutrns a pointer to the function calculateTax which is stored in calculateVatAmount
const calculateIncomeTaxAmount = createTaxCalculator(.25)

multiplier = 1.2;

console.log(calculateVatAmount(100)) // calls caculate tax and passes an argument. caculate tax has access to the variable tax due to scope
console.log(calculateVatAmount(200))

// Closures

let userName = 'Virginia';

const greetUser = (() => { // function uses the latest value of the variable.
    // let name = userName;
    // let name = 'Anna' // local variable is used. 
    console.log('Hi ' + name)
})

let name = 'Bonnie'

userName = 'YardGurl'

greetUser()

// Recursion 

// const powerOf = ((x, n) => { // without recursion
//     let result = 1;

//     for (i = 0; i < n; i++) {
//         result *= x;
//     }

//     return result
// })

const powerOf = ((x, n) => { //Excellent resource to explane the recursive execution of the code below: https://javascript.info/recursion 

    // if (n === 1) { 
    //     return x;
    // }
    // return x * powerOf(x, n - 1); 

    // When the condition n === 1 is met, the call tack operates to clear functions from the stack, with the most recent call at the top and return x. 

    //Order of executuion onece n === 1
    //2 = 2 
    //2 * 2 * 1 = 4 
    //2 * 2 * 2 = 8 

    return n === 1 ? x : x * powerOf(x, n-1) // Minimized code with terinary expression.
})

console.log(powerOf(2,3));//2 * 2 * 2 = 8. Initial call is paused and placed at the bottom of the call stack until the condition n === 1 is truthy. The values for x and n are preserved in memory.

const myself = {
    name: 'Joseph',
    friends: [
        {
            name: 'Kiesha',
            friends: [
                {
                    name: 'Taz',
                    friends: [
                        {
                            name: 'Carl'
                        },
                        {
                            name: 'Macy'
                        }
                    ]
                    
                }
            ]
        },
        {
            name: 'Jill'
        }
    ]

}

const getFriendNames = ((person) => {
    const collectedNames = [];

    if(!person.friends) {
        return [];
    }

    for (const friend of person.friends){
        collectedNames.push(friend.name)
        collectedNames.push(...getFriendNames(friend))
    }

    return collectedNames;
})

console.log(getFriendNames(myself))