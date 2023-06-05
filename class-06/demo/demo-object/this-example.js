const dog = {
  name: 'Spot',
  age: 2,
  color: 'white with black spots',
  humanAge: function () {
    console.log(`${this.name} is ${this.age * 7} in human years`);
  }
}

console.log(dog.name)

dog.humanAge();
// this = dog  , bối cảnh thực thi code

// arrow function: không có context
// Spot is 14 in human years
