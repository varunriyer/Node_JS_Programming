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

