// - є масив
// Проітерувати його, створиши для кожного об'єкту масиву <div class='member'> та наповнити його данними з об'єкту.
// 	Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту

let simpsons = [
	{
		name: "Bart",
		surname: "Simpson",
		age: 10,
		info: "Бартолом'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.",
		photo: "https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png"
	},
	{
		name: "Homer",
		surname: "Simpson",
		age: 40,
		info: "Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.",
		photo: "http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png"
	},
	{
		name: "Marge",
		surname: "Simpson",
		age: 38,
		info: "Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.",
		photo: "https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png"
	},
	{
		name: "Lisa",
		surname: "Simpson",
		age: 9,
		info: "Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.",
		photo: "https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png"
	},
	{
		name: "Maggie",
		surname: "Simpson",
		age: 1,
		info: "Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.",
		photo: "https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png"
	},
];

for (const simpson of simpsons) {
	let div = document.createElement("div");
	div.classList.add("simpson");
	div.innerHTML = `
		<h2 class="simpson__name">${simpson.name}</h2>
		<div class="simpson__sub">
			<p class="simpson__surname">${simpson.surname}</p>
			<p class="simpson__age">Age: ${simpson.age}</p>
		</div>
		<p class="simpson__info">${simpson.info}</p>
		<img class="simpson__img" src="${simpson.photo}" alt="simpson ${simpson.name}">
	`;
	document.body.appendChild(div);
}

// Цикл в циклі
// - Є масив
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png
// ------------------
let coursesArray = [
	{
		title: "JavaScript Complex",
		monthDuration: 5,
		hourDuration: 909,
		modules: ["html", "css", "js", "mysql", "mongodb", "react", "angular", "aws", "docker", "git", "node.js"]
	},
	{
		title: "Java Complex",
		monthDuration: 6,
		hourDuration: 909,
		modules: [
			"html",
			"css",
			"js",
			"mysql",
			"mongodb",
			"angular",
			"aws",
			"docker",
			"git",
			"java core",
			"java advanced"
		]
	},
	{
		title: "Python Complex",
		monthDuration: 6,
		hourDuration: 909,
		modules: [
			"html",
			"css",
			"js",
			"mysql",
			"mongodb",
			"angular",
			"aws",
			"docker",
			"python core",
			"python advanced"
		]
	},
	{
		title: "QA Complex",
		monthDuration: 4,
		hourDuration: 909,
		modules: ["html", "css", "js", "mysql", "mongodb", "git", "QA/QC"]
	},
	{
		title: "FullStack",
		monthDuration: 7,
		hourDuration: 909,
		modules: [
			"html",
			"css",
			"js",
			"mysql",
			"mongodb",
			"react",
			"angular",
			"aws",
			"docker",
			"git",
			"node.js",
			"python",
			"java"
		]
	},
	{
		title: "Frontend",
		monthDuration: 4,
		hourDuration: 909,
		modules: ["html", "css", "js", "mysql", "mongodb", "react", "angular", "aws", "docker", "git", "sass"]
	}
];

for (const course of coursesArray) {

	let div = document.createElement("div");
	div.classList.add("course");
	document.body.appendChild(div);

	div.innerHTML = `
		<h2 class="course__title">${course.title}</h2>
		<div class="course__duration duration">
			<div class="duration__month">${course.monthDuration} months</div>
			<div class="duration__hour">${course.hourDuration} hours</div>
		</div>
		<ul class="course__modules"></ul>
	`;

	let modules = course.modules;
	let i = coursesArray.indexOf(course);
	let ul = document.getElementsByClassName("course__modules")[i];

	for (const module of modules) {
		let li = document.createElement("li");
		li.innerText = `${module}`;
		ul.appendChild(li);
	}
}

// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let div = document.createElement("div");
div.classList.add("wrap", "collapse", "alpha", "beta");
div.innerText = "Some text";
// Стилі додав у CSS по класу collapse
document.body.appendChild(div);
const cloneDiv = div.cloneNode(true);
document.body.appendChild(cloneDiv);

