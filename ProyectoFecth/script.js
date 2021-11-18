const url = "https://api.spaceflightnewsapi.net/v3/articles";

const cards = document.getElementById("cards");

let data = [];

// obtiene la informacion del api  con fecth

const obtenerInfo = () => {
	fetch(url)
		.then((res) => res.json())
		.then((res) => {
			console.log(res);
			pintarHTML(res);
		})
		.catch((error) => console.log(error));
};

const pintarHTML = (articles) => {
	let elements = "";
	articles.forEach((article) => {
		elements += `<div class="col">
                <div class="card">
                <a href="${article.url}" target="_blank">
                <img src="${article.imageUrl}" class="card-img-top" alt="" />
                </a>
                <div class="card-body">
                <h5 class="card-title">${article.title}</h5>
                <p class="card-text">
                ${article.summary}
                </p>
                </div>
                </div>
        </div>`;
	});
	cards.innerHTML = elements;
};

obtenerInfo();
