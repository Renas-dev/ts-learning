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

/*

lesson 6, interfaces

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

 */

 /*
 
 lesson 7 classes

 class Point{
     x: number;
     y: number;
     draw(){
        // ...   
     }

     getDistance(another: Point) {        
     }
 }

 */

 /*
 
 lesson 8 objects

 class Point {
     x: number;
     y: number;
     draw(){
         console.log('X: ' + this.x +', Y: ' + this.y);
     }

     getDistance(another: Point) {
         //...
     }
 }
//an object is an instance of a class
 let point = new Point();
 point.x = 1;
 point.y = 2;
 point.draw();

*/

/*

lesson 9 constructors

class Point {
    x: number;
    y: number;
        //if u wanna create a point object withouth setting the values u add ? to the parameters
    constructor(x?: number, y?: number){
        this.x = x;
        this.y = y;
    }

    draw(){
        console.log('X: ' + this.x +', Y: ' + this.y);
    }
}
//an object is an instance of a class
let point = new Point(1, 2);
point.draw();

*/

/*

lesson 10 access modifiers in constructors

class Point {
        //if u wanna create a point object withouth setting the values u add ? to the parameters
    constructor(private x?: number, private y?: number){
    }
    //by default any method will be set to public unless stated wise
    draw(){
        console.log('X: ' + this.x +', Y: ' + this.y);
    }
}
//an object is an instance of a class
let point = new Point(1, 2);
point.draw();

*/

/*

lesson 11 properties

class Point {
    constructor(private x?: number, private y?: number) {
   }

    draw() {
        console.log('X: '+ this.x + ', Y: ' + this.y);
    }
    get X() {
        return this.x;
    }

    set X(value) {
        if (value <0)
            throw new console.error('value cannot be less then 0.');
            
    this.x = value;
    }
}

let point = new Point(1, 2);
let x = point.X;
point.draw();

*/

/*

lesson 12 modules*/
//to import our module we have to import + module name + from where the file is located
import { Point } from './point';
let point = new Point(1, 2);
point.draw();