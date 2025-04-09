class Shape {
    constructor() {
        if (new.target === Shape) {
            throw new Error("Shape is abstract and cannot be initiated");
        }
    }
    calculateArea() {
        throw new Error("The method calculateArea() must be implemented");
    }
};

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    calculateArea() {
        return (Math.PI * this.radius ** 2).toFixed(2);
    }
};
class Rectangle extends Shape {
    constructor(height, width) {
        super();
        this.height = height;
        this.width = width;
    }
    calculateArea() {
        return this.height * this.width;
    }
};
class Square extends Shape {
    constructor(side) {
        super();
        this.side = side;
    }
    calculateArea() {
        return this.side ** 2
    }
};
const shapes = [new Circle(5), new Rectangle(4, 9), new Square(7)];
shapes.forEach(shape => console.log(shape.calculateArea()));
