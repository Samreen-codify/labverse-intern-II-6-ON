function Person() {
  this.age = 0;
  setInterval(() => {
    this.age++; // 'this' refers to Person, not setInterval
    console.log(this.age);
  }, 1000);
}


let user = {
  name: "John",
  age: 30
};

// loop over values
for (let value of Object.values(user)) {
  alert(value); // John, then 30
}
