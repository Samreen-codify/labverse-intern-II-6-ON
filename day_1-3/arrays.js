//arrays (5.4)
/*
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