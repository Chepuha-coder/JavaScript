// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let hello = "hello world";
let lorem = "lorem ipsum";
let coolJS = "javascript is cool";

console.log(hello.length);
console.log(lorem.length);
console.log(coolJS.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

console.log(hello.toUpperCase());
console.log(lorem.toUpperCase());
console.log(coolJS.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

console.log(hello.toLowerCase());
console.log(lorem.toLowerCase());
console.log(coolJS.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = " dirty string   ";
str = str.replace(" ", "");
str = str.replace("   ", "");
console.log(str);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// 	let str = 'Ревуть воли як ясла повні';
// 	let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let strng = "Ревуть воли як ясла повні";

function stringToarray(str) {
	return str.split(" ");
}

console.log(stringToarray(strng));

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

let numbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let strings = numbers.map(number => number.toString());
console.log(strings);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// 	let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let nums = [11, 21, 3];

function sortNums(numbers, upOrDown) {
	if (upOrDown === "ascending") {
		console.log(numbers.sort((a, b) => a - b));
	} else if (upOrDown === "descending") {
		console.log(numbers.sort((a, b) => b - a));
	}
}

sortNums(nums, "descending");

// - є масив
// let coursesAndDurationArray = [
// 	{title: 'JavaScript Complex', monthDuration: 5},
// 	{title: 'Java Complex', monthDuration: 6},
// 	{title: 'Python Complex', monthDuration: 6},
// 	{title: 'QA Complex', monthDuration: 4},
// 	{title: 'FullStack', monthDuration: 7},
// 	{title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let coursesAndDurationArray = [
	{title: "JavaScript Complex", monthDuration: 5},
	{title: "Java Complex", monthDuration: 6},
	{title: "Python Complex", monthDuration: 6},
	{title: "QA Complex", monthDuration: 4},
	{title: "FullStack", monthDuration: 7},
	{title: "Frontend", monthDuration: 4}
];

console.log(coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration));
console.log(coursesAndDurationArray.filter(item => item.monthDuration > 5));

// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
// {
// 	cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
// 	value: '', // '6'-'10', 'ace','jack','queen','king','joker'
// 	color:'', // 'red','black'
// }

let cards = [
	{cardSuit: "clubs", value: "Ace", color: "black"},
	{cardSuit: "clubs", value: 2, color: "black"},
	{cardSuit: "clubs", value: 3, color: "black"},
	{cardSuit: "clubs", value: 4, color: "black"},
	{cardSuit: "clubs", value: 5, color: "black"},
	{cardSuit: "clubs", value: 6, color: "black"},
	{cardSuit: "clubs", value: 7, color: "black"},
	{cardSuit: "clubs", value: 8, color: "black"},
	{cardSuit: "clubs", value: 9, color: "black"},
	{cardSuit: "clubs", value: 10, color: "black"},
	{cardSuit: "clubs", value: "Jack", color: "black"},
	{cardSuit: "clubs", value: "Queen", color: "black"},
	{cardSuit: "clubs", value: "King", color: "black"},

	{cardSuit: "diamonds", value: "Ace", color: "red"},
	{cardSuit: "diamonds", value: 2, color: "red"},
	{cardSuit: "diamonds", value: 3, color: "red"},
	{cardSuit: "diamonds", value: 4, color: "red"},
	{cardSuit: "diamonds", value: 5, color: "red"},
	{cardSuit: "diamonds", value: 6, color: "red"},
	{cardSuit: "diamonds", value: 7, color: "red"},
	{cardSuit: "diamonds", value: 8, color: "red"},
	{cardSuit: "diamonds", value: 9, color: "red"},
	{cardSuit: "diamonds", value: 10, color: "red"},
	{cardSuit: "diamonds", value: "Jack", color: "red"},
	{cardSuit: "diamonds", value: "Queen", color: "red"},
	{cardSuit: "diamonds", value: "King", color: "red"},

	{cardSuit: "hearts", value: "Ace", color: "red"},
	{cardSuit: "hearts", value: 2, color: "red"},
	{cardSuit: "hearts", value: 3, color: "red"},
	{cardSuit: "hearts", value: 4, color: "red"},
	{cardSuit: "hearts", value: 5, color: "red"},
	{cardSuit: "hearts", value: 6, color: "red"},
	{cardSuit: "hearts", value: 7, color: "red"},
	{cardSuit: "hearts", value: 8, color: "red"},
	{cardSuit: "hearts", value: 9, color: "red"},
	{cardSuit: "hearts", value: 10, color: "red"},
	{cardSuit: "hearts", value: "Jack", color: "red"},
	{cardSuit: "hearts", value: "Queen", color: "red"},
	{cardSuit: "hearts", value: "King", color: "red"},
	{cardSuit: "", value: "Joker", color: "red"},

	{cardSuit: "spades", value: "Ace", color: "black"},
	{cardSuit: "spades", value: 2, color: "black"},
	{cardSuit: "spades", value: 3, color: "black"},
	{cardSuit: "spades", value: 4, color: "black"},
	{cardSuit: "spades", value: 5, color: "black"},
	{cardSuit: "spades", value: 6, color: "black"},
	{cardSuit: "spades", value: 7, color: "black"},
	{cardSuit: "spades", value: 8, color: "black"},
	{cardSuit: "spades", value: 9, color: "black"},
	{cardSuit: "spades", value: 10, color: "black"},
	{cardSuit: "spades", value: "Jack", color: "black"},
	{cardSuit: "spades", value: "Queen", color: "black"},
	{cardSuit: "spades", value: "King", color: "black"},
	{cardSuit: "", value: "Joker", color: "black"},
];
let clubsAce = cards.filter(item => item.cardSuit === "clubs" && item.color === "black" && item.value === "Ace");
console.log(clubsAce);

let all6 = cards.filter(item => item.value === 6);
console.log(all6);

let allRed = cards.filter(item => item.color === "red");
console.log(allRed);

let diamonds = cards.filter(item => item.cardSuit === "diamonds");
console.log(diamonds);

let clubs = cards.filter(item => item.cardSuit === "clubs" && typeof item.value === "string" || item.cardSuit === "clubs" && item.value >= 9);
console.log(clubs);

// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
// 	spades:[],
// 	diamonds:[],
// 	hearts:[],
// 	clubs:[]
// }

let reduce = cards.reduce((acumulator, card) => {
	if (card.cardSuit === "spades") {
		acumulator.spades.push(card);
	} else if (card.cardSuit === "diamonds") {
		acumulator.diamonds.push(card);
	} else if (card.cardSuit === "hearts") {
		acumulator.hearts.push(card);
	} else if (card.cardSuit === "clubs") {
		acumulator.clubs.push(card);
	} else if (card.value === "Joker") {
		acumulator.jokers.push(card);
	}
	return acumulator;
}, {spades: [], diamonds: [], hearts: [], clubs: [], jokers: []});

console.log(reduce);