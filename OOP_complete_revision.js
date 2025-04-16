//Basic Object Implementation 
{
    const Person = {
        name: 'Alice',
        age: 22,
        greet: function () {
            console.log(`Hello, I am ${this.name}`);
        }
    };
    Person.greet();
}
