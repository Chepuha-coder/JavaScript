// 	Зробити свій розпорядок дня.
//
// 	У вас має бути більше 10 асинхронних дій з рандомними затримками.
// 	Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// 	Затримка має бути НЕ в порядку зростання, а будь-яка. При тому ваші дії мають бути синхронізовані.
//
// 	Наприклад.
// 	Прокинутись - 0.3с
// 	Поснідати - 1с
// 	Піти в душ - 0.5с
// 	Дочекатись автобус - 3с
// 	Пообідати - 1с
// 	І так далі...

let functions = [
	function getUp() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				console.log("Прокидаюся...");
				resolve("Прокинувся, потім ");
			});
		}, 1000);
	},

	function haveBreakfast(action) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				console.log(action + "снідаю...");
				resolve("Поснідав, потім ");
			}, 300);
		});
	},

	function brushTeeth(action) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				console.log(action + "чищу зуби...");
				resolve("Почистив зуби, потім ");
			}, 100);
		});
	},

	function learnJs(action) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				console.log(action + "вчу JS...");
				resolve("Вивчив JS, потім ");
			}, 2000);
		});
	},

	function goBike(action4) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				console.log(action4 + "катаюся на велосипеді...");
				resolve("Покатався на велосипеді, потім ");
			}, 1500);
		});
	},

	function haveLunch(action5) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				console.log(action5 + "обідаю...");
				resolve("Пообідав, потім ");
			}, 400);
		});
	},

	function playComputerGames(action6) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				console.log(action6 + "граю в комп'ютерні ігри...");
				resolve("Пограв у комп'ютерні ігри, потім ");
			}, 2100);
		});
	},

	function watchFilm(action7) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				console.log(action7 + "дивлюся фільм...");
				resolve("Подивився фільм, потім ");
			}, 4000);
		});
	},

	function haveDinner(action8) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				console.log(action8 + "вечеряю...");
				resolve("Повечеряв, потім ");
			}, 300);
		});
	},

	function brushTeethAgain(action9) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				console.log(action9 + "чищу зуби перед сном");
				resolve("Почистив зуби перед сном, потім ");
			}, 150);
		});
	},

	function goToBed(action10) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				console.log(action10 + "йду спати");
				resolve("Сплю");
			}, 150);
		});
	},

	function sleep(action11) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				console.log(action11);
			}, 50);
		});
	}
];

console.log(functions.length);

Promise.all(functions)
.then(action => {
	return functions[0](action);
}).then(action => {
	return functions[1](action);
}).then(action => {
	return functions[2](action);
}).then(action => {
	return functions[3](action);
}).then(action => {
	return functions[4](action);
}).then(action => {
	return functions[5](action);
}).then(action => {
	return functions[6](action);
}).then(action => {
	return functions[7](action);
}).then(action => {
	return functions[8](action)
}).then(action => {
	return functions[9](action)
}).then(action => {
	return functions[10](action)
}).then(action => {
	return functions[0](action)
}).then(action => {
	return functions[0](action)
})
.catch(e => {
	console.warn(e);
});


//=====================================

// async function dayLoop() {
// 	try {
// 		let action;
// 		for (let i = 0; i < functions.length; i++) {
// 			action = await functions[i](action);
// 			if (i === functions.length - 1) {
// 				functions[i](action);
// 			}
// 		}
// 	} catch (error) {
// 		console.error("ERROR :(", error);
// 	}
// }
//
// dayLoop();