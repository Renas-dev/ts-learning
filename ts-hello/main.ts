/*

Lesson 1, understanding that typescript is similiar to jave script

function log(message) {
     console.log(message);
 }

 var message = 'Hello World';

log(message);  

*/


/*

Lesson 2, Declaring Variables

var number = 1;
let count =2;

function doSomething(){
    for(let i = 0; i < 5; i++ ) {
        console.log(i);
    }
    console.log('Finally: ' + i);
}

doSomething(); 

*/

/*

lesson 3, Types  
let a: number; //any integer or floating point numbers
let b: boolean; //true or false
let c: string; //letters or words
let d: any; // can be used to store any type
let e: number[] = [1, 2, 3,]; //arrays
let f: any[] = [1, true, 'a', false]// any can be used for array's too but its bad practice and avoid this

enum Color {Red = 0, Green = 1, Blue = 2, Purple = 3 };
let backgroundColor = Color.Red;

*/

/*

lesson 4, type assertions
let message;
message = 'abc';
let endsWithC = (<string>message).endsWith('c');  //2 ways of using TS build in functions with an any type let.
let alternativeWay = (message as string).endsWith('c');

*/

/* 

lesson 5, arrow functions

let log = function(message) {
    console.log(message);
} //Javescript of using functions

let doLog = (message) => {
    console.log(message);
} //Typescript arrow function

let onelineLog = (message) => console.log(message);
//if the function only has one line u can make it look cleaner.

let onlineEmptyLog = () => console.log();
//if u don't have any parameters u can one line it too

*/

/*lesson 6, interfaces */

interface Point { 
// when using interaces always use Pascal naming convetion first letter capatalized
    x: number,
    y: number
}

 let drawPoint = (point: Point) => {
     //...
 } 

 drawPoint({
     x: 1,
     y: 2
 }) 









