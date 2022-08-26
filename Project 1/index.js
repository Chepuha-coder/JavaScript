// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id, name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання, при кліку на яку відбувається перехід на сторінку user-details.html, котра має детальну інформацію про об'єкт на який клікнули

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => {
	return response.json();
})
.then(users => {
	for (const user of users) {
		let userDiv = document.createElement("div");
		let id = document.createElement("div");
		let name = document.createElement("div");
		let a = document.createElement("a");

		userDiv.classList.add("user");
		userDiv.append(id, name, a);
		id.innerText = user.id;
		name.innerText = user.name;
		a.innerText = "User description";
		a.setAttribute("href", "user-details.html");

		document.body.appendChild(userDiv);

		a.onclick = function () {
			localStorage.setItem("userName", JSON.stringify(user));
		};
	}
});