
/*
let now = new Date();
alert( now ); // current date and time

// 0 means 01.01.1970 UTC+0
let Jan01_1970 = new Date(0);
alert( Jan01_1970 );
// now add 24 hours, get 02.01.1970 UTC+0
let Jan02_1970 = new Date(24 * 3600 * 1000);
alert( Jan02_1970 );

new Date(2011, 0, 1, 0, 0, 0, 0); // 1 Jan 2011, 00:00:00
new Date(2011, 0, 1); // the same, hours etc are 0 by default

alert( date.getHours() );
// the hour in UTC+0 time zone (London time without daylight savings)
alert( date.getUTCHours() );

let date = new Date(2013, 0, 32); // 32 Jan 2013 ?!?
alert(date); // ...is 1st Feb 2013!

let date = new Date(2016, 1, 28);
date.setDate(date.getDate() + 2);
alert( date ); // 1 Mar 2016

let date = new Date();
date.setSeconds(date.getSeconds() + 70);
alert( date ); // shows the correct date

let date = new Date(2016, 0, 2); // 2 Jan 2016
date.setDate(1); // set day 1 of month
alert( date );
date.setDate(0); // min day is 1, so the last day of the previous month is assumed
alert( date ); // 31 Dec 2015

let date = new Date(2012, 0, 3);  // 3 Jan 2012
alert( getWeekDay(date) ); 

let date = new Date(2012, 0, 3);  // 3 Jan 2012
alert( getLocalDay(date) );    

alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)
*/