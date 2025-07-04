
// String (5.3)
/*
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
 */