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

setTimeout(() => console.log("Timeout"), 0); //4

Promise.resolve().then(() => console.log("Promise")); //3

console.log("End"); //2
