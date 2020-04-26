function sayName(name) {
    message = `Hello dear ${name}`
    console.log(message)
};
// will show that there is no such variable as MESSAGE 
// console.log(message)

// calling function which has the variable
sayName('Ostap');

// now it will show the message 
// це тому що не оголршувалась змінна message локально 
//тобто не було написано let тому js  оголошує сам
// message як глобальну тобто вона існує поза функцією 
console.log(message)

//function declaration 
function helloUser(user) {
    return 'hello ' + user
};
//function expression 
let newFunction = function (a, b) {
    return a + b
}

// // функція яка сама себе викликає
// (function sum() {
//     console.log('функція яка сама себе викликає')
// })();


// CLASSWORK
let checkNumber = num => {
    if (num > 10) {
        return num / 2
    } else {
        return " To small number "
    }
}
let insertNum = +prompt('num: ')
console.log(checkNumber(insertNum))