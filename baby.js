function Person(name, age) {
  this.name = name;
  this.age = age;
}
function Baby(name, age, favoriteToy) {
  this.name = name;
  this.age = age;
  this.favoriteToy = favoriteToy;
}

Baby.prototype.play = function () {
  return `Playing with ${this.favoriteToy}`;
};

let baby1 = new Baby("Ross", 4, "lego");
let baby2 = new Baby("Jenny", 6, "barbie");
console.log(baby2.play());