// - Є масив:
// 	['Main','Products','About us', 'Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.


// Див. у файлі template1.html (тег <script>)
// - Є масив
// let coursesAndDurationArray = [
// 	{title: 'JavaScript Complex', monthDuration: 5},
// 	{title: 'Java Complex', monthDuration: 6},
// 	{title: 'Python Complex', monthDuration: 6},
// 	{title: 'QA Complex', monthDuration: 4},
// 	{title: 'FullStack', monthDuration: 7},
// 	{title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

let coursesAndDurationArray = [
	{title: "JavaScript Complex", monthDuration: 5},
	{title: "Java Complex", monthDuration: 6},
	{title: "Python Complex", monthDuration: 6},
	{title: "QA Complex", monthDuration: 4},
	{title: "FullStack", monthDuration: 7},
	{title: "Frontend", monthDuration: 4}
];

for (const element of coursesAndDurationArray) {
	const div = document.createElement("div");

	div.classList.add("foo");
	div.innerHTML = `
		<h2 class="foo__title">${element.title}</h2>
		<div class="foo__duration">Month duration: ${element.monthDuration}</div>
	`;

	document.body.appendChild(div);
}

// - Є масив coursesAndDurationArray (198 строка)
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// 	Завдання робити через цикли.

for (const element of coursesAndDurationArray) {
	const item = document.createElement("div");

	item.classList.add("item");
	item.innerHTML = `
		<h1 class='heading'>${element.title}</h1>
		<p class='description'>Month duration: ${element.monthDuration}</p>
	`;

	document.body.appendChild(item);
}

// 	- Створити довільний елемент з id = text. Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

let button = document.createElement("button");
button.setAttribute("id", "button");
button.innerText = "Click to hide";
document.body.appendChild(button);

button.onclick = function () {
	button.remove();
};

// 	- створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

const formWrapper = document.createElement("div");
formWrapper.innerHTML = `
	<form id="f1" name="form1" action="#">
		<input name="age" type="number" placeholder="Enter your age">
		<button name="button" type="submit">Send</button>
	</form>
`;
document.body.appendChild(formWrapper);

const age = document.forms.f1.age;
const button1 = document.forms.f1.button;
button1.onclick = function (e) {
	if (age.value < 18) {
		e.preventDefault();
		let warn = document.createElement("div");
		warn.innerText = "Меньше 18 років";
		document.body.appendChild(warn);
	}
};

// *** Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вміст ячеєк.
// 	При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додаткова частина для завдання)

const formWrapper2 = document.createElement("div");
formWrapper.innerHTML = `
	<form id="f2" name="form2" action="#">
		<input name="rows" type="number" value="2" placeholder="Кількість рядків">
		<input name="columns" type="number" value="3" placeholder="Кількість колонок">
		<input name="count" type="number" value="6" placeholder="Кількість ячеєк">
		<input name="text" type="text" value="Some text" placeholder="Вміст ячеєк">
		<button name="button">Send</button>
	</form>
`;
document.body.appendChild(formWrapper);

const tableButton = document.forms.f2.button;

tableButton.addEventListener("click", createTable);

function hasTable() {
	const table = document.querySelector(".table");
	if (!!table) {
		table.remove();
	}
}

function createTable(e) {

	e.preventDefault();

	hasTable();
	const rows = document.forms.f2.rows.value;
	const columns = document.forms.f2.columns.value;
	const count = document.forms.f2.count.value;

	const text = document.forms.f2.text.value;
	const table = document.createElement("div");
	table.classList.add("table");
	table.style.gridTemplateRows = `repeat(${rows}, 100px)`;

	table.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
	for (let i = 0; i < count; i++) {
		let item = document.createElement("div");
		item.innerText = `${text}`;
		table.appendChild(item);
	}
	document.body.appendChild(table);
}