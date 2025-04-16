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
// Q2) Write a function that accepts an object and a key, and returns the value of that key if it exists, otherwise returns 'Key not found'.
{
    function checkExist(obj, search_key) {
        const flag = 1;
        for (const [key] of Object.keys(obj)) {
            if (search_key == key) {
                flag = 0;
                return Object.values(key);
            }
        }
        if (flag === 1) return "Key not found";
    }
    const obj = {
        text: "Hello World",
        index: 7
    };
    console.log(checkExist(obj, "text"));
}