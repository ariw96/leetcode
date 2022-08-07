function Car() {
	this.name = "Car";
	this.wheels = 4;
	this.engines = 1;
	this.seats = 5;
	return { name: "ball" };
}
const myCar = new Car();
console.log(myCar, myCar.name);
