// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

function User(name, id, surname, email, phone) {
	this.name = name;
	this.id = id;
	this.surname = surname;
	this.email = email;
	this.phone = phone;
}

let userIvan = new User("ivan", "1", "petrov", "ivan@gmail.com", "380123456723");
// console.log(userIvan);

// створити пустий масив, наповнити його 10 об'єктами new User(....)

let users = [];
users.push(
	new User("ivan", "8", "petrov", "ivan@gmail.com", "380123456723"),
	new User("petia", "9", "hfo", "petia@gmail.com", "380123456723"),
	new User("vasia", "3", "asf", "vasia@gmail.com", "380123456723"),
	new User("kolia", "7", "cvc", "kolia@gmail.com", "380123456723"),
	new User("sasha", "6", "wew", "sasha@gmail.com", "380123456723"),
	new User("nastia", "5", "trt", "nastia@gmail.com", "380123456723"),
	new User("tolia", "4", "yuyu", "tolia@gmail.com", "380123456723"),
	new User("max", "1", "hjh", "max@gmail.com", "380123456723"),
	new User("john", "2", "nmn", "john@gmail.com", "380123456723"),
	new User("bob", "10", "oik", "bob@gmail.com", "380123456723")
);
// console.log(users);

// - Взяти масив з User[] з попереднього завдання, та відфільтрувати, залишивши тільки об'єкти з парними id (filter)

let pairUsers = users.filter(user => !(user.id % 2));
// console.log(pairUsers);

// - Взяти масив з User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let upUsers = users.sort((userOne, userTwo) => userOne.id - userTwo.id);
// console.log(upUsers);

// - створити клас для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client {
	constructor(id, name, surname, email, phone, order) {
		this.id = id;
		this.name = name;
		this.surname = surname;
		this.email = email;
		this.phone = phone;
		this.order = order;
	}
}

// створити пустий масив, наповнити його 10 об'єктами Client

let clients = [];

clients.push(
	new Client(3, "vasia", "petrov", "vasia@gmail.com", "38066666666", 2),
	new Client(2, "nastia", "lksj", "nastia@gmail.com,", "3805555555", 1),
	new Client(4, "vasia", "asf", "vasia@gmail.com", "380123456723", 5),
	new Client(1, "kolia", "cvc", "kolia@gmail.com", "380123456723", 3),
	new Client(5, "sasha", "wew", "sasha@gmail.com", "380123456723", 7),
	new Client(7, "nastia", "trt", "nastia@gmail.com", "380123456723", 8),
	new Client(6, "tolia", "yuyu", "tolia@gmail.com", "380123456723", 9),
	new Client(9, "max", "hjh", "max@gmail.com", "380123456723", 0),
	new Client(8, "john", "nmn", "john@gmail.com", "380123456723", 6),
	new Client(10, "bob", "oik", "bob@gmail.com", "380123456723", 11)
);
// console.log(clients);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let clientsOrder = clients.sort((clientOne, clientTwo) => clientOne.order - clientTwo.order);
// console.log(clientsOrder);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, developer, year, topSpeed, engineVolume) {
	this.model = model;
	this.developer = developer;
	this.year = year;
	this.topSpeed = topSpeed;
	this.engineVolume = engineVolume;
	this.drive = function () {
		console.log(`їдемо зі швидкістю ${this.topSpeed} на годину`);
	};
	this.info = function () {
		console.log(`model: ${this.model}, developer: ${this.developer}, year: ${this.year}, top speed: ${this.topSpeed}, engineVolume: ${this.engineVolume}`);
	};
	this.increaseMaxSpeed = function (newSpeed) {
		this.topSpeed = newSpeed;
		console.log(`new top speed is ${this.topSpeed}`);
	};
	this.changeYear = function (newValue) {
		this.year = newValue;
		console.log(`new year is ${this.year}`);
	};
	this.addDriver = function (driver) {
		this.driver = driver;
		console.log(`your driver is ${driver.name}, he is ${driver.age} years old`);
	};
}

let bmwCar = new Car("bmw", "germany", 2020, 300, 16);
let driver = {name: "vasia", age: 33};

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car2 {
	constructor(model, developer, year, topSpeed, engineVolume) {
		this.model = model;
		this.developer = developer;
		this.year = year;
		this.topSpeed = topSpeed;
		this.engineVolume = engineVolume;
	}

	drive = function () {
		console.log(`їдемо зі швидкістю ${this.topSpeed} на годину`);
	};
	info = function () {
		console.log(`model: ${this.model}, developer: ${this.developer}, year: ${this.year}, top speed: ${this.topSpeed}, engineVolume: ${this.engineVolume}`);
	};
	increaseMaxSpeed = function (newSpeed) {
		this.topSpeed = newSpeed;
		console.log(`new top speed is ${this.topSpeed}`);
	};
	changeYear = function (newValue) {
		this.year = newValue;
		console.log(`new year is ${this.year}`);
	};
	addDriver = function (driver) {
		this.driver = driver;
		console.log(`your driver is ${driver.name}, he is ${driver.age} years old`);
	};
}

let mersedesCar = new Car2("mersedes", "germany", 2022, 350, 14);
let driver2 = {name: "petia", age: 28};

// Створити клас/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Створити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// 	За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// 	Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Popelushka {
	constructor(name, age, footSize) {
		this.name = name;
		this.age = age;
		this.footSize = footSize;
	}
}

class Prince {
	constructor(name, age, shoesSize) {
		this.name = name;
		this.age = age;
		this.shoesSize = shoesSize;
	}
}

let popelushkas = [
	new Popelushka("Vika", 21, 38),
	new Popelushka("Tanya", 20, 40),
	new Popelushka("Ira", 21, 37),
	new Popelushka("Katya", 19, 38),
	new Popelushka("Katia", 22, 40),
	new Popelushka("Nastya", 23, 41),
	new Popelushka("Oksana", 21, 39),
	new Popelushka("Olya", 24, 40),
	new Popelushka("Anya", 22, 42),
	new Popelushka("Masha", 21, 36)
];

let prince = new Prince("Ivan", 22, 39);

for (const popelushka of popelushkas) {
	if (prince.shoesSize === popelushka.footSize) {
		console.log(`${prince.name} + ${popelushka.name}`);
	}
}

console.log(popelushkas.find(Popelushka => Popelushka.footSize === prince.shoesSize));