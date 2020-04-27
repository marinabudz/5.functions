//CLASSWORK
const checkNumber = num => {
    if (num > 10) {
        return num / 2
    } else {
        return " Too small number "
    }
}
let insertNum = +prompt('num: ')
console.log(checkNumber(insertNum))

// HOMEWORK

//1. Напишіть функцію, що повертає куб числа.
const calcCube = num => num ** 3;
console.log(calcCube())

//2. Напишіть функцію, що додає перше число до другого і ділить результат на третє число.
const calcOperation = (a, b, c) => (a + b) / c;
console.log(calcOperation(-2, 3, 2));

//3. Напишіть функцію, що приймає число від 1 до 7 і повертає відповідну назву дня (українською).
const showDay = number => {
    switch (number) {
        case 1:
            return 'Понеділок'
            break;
        case 2:
            return 'Вівторок'
            break;
        case 3:
            return 'Середа'
            break;
        case 4:
            return 'Четвер'
            break;
        case 5:
            return "П'ятниця"
            break;
        case 6:
            return 'Субота'
            break;
        case 7:
            return 'Неділя'
            break;
        default:
            return "Out of scope"
    }
};
console.log(showDay(2));

//4. Реалізуйте функцію знаходження факторіала
const calcFactorial = number => {
    let factorial;
    if (number < 0) {
        return -1;
    } else if (number === 0) {
        return 1
    } else {
        factorial = number * calcFactorial(number - 1)
        return factorial;
    }

}
console.log(calcFactorial(5));

//5. Напишіть функцію яка отримує години хвилини та секунди
//і повертає це число в секундах.

// якщо не в межах одного дня 
const calcSeconds = (hours, minutes, seconds) => {
    let totalSeconds = hours * minutes * seconds;
    return `The total result is ${totalSeconds} seconds`
}

// якщо в межах одного дня 
const calcSecondsDay = (hours, minutes, seconds) => {
    if (hours <= 23 && minutes <= 59 && seconds <= 59) {
        let totalSeconds = hours * minutes * seconds;
        return `The total result is ${totalSeconds} seconds`
    } else {
        return 'Numbers exceed one day!'
    }

}
console.log(calcSeconds(40, 100, 78));
console.log(calcSecondsDay(24, 57, 23))


//6. Написати функцію , яка приймає секунди, і 
//перетворює їх у години хвилини та секунди у форматі «гг:хх:сс». 
//якщо кількість годин більша за 23.59.59 - вивести повідомлення "Більше одного дня". 

const calcDay = (seconds) => {
    if (seconds > 24 * 3600) {
        return 'Exceeded one day'
    } else {
        let hours = Math.floor(seconds / 3600);
        let minutes = Math.floor((seconds % 3600) / 60);
        let second = (seconds % 3600) % 60;
        return `The total result is ${hours} : ${minutes} : ${second} `
    }
};

console.log(calcDay(100000));






//PRACTICE 

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



// GLOBAL and LOCAl Scope VARIABLES
const skyColor = () => {
    color = 'blue';
    console.log(color); // blue 
};
// calling function skyColor()
//return blue 
// type color -> return blue  
// reason -> JS автоматично оголосив змінну COLOR як GLOBAL після виклику функції


const logSkyColor = () => {
    let color = 'blue';
    console.log(color); // blue 
};
// calling function logSkyColor()
//return blue 
// type color -> ReferenceError: Can't find variable: color  
// reason -> змінна COLOR була оголошена як LOCAL в середині функції і відповдно поза межами функції такої змінної не існує