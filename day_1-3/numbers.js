

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