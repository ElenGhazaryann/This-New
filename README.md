# _This New_

## _Literature_

- [F.prototype](https://javascript.info/function-prototype)
- [Prototype methods](https://javascript.info/prototype-methods)
- ["new Function" syntax](https://javascript.info/new-function)
- [Function binding](https://javascript.info/bind)

## _Tasks_

### 1. Calculator Constructor

Create functions for the Calculator class that can do the following:

- Add two numbers.
- Subtract two numbers.
- Multiply two numbers.
- Divide two numbers.

```JS
const calculator = new Calculator();
calculator.add(10, 5);
calculator.subtract(10, 5);
calculator.multiply(10, 5);
calculator.divide(10, 5);
```

[Solution](https://github.com/ElenGhazaryann/This-New/blob/main/calculatorConstructor.js)

### 2. Person

Create a method in the `Person` class which returns how another person's age compares.  
 Given the instances `p1`, `p2` and` p3`, which will be initialized with the attributes
`name` and `age`, return a sentence in the following format:
`{other person name} is {older than / younger than / the same age as} me.`

```JS
const p1 = Person("Samuel", 24)
const p2 = Person("Joel", 36)
const p3 = Person("Lily", 24)
p1.compareAge(p2) ➞ "Joel is older than me."
p2.compareAge(p1) ➞ "Samuel is younger than me."
p1.compareAge(p3) ➞ "Lily is the same age as me."
```

[Solution](https://github.com/ElenGhazaryann/This-New/blob/main/person.js)

### 3. Person Constructor

- Write a `Person` Constructor that initializes `name` and `age` from arguments.
- All instances of Person should initialize with an empty `stomach` array.
- Give instances of Person the ability to `.eat("someFood")` :
- When eating an edible, it should be pushed into the stomach.
- The eat method should have no effect if there are 10 items in the stomach.
- Give instances of Person the ability to `.poop()` :
- When an instance poops, its stomach should empty.
- Give instances of Person a method `.toString()`, it should return a string with name and age . Example: "Mary, 50"

[Solution](https://github.com/ElenGhazaryann/This-New/blob/main/personConstructor.js)

### 4. Baby Constructor

Write a `Baby` constructor subclassing Person.

- Besides name and age , Baby takes a third argument to initialize `favoriteToy` .
- Besides the methods on Person.prototype, babies have the ability to `.play()`
- Should return a string "Playing with x", x being the favorite toy.

[Solution](https://github.com/ElenGhazaryann/This-New/blob/main/baby.js)
