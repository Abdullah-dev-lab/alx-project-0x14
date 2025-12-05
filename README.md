## API Overview 
It has a collection of information for tv-shows, actors, movies. It also includes a lot of useful information such as youtube trailer url, awards, full biography. This api provides a complete and updated data for iver 9 million titles of movies series and episodes and also 11 ,illion actorss / crew and cast memmbers. 

## API Version 
v1 (current)

## Available Endpoints 
Titles: return an array of titles according to array of id's, title ratings and vote number, episode id, upcoming titles.
Search: Returns an arrays of titles according filters / sorting query parameters provided in the titles by keyword, title, Aka's path.
Actors: Returns an array of actors according to the filters provided.
Utils: Returns an array of title types, genres and lists.

## Request and Response Format
**Request Sample**
const http = require('https');

const options = {
	method: 'GET',
	hostname: 'moviesdatabase.p.rapidapi.com',
	port: null,
	path: '/titles/%7Bid%7D/main_actors',
	headers: {
		'x-rapidapi-key': '2f3966aacfmshcf8db9627be20abp14877bjsn81f985f04c5e',
		'x-rapidapi-host': 'moviesdatabase.p.rapidapi.com'
	}
};

const req = http.request(options, function (res) {
	const chunks = [];

	res.on('data', function (chunk) {
		chunks.push(chunk);
	});

	res.on('end', function () {
		const body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.end();

**Response Sample**
status: 200
## Authentication

## Error Handling

## Usage Limits and Best Practices
Outline usage limites here (eg. rate limits) and recommendations for effectivly using the API
