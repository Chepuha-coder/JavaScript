// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function squareOfRectangle(a, b) {
	return a * b;
}
console.log(squareOfRectangle(5, 4));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

function squareOfCircle(r) {
	return Math.PI * r ** 2;
}
console.log(squareOfCircle(5));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function squareOfСylinder(h, r) {
	return 2 * Math.PI * r * h;
}
console.log(squareOfСylinder(5, 3));

// - створити функцію яка приймає масив та виводить кожен його елемент

let arr = [1, 2, 3, 4, 5];

function showItems(arr) {
	for (let i = 0; i < arr.length; i++) {
		const arrElement = arr[i];
		console.log(arrElement);
	}
}
showItems(arr);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function createParagraph(text) {
	document.write(`<p>${text}</p>`);
}
createParagraph("Some text");

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function createUl(text) {
	document.write("<ul>");
	for (let i = 0; i < 3; i++) {
		document.write(`<li>${text}</li>`);
	}
	document.write("</ul>");
}
createUl("Text");

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function createUl2(text, number) {
	document.write("<ul>");
	for (let i = 0; i < number; i++) {
		document.write(`<li>${text}</li>`);
	}
	document.write("</ul>");
}
createUl2("text2", 5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let array = [1, "string", true];

function listOfArray(array) {
	document.write("<ul>");
	for (let i = 0; i < array.length; i++) {
		document.write(`<li>${array[i]}</li>`);
	}
	document.write("</ul>");
}
listOfArray(array);

// - створити функцію яка приймає масив об'єктів з наступними полями id, name, age та виводить їх в документ. Для кожного об'єкту окремий блок.

let arrayWidthObjects = [
	{id: 241, name: "Vasia", age: 22},
	{id: 598, name: "Kolia", age: 26},
	{id: 812, name: "Petia", age: 44},
];

function showObjectsInArray(object) {
	for (const objectElement of object) {
		console.log(objectElement);
	}
}
showObjectsInArray(arrayWidthObjects);

// - створити функцію яка повертає найменьше число з масиву

let numbers = [1, 2, 4, -2, 9];

function findMin(arr) {
	let min = arr[0];
	for (const arrElement of arr) {
		if (min > arrElement) {
			min = arrElement;
		}
	}
	return min;
}
console.log(findMin(numbers));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

function findSum(arr) {
	let sum = arr[0];
	for (let i = 1; i < arr.length; i++) {
		const arrElement = arr[i];
		sum += arrElement;
	}
	return sum;
}
console.log(findSum(numbers));