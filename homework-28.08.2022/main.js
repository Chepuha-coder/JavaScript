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

function getUp(isGetUp) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (isGetUp) {
				console.log("Прокидаюся...");
				resolve("Прокинувся");
			} else {
				reject("Не прокидаюся, сплю далі...");
			}
		});
	}, 1000);
}

function haveBreakfast(action) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (action === "Прокинувся") {
				console.log(action + ", потім снідаю...");
				resolve("Поснідав");
			} else {
				reject("Не прокинувся, не йду снідати :(");
			}
		}, 300);
	});
}

function brushTeeth(action) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (action === "Поснідав") {
				console.log(action + ", потім чищу зуби...");
				resolve("Почистив зуби");
			} else {
				reject("Не снідав, не йду чистити зуби");
			}
		}, 100);
	});
}

function learnJs(action) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (action === "Почистив зуби") {
				console.log(action + ", потім вчу JS...");
				resolve("Вивчив JS");
			} else {
				reject("не почистив зуби, не буду вивчити JS");
			}
		}, 2000);
	});
}

function goBike(action) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (action === "Вивчив JS") {
				console.log(action + ", потім катаюся на велосипеді...");
				resolve("Покатався на велосипеді");
			} else {
				reject("Не вивчив JS, не піду кататися на велосипеді");
			}


		}, 1500);
	});
}

function haveLunch(action) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (action === "Покатався на велосипеді") {
				console.log(action + ", потім обідаю...");
				resolve("Пообідав");
			} else {
				reject("Не покатався на велосипеді, не піду обідати");
			}
		}, 400);
	});
}

function playComputerGames(action) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (action === "Пообідав") {
				console.log(action + ", потім граю в комп'ютерні ігри...");
				resolve("Пограв у комп'ютер");
			} else {
				reject("Не пообідав, не буду грати у комп'ютерні ігри");
			}
		}, 2100);
	});
}

function watchFilm(action) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (action === "Пограв у комп'ютер") {
				console.log(action + ", потім дивлюся фільм...");
				resolve("Подивився фільм");
			} else {
				reject("Не грав у комп'ютерні ігри, не буду дивитися фільм");
			}
		}, 4000);
	});
}

function haveDinner(action) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (action === "Подивився фільм") {
				console.log(action + ", потім вечеряю...");
				resolve("Повечеряв");
			} else {
				reject("Не дивився фільм, не піду вечеряти");
			}
		}, 300);
	});
}

function brushTeethAgain(action) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (action === "Повечеряв") {
				console.log(action + ", потім чищу зуби перед сном...");
				resolve("Почистив зуби перед сном");
			} else {
				reject("Не вечеряв, не буду чистити зуби перед сном");
			}
		}, 150);
	});
}

function goToBed(action) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (action === "Почистив зуби перед сном") {
				console.log(action + ", потім йду спати...");
				resolve("Сплю...");
			} else {
				reject("НЕ почистив зуби перед сном, не піду спати");
			}
		}, 150);
	});
}

function sleep(action) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (action === "Сплю...") {
				console.log(action);
				resolve();
			} else {
				reject("Не сплю");
			}
		}, 50);
	});
}

getUp(true)
.then(result => {
	return haveBreakfast(result);
}).then(result => {
	return brushTeeth(result);
}).then(result => {
	return learnJs(result);
}).then(result => {
	return goBike(result);
}).then(result => {
	return haveLunch(result);
}).then(result => {
	return playComputerGames(result);
}).then(result => {
	return watchFilm(result);
}).then(result => {
	return haveDinner(result);
}).then(result => {
	return brushTeethAgain(result);
}).then(result => {
	return goToBed(result);
}).then(result => {
	return sleep(result);
}).catch(error => {
	console.error("Порушення у розпорядку дня:", error);
});

// async function dayLoop() {
// 	try {
// 		let result = await getUp(true);
// 		result = await haveBreakfast(result);
// 		result = await brushTeeth(result);
// 		result = await learnJs(result);
// 		result = await goBike(result);
// 		result = await haveLunch(result);
// 		result = await playComputerGames(result);
// 		result = await watchFilm(result);
// 		result = await haveDinner(result);
// 		result = await brushTeethAgain(result);
// 		result = await goToBed(result);
// 		await sleep(result);
// 	} catch (error) {
// 		console.error("Порушення у розпорядку дня:", error);
// 	}
// }

// dayLoop();