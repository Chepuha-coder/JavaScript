// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 	6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.

let user = JSON.parse(localStorage.getItem("userName")); // {}

let userInfo = document.createElement("div");
userInfo.classList.add("user");
document.body.appendChild(userInfo);

function showUser(user) {
	for (let key in user) {
		let userElement = document.createElement("div");
		userElement.classList.add("user-element");
		let keyDiv = document.createElement("div");
		let div = document.createElement("div");

		if (typeof user[key] !== "object") {
			keyDiv.innerText = `${key}:`;
			div.innerText = user[key];
			userElement.append(keyDiv, div);
		} else {
			userElement.classList.remove("user-element");
			showUser(user[key]);
		}

		userInfo.appendChild(userElement);
	}
}

showUser(user);

let button = document.createElement("button");
button.innerText = "post of current user";
document.body.appendChild(button);

let id = user.id;

fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
.then(response => {
	return response.json();
}).then(posts => {
	button.onclick = function () {
		let div = document.createElement("div");
		let div2 = document.createElement("div");
		div.classList.add("post-title");
		div2.classList.add("post-title");

		for (const post of posts) {

			let postName = document.createElement("a");
			postName.setAttribute("href", "post-details.html");
			postName.innerText = post.title;

			if (div.childNodes.length < 5) {
				div.appendChild(postName);
			} else {
				div2.appendChild(postName);
			}

			postName.onclick = function () {
				localStorage.setItem("post", JSON.stringify(post));
			};

			let postTitle = document.getElementsByClassName("post-title");

			if (postTitle.length === 0) {
				document.body.append(div, div2);
			}
		}
	};
});

