export class ApiService {
	url = 'http://localhost:1338/';

	constructor ($http) {
		this.http = $http;
	}

	getBands () {
		return this.http.get('http://localhost:1338/bands').then(response=>response.data);
	}

}

