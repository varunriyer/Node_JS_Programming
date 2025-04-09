class Character {
    constructor(speed) {
        this.speed = speed
    }
    move = () => console.log(`I'm moving at the speed of ${this.speed}!`)
}

class Enemy extends Character {
    constructor(name, phrase, power, speed) {
        super(speed)
        this.name = name
        this.phrase = phrase
        this.power = power
    }
    sayPhrase = () => console.log(this.phrase)
    attack = () => console.log(`I'm attacking with a power of ${this.power}!`)
}


class Alien extends Enemy {
    constructor(name, phrase, power, speed) {
        super(name, phrase, power, speed)
        this.species = "alien"
    }
    fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!")
}

class Bug extends Enemy {
    constructor(name, phrase, power, speed) {
        super(name, phrase, power, speed)
        this.species = "bug"
    }
    hide = () => console.log("You can't catch me now!")
}

class Robot extends Enemy {
    constructor(name, phrase, power, speed) {
        super(name, phrase, power, speed)
        this.species = "robot"
    }
    transform = () => console.log("Optimus prime!")
}


const alien1 = new Alien("Ali", "I'm Ali the alien!", 10, 50)
const alien2 = new Alien("Lien", "Run for your lives!", 15, 60)
const bug1 = new Bug("Buggy", "Your debugger doesn't work with me!", 25, 100)
const bug2 = new Bug("Erik", "I drink decaf!", 5, 120)
const robot1 = new Robot("Tito", "I can cook, swim and dance!", 125, 30)
const robot2 = new Robot("Terminator", "Hasta la vista, baby!", 155, 40)


alien1.move();
robot1.attack();

/* Remember the below in JavaScript Inheritence 
- A class can only have one parent class to inherit from. You can't extend from multiple classes directly.
- The inheritence chain can be extended as much as you want. 
- When a child class inherits any properties from a parent class, it must first assign the parent propeties calling the 
super() function before assigning it's own properties or it gives an error. 
- When inheriting, all parent methods and properties are inherited by the children and we can;t decide specifically
what to choose from a parent class
- Children classes can override their parent's properties and methods
*/

//Creating a class to show children classes can override parent properties
class OverrideAlien extends Enemy {

    #birthYear //# is used to declare private properties. Default in JS everything is public.    

    constructor(name, phrase, power, speed, birthYear) {
        super(name, phrase, power, speed)
        this.species = "alien";
        this.#birthYear = birthYear;
    }
    fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!")
    attack = () => console.log("Now I'm doing a different thing, HA!") // Override the parent method.
    howOld = () => console.log(`I was born in ${this.#birthYear} `);
}

const alien3 = new OverrideAlien("Jamal", "I'm Jamal the alien!", 10, 50, 10000)
alien3.attack() // output: "Now I'm doing a different thing, HA!"
alien3.howOld() // we can access the howOld method as it is not private
// console.log(alien3.#birthYear);  This will give an error as we are trying to access a private property directly
console.log(alien3); // We can see that the private property is not displayed if we log the object