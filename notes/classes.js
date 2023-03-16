// Constructing the blueprint for a new student
// `this` inside of a class refers to the individual instance of a class
class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
    this.tardies = 0;
  }
  // instance method
  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }
  // instance method
  markLate() {
    this.tardies += 1;
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times.`;
  }
}

// Creates an instance of our Student class
let firstStudent = new Student("Arianna", "lillie", 3);
let secondStudent = new Student("Sonu", "Mori", 5);

firstStudent.markLate();
firstStudent.markLate();
firstStudent.markLate();
console.log(firstStudent);
