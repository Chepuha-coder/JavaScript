// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr = [1, 5, -10, "hello", "goodbye", false, true, 0.2, 3.14, 2.7];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title , pageCount, genre.

let harryPotterBook = {
	title: "Harry Potter",
	pageCount: 9999,
	genre: "Fantasy",
};
let theHobbitBook = {
	title: "The Hobbit",
	pageCount: 8888,
	genre: "Fantasy",
};
let duneBook = {
	title: "Dune",
	pageCount: 7777,
	genre: "Science fiction",
};

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age

let theWitcherBook = {
	title: "The Witcher",
	pageCount: 10564,
	genre: "Fantasy",
	authors: [
		{
			name: "Andrzej Sapkowski",
			age: 74,
		},
	],
};
let goodOmensBook = {
	title: "Good Omens",
	pageCount: 1053,
	genre: "Fantasy comedy",
	authors: [
		{
			name: "Neil Gaiman",
			age: 61,
		},
		{
			name: "Terry Pratchett",
			age: 66,
		},
	],
};
let relicBook = {
	title: "Relic",
	pageCount: 2038,
	genre: "Horror",
	authors: [
		{
			name: "Lincoln Child",
			age: 64,
		},
		{
			name: "Douglas Preston",
			age: 66,
		},
	],
};

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
	{
		name: "Vasia",
		username: "vas",
		password: "0123Vasia",
	},
	{
		name: "Petia",
		username: "petro",
		password: "ahl%#lk2j&",
	},
	{
		name: "Vania",
		username: "ivan",
		password: "20n3f98h3n@2#%l^kld",
	},
];
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);