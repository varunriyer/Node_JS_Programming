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

// Q1) Create an object car with properties: brand, model, year. Add a method displayInfo that logs the car info.
{
    const car = {
        brand: "BMW",
        model: "X3",
        year: 2003,
        displayInfo: function () {
            console.log(`This is a ${this.brand}-${this.model} from ${this.year}`);
        }
    };
    car.displayInfo();
}
