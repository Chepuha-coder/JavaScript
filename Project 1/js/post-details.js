// 	На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

let post = JSON.parse(localStorage.getItem("post"));
let postDiv = document.createElement("div");
postDiv.classList.add("post-info");
document.body.appendChild(postDiv);

for (let key in post) {
	let div = document.createElement("div");
	div.classList.add("user-item");
	let keyDiv = document.createElement("div");
	let value = document.createElement("div");

	keyDiv.innerText = `${key}:`;
	value.innerText = post[key];

	div.append(keyDiv, value);
	postDiv.appendChild(div);
}

let postId = post.id;

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
.then(response => {
	return response.json();
}).then(comments => {
	let div = document.createElement("div");
	div.classList.add("comment");

	for (const comment of comments) {
		let commentText = document.createElement("div");
		commentText.innerText = comment.body;

		div.appendChild(commentText);
	}

	document.body.appendChild(div);
});