//Basic Constructor Function 
{
    function Person(name, age) {
        this.name = name;
        this.age = age;
    };
    const varun = new Person("Varun", 22);
    console.log(varun.name);
    console.log(varun.age);
}

//Test with constructor function - Car
{
    function Car(brand, year) {
        this.brand = brand;
        this.year = year;
    };
    const car1 = new Car("Tesla", 2023);
    console.log(car1.brand);
    console.log(car1.year);

    //Add Methods via Prototype
    Car.prototype.getDetails = function () {
        return `${this.brand} was manufactured in ${this.year} `;
    };
    console.log(car1.getDetails());
}