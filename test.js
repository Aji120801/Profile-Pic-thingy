//var ola = 'man';
// string, number, boolean, null, undefined);

//(the primitive types)
const con = null;
let str = 'manCity';
let sittingbourne; //undefined
let isBool = false;
const num = 13;

// declarative 
function myConsoleLog(text) {
    console.log(text)
}

// functional statement
const consoleLog2 = function(text2) {
    console.log(text2);
}

//Other (Array, object)
const arr1 = [10, 11, 12, 13, 14];
const arr2 = ['boy', 'girl','man', 'woman', 'ladies', 'gents'];
const empArr = [];

function myLoop(item) {
    for(let count = 0; count < item.length; count++ ) {
   
    myConsoleLog(item[count])
}
}

myLoop(arr1)
myLoop(arr2);
myLoop(empArr);

// variable, operation, increment (For loop)
// for(let count = 0; count < arr2.length; count++ ) {
//     console.log(arr2[count]);
// }

//console.log(arr2);





// Objects
const obj = {};
const fullObj = {
    name: 'Ola',
    surname: 'Ogun',
    age: 25,

    //   *nested object*
    address: {
        street: 'Eveas Drive',             
        postCode: 'ME10 3FD'
    },
    hobbies: {
        sport: 'Football',
        sport2: 'Swimming',
        major: {
            tennis: 'Wimbledon'
        }
    }
}

const myObjectLoop = function(obj) {
    for(let item in obj) {
         console.log(obj[item]);
      }
}

myObjectLoop(fullObj);

// Arrow function
const myObjectLoop2 = (obj) => {
    for(let item in obj) {
        console.log(obj[item]);
     }
}
//console.log(fullObj.hobbies.major.tennis)

myObjectLoop2()

// variable in theItem) (for in)


// function consoleLog(text) {
//     console.log(text)
// }

// // functional statement
// const consoleLog2 = function(text2) {
//     console.log(text2);
// }

// conditional sentences (if statements)
const number = 10;
const num22 = '11';
if(number === 10) {
// action
consoleLog();
} else {
   // console.log('false');
}

// ternary
number === 11 ? consoleLog('Not eleven') : consoleLog2('Not true');


// functions
// declarative function 




