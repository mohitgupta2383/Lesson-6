class Person{
    constructor(givenName, familyName, age){
    this.giveName = givemName;
    this.familyName = familyName;
    this.age = age;

    }
    getFullName() {
        return `${this.givenName} ${this.familyName}`
    }

        increaseAge(number) {
            this.age+= number;
        }
    
        getDescription(){
            return this.getFullName() + " is " + this.age + " years old";
                }
            }

let me = new Person("Mohit", "Gupta",23);
let you = new Person("Luke", "Parker", 19);

me.givenName = "Mohit";

console.log(me);
console.log(you);
