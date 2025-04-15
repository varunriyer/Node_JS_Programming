//Event Emmitter 
{
    const EventEmitter = require('events');
    const emitter = new EventEmitter();
    emitter.on('login', (username) => {
        console.log(`User logged in: ${username}`);
    });

    emitter.emit('login', 'Varun');
}