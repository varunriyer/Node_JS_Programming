class Alien {
    constructor(name, phrase) {
        this.name = name;
        this.phrase = phrase;
        this.species = "Alien";
    }
    fly = () => console.log("Zzzzzzzziiiiiiiiiiinnnnnnngggggg! !");
    sayPhrase = () => console.log(this.phrase);
};

class Bug {
    constructor(name, phrase) {
        this.name = name;
        this.phrase = phrase;
        this.species = "Bug";
    }
    hide = () => console.log("You can't catch me now!");
    sayPhrase = () => console.log(this.phrase);
};

class Robot {
    constructor(name, phrase) {
        this.name = name;
        this.phrase = phrase;
        this.species = "Robot";
    }
    transform = () => console.log("Optimus Prime!");
    sayPhrase = () => console.log(this.phrase);
};


const alien1 = new Alien("Ali", "I'm Ali the Alien!");
const alien2 = new Alien("Lien", "Run for your lives!");
const bug1 = new Bug("Buggy", "Your debugger doesn't work with me:)");
const bug2 = new Bug("Erik", "I drink decaf");
const robot1 = new Robot("Tito", "I can cook, swim and dance!");
const robot2 = new Robot("Ibot", "I am actually just Tobi");
