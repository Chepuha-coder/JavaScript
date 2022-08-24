// - Є змінна х, якій ви надаєте довільне числове значення.
// 	Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = 0;
// let x = 1;
// let x = -3;
if (x !== 0) {
	console.log("Вірно");
} else {
	console.log("Невірно");
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 10;
if (time >= 0 && time <= 15) {
	console.log("Перша чверть");
} else if (time > 15 && time <= 30) {
	console.log("Друга чверть");
} else if (time > 30 && time <= 45) {
	console.log("Третя чверть");
} else if (time > 45 && time <= 60) {
	console.log("Четверта чверть");
} else {
	console.log("error");
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 25;
if (Number.isInteger(day) && day >= 1 && day <= 31) {
	if (day >= 1 && day <= 10) {
		console.log("Перша декада");
	} else if (day > 10 && day <= 20) {
		console.log("Друга декада");
	} else {
		console.log("Третя декада");
	}
} else {
	console.log("Невірна дата");
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let dayOfWeek = 5;
if (Number.isInteger(dayOfWeek) && dayOfWeek >= 1 && dayOfWeek <= 7) {
	switch (dayOfWeek) {
		case 1:
			console.log("Monday");
			break;
		case 2:
			console.log("Tuesday");
			break;
		case 3:
			console.log("Wednesday");
			break;
		case 4:
			console.log("Thursday");
			break;
		case 5:
			console.log("Friday");
			break;
		case 6:
			console.log("Saturday");
			break;
		case 7:
			console.log("Sunday");
			break;
		default:
			console.log("???");
	}
} else {
	console.log("Невірний номер");
}

// 		Користувач вводить або має два числа.
// 		Потрібно знайти та вивести максимальне число з тих двох .
// 		Також потрібно врахувати коли введені рівні числа.

let firstNumber = 3;
let secondNumber = 3;
if (firstNumber > secondNumber) {
	console.log(firstNumber);
} else if (secondNumber > firstNumber) {
	console.log(secondNumber);
} else {
	console.log(`${firstNumber} = ${secondNumber}`);
}

// 	- є змінна y, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// 		за допомоги оператора || буде присвоювати змінній y значення "default" якщо значення змінної y являється falsy (хибноподыбне, тобто кастується до false)

let y = false || "default";
console.log(y);
