class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce = () => console.log(`Hi my name is ${this.name} and I am ${this.age} years old`);
    howOld = () => console.log(`${this.age} years old`)
};

const person1 = new Person("Luna", 29);
person1.introduce();
person1.howOld();

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    introduce = () => console.log(`Hi I am ${this.name} and I am majoring in ${this.major}`);
};

const student1 = new Student("Samuel", 18, "Religious Studies");
student1.introduce();
student1.howOld();
