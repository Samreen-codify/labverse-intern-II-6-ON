/*let samreen = {
  name: "samreen",
  sayHi: function() {
    alert("Hi samreen!");
  }
};
samreen.sayHi(); 


let str = "Hello";
alert( str.toUpperCase() );

let n = 1.23456;
alert( n.toFixed(2) );

alert( typeof 0 ); // "number"
alert( typeof new Number(0) ); // "object"

let str = "Hello";
str.test = 5;
alert(str.test);

let str = "Hello";
str.test = 5; // (*)
alert(str.test);

let billion = 1e9;  // 1 billion
alert( 7.3e9 ); 

e3 === 1 * 1000; // e3 means *1000
1.23e6 === 1.23 * 1000000; // e6 means *1000000

let mcs = 1e-6; // five zeroes to the left from 1

// -3 divides by 1 with 3 zeroes
1e-3 === 1 / 1000; // 0.001

// -6 divides by 1 with 6 zeroes
1.23e-6 === 1.23 / 1000000; // 0.00000123

// an example with a bigger number
1234e-2 === 1234 / 100; // 12.34, decimal point moves 2 times

let num = 255;
alert( num.toString(16) );  // ff
alert( num.toString(2) );   // 11111111
alert( 123456..toString(36) ); // 3d7o

let num1 = 1.23456;
alert( Math.round(num1 * 100) / 100 ); // 1.23456 -> 123.456 -> 123 -> 1.23

let num2 = 12.36;
alert( num2.toFixed(1) ); // "12.4"

alert( 0.1 + 0.2 == 0.3 ); // false
alert( 0.1 + 0.2 ); // 0.30000000000000004
alert( 0.1.toFixed(20) ); // 0.10000000000000000555

alert( isNaN(NaN) ); // true
alert( isNaN("str") ); // true

alert( isFinite("15") ); // true
alert( isFinite("str") ); // false, because a special value: NaN
alert( isFinite(Infinity) ); // false, because a special value: Infinity

alert( parseInt('100px') ); // 100
alert( parseFloat('12.5em') ); // 12.5

alert( parseInt('12.3') ); // 12, only the integer part is returned
alert( parseFloat('12.3.4') ); // 12.3, the second point stops the reading

alert( Math.random() );

alert( Math.max(3, 5, -10, 0, 1) ); 
alert( Math.min(1, 2) ); 

alert( Math.pow(2, 10) ); 

alert( Math.sqrt(9) ); 

alert( Math.round(6.35 * 10) / 10 );

alert( random(1, 5) );
alert( randomInteger(1, 5) );


// String (5.3)

let single = 'single-quoted';
let double = "double-quoted";
let backticks = `backticks`;

function sum(a, b) {
  return a + b;
}
alert(`1 + 2 = ${sum(1, 2)}.`); 

let guestList1 = `Guests:
 * John
 * Pete
 * Mary
`;
alert(guestList1); 

let guestList2 = "Guests: *John";                           //error if break line like above...can use /n instead

alert( 'I\'m the Walrus!' );  // I'm the Walrus!

alert( `My\n`.length ); // 3........bcuz /n is counted as a single character

let str = `Hello`;
// the first character
alert( str[0] ); // H
alert( str.at(0) ); // H
// the last character
alert( str[str.length - 1] ); // o
alert( str.at(-1) );

let str = 'Hi';
str = 'h' + str[1]; // cannot change the string so replace the string with a new one
alert( str ); // hi

alert( 'samreen'.toUpperCase() ); // SAMREEN
alert( 'SaMREEN'.toLowerCase() ); // samreen

let str = 'Widget with id';

alert( str.indexOf('id', 2) ) // 12.................2 IS POSITION TO SEARCH FROM,IS OPTIONAL

alert( "Widget".includes("id") ); // true
alert( "Widget".includes("id", 3) ); // false, from position 3 there is no "id"

alert( "Widget".startsWith("Wid") ); // true, "Widget" starts with "Wid"
alert( "Widget".endsWith("get") ); // true, "Widget" ends with "get"alert( "Widget".startsWith("Wid") ); // true, "Widget" starts with "Wid"
alert( "Widget".endsWith("get") ); // true, "Widget" ends with "get"

let str = "stringify";
alert( str.slice(0, 5) ); // 'strin', the substring from 0 to 5 (not including 5)
alert( str.slice(0, 1) ); // 's', from 0 to 1, but not including 1, so only character at 0

ucFirst("john") == "John"; // true, the first character is uppercased

truncate("Hi everyone!", 20) == "Hi everyone!"

alert( extractCurrencyValue('$120') === 120 ); // true


//arrays (5.4)

let fruits = ["Apple", "Orange", "Plum"];
alert( fruits[0] ); 
alert( fruits[1] ); 
alert( fruits[2] );

// mix of values,they can store any type of values
let arr = [ 'Apple', { name: 'John' }, true, function() { alert('hello'); } ];
// get the object at index 1 and then show its name
alert( arr[1].name ); // John
// get the function at index 3 and run it
arr[3](); // hello

let fruits1 = ["Apple", "Orange", "Plum"];        //get last element
// same as fruits[fruits.length-1]
alert( fruits1.at(-1) ); 

let fruits = ["Apple", "Orange", "Pear"];
alert( fruits.pop() ); // remove "Pear" and alert it
alert( fruits ); // Apple, Orange

let fruits = ["Apple", "Orange", "Pear"];
alert( fruits.shift() ); // remove Apple and alert it
alert( fruits ); // Orange, Pear

let fruits = ["Orange", "Pear"];
fruits.unshift('Apple');
alert( fruits ); // Apple, Orange, Pear

let fruits = ["Apple"];
fruits.push("Orange", "Peach");
fruits.unshift("Pineapple", "Lemon");
// ["Pineapple", "Lemon", "Apple", "Orange", "Peach"]
alert( fruits );

let fruits = ["Apple", "Orange", "Plum"];
// iterates over array elements
for (let fruit of fruits) {               //of is good for arrays
  alert( fruit );
}

let arr = ["Apple", "Orange", "Pear"];
for (let key in arr) {                           // in is good for objects but bad for arrays
  alert( arr[key] ); // Apple, Orange, Pear
}

let fruits = [];
fruits[123] = "Apple";
alert( fruits.length ); // 124

let arr = [1, 2, 3, 4, 5];
arr.length = 2; // truncate to 2 elements
alert( arr ); // [1, 2]
arr.length = 5; // return length back
alert( arr[3] ); // undefined: the values do not return

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
alert( matrix[0][1] ); // 2, the second value of the first inner array
 */