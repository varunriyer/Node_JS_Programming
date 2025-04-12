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

//Scheduling

//Set Timeout
// setTimeout(function () {
//     console.log("Hello after 2 seconds")
// }, 2000); //time in milliseconds


// //Practice to perfect the syntax 
// setTimeout(function () {
//     console.log("Hi Varun, this is a delayed message")
// }, 3000);

// //Basic Set Interval Example 

// setInterval(function () {
//     console.log("Repeats every 2 seconds,wow!");
// }, 2000);

// //Additional example to perfect the usage

// setInterval(function () {
//     console.log("Remainder: Take a breath!");
// }, 4000)

// //Storing the interval ID for stopping it later 
// {
//     const reminder = setInterval(function () {
//         console.log("This will end soon");
//     }, 4000);

//     setTimeout(function () {
//         clearInterval(reminder);
//         console.log("Boom that ended soon")
//     }, 12000);
// }
// {
//     let n = 1;
//     const countdown = setInterval(function () {
//         console.log(n++);
//     }, 1000);

//     setTimeout(function () {
//         clearInterval(countdown);
//         console.log("5 secs up!");
//     }, 6001);
// }
{
    //Cleaned up code of the above
    let n = 1;
    const countdown = setInterval(function () {
        console.log(n);
        if (n === 5) {
            clearInterval(countdown);
            console.log("5 secs up!");
        }
        n++;
    }, 1000);

}