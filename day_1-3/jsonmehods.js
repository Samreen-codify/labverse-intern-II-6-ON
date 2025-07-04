

let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  spouse: null
};
let json = JSON.stringify(student);
alert(typeof json); // we've got a string!
alert(json);

let meetup = {
  title: "Conference",
  room: {
    number: 23,
    participants: ["john", "ann"]
  }
};
alert( JSON.stringify(meetup) );

let room = {
  number: 23
};

let meetup1 = {
  title: "Conference",
  participants: [{name: "John"}, {name: "Alice"}],
  place: room 
};
room.occupiedBy = meetup1; 
alert( JSON.stringify(meetup1, ['title', 'participants', 'place', 'name', 'number']) );

let user = {
  name: "John",
  age: 25,
  roles: {
    isAdmin: false,
    isEditor: true
  }
};
alert(JSON.stringify(user, null, 2));

// stringified array
let numbers = "[0, 1, 2, 3]";
numbers = JSON.parse(numbers);
alert( numbers[1] ); // 1

let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let meetup2 = JSON.parse(str, function(key, value) {
  if (key == 'date') return new Date(value);
  return value;
});

alert( meetup2.date.getDate() ); 