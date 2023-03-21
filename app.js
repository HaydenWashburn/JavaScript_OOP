console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
class person {
  constructor(name, pets, residence, hobbies) {
    this.name = name;
    this.pets = pets;
    this.residence = residence;
    this.hobbies = hobbies;
  }
  addHobby(hobby) {
    this.hobbies.push(hobby);
  }
  removeHobby(hobbyRm) {
    let foundEl = this.hobbies.indexOf(hobbyRm);
    this.hobbies.splice(foundEl, 1);
  }

  //   removeHobbyFilt(hobbyRmFi) {
  //     this.hobbies = this.hobbies.filter((e) => {
  //       return e != hobbyRmFi;
  //     });
  //   }

  greeting() {
    console.log(`Hello ${this.name}, welcome to existence.`);
  }
}

// Exercise 2 Section
class coder extends person {
  constructor(name, pets, residence, hobbies) {
    super(name, pets, residence, hobbies);

    this.occupation = "Full Stack Web Developer";
  }

  greeting() {
    console.log(
      `My name is ${this.name} and I am your friendly neighborhood ${this.occupation}`
    );
  }
}

// Exercise 3 Section
const Hayden = new person("Hayden", 2, "Birmingham", [
  "Video games",
  "Working Out",
  "Playing Guitar",
]);

const otherGuy = new coder("Peter Parker", 0, "New York", [
  "Swinging around town",
]);

console.log(Hayden);
console.log(otherGuy);
Hayden.greeting();
otherGuy.greeting();

// Exercise 4 Section

class calculator {
  result = 0;
  add(a, b) {
    this.result = a + b;
    return this.result;
  }

  subtract(a, b) {
    this.result = a - b;
    return this.result;
  }

  multiply(a, b) {
    this.result = a * b;
    return this.result;
  }

  divide(a, b) {
    this.result = a / b;
    return this.result;
  }

  displayResult(){
    console.log(this.result)
  }
}

let calc = new calculator;

calc.add(2,5)
calc.displayResult()
calc.subtract(123,23)
calc.displayResult()
calc.multiply(23,43)
calc.displayResult()
calc.divide(22,2)
calc.displayResult()