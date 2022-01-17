function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}

Person.prototype.eat = function (food) {
  if (this.stomach.length < 10) {
    this.stomach.push(food);
  } else {
    console.log("Is not hungry");
  }
};
Person.prototype.poop = function () {
  this.stomach = [];
};
Person.prototype.toString = function () {
  console.log(this.name, this.age);
};

let obj = new Person("Joe", 32);

obj.eat("Chocolate");
obj.eat("Pizza");
obj.eat("Burger");

console.log(obj.stomach);
obj.poop();
console.log(obj.stomach);

obj.toString();
