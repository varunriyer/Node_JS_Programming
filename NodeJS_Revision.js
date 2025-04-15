//Event Emmitter 
{
    const EventEmitter = require('events');
    const emitter = new EventEmitter();
    emitter.on('login', (username) => {
        console.log(`User logged in: ${username}`);
    });

    emitter.emit('login', 'Varun');
}

//Simulating SetTimeout & Promise to check which will evaluate first 

console.log("Start"); //1

// setTimeout(() => console.log("Timeout"), 0); //4   --> commenting it out so that it's easier to look at future outputs

// Promise.resolve().then(() => console.log("Promise")); //3

console.log("End"); //2

//Objects Practice 
{
    class Car {
        constructor(brand) {
            this.brand = brand;
        }
        start() {
            return `${this.brand} is starting`;
        }
    };

    const myCar = new Car("Tesla");
    console.log(myCar.start());
}