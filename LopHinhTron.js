let Circle = function (radius) {
    this.radius = radius;
    this.getRadius = function (){
        return radius;
    }
    this.getArea = function () {
        return Math.PI * radius * radius;
    }
};
let cricle = new  Circle(4);
let radius = cricle.getRadius();
let area = cricle.getArea();
alert("Radius = " + radius + ", Area = " + area);

