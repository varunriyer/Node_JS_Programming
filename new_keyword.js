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