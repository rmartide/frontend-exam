// Module to store extract the calls to the services

export default {
	getBeers(currentPage) {
		return fetch(`https://api.punkapi.com/v2/beers?page=${currentPage}&per_page=20`);
	},
	postProfile(body) {
		return fetch("https://jsonplaceholder.typicode.com/users", {
			method: "POST",
			body: JSON.stringify(body),
			headers: {
				"Content-type": "application/json; charset=UTF-8"
			}
		});
	}
};
