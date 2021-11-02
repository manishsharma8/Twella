require('dotenv').config();
const path = require('path');
const express = require('express');
const needle = require('needle');

const app = express();
const endpointURL = 'https://api.twitter.com/2/tweets?ids=';

async function getRequest(id) {
	const params = {
		ids: id,
		expansions: 'author_id,attachments.media_keys',
		'tweet.fields':
			'lang,author_id,created_at,public_metrics,referenced_tweets',
		'media.fields': 'preview_image_url,url',
		'user.fields': 'location,username,verified,profile_image_url',
	};

	const res = await needle('get', endpointURL, params, {
		headers: {
			'User-Agent': 'v2TweetLookupJS',
			authorization: `Bearer ${process.env.BEARER_TOKEN}`,
		},
	});

	console.log('res', res.body);
	if (res.body) {
		return res.body;
	} else {
		throw new Error('Unsuccessful request');
	}
}

app.use(express.static(path.resolve(__dirname, './client/build')));

app.get('/api/:id', async (req, res) => {
	const response = await getRequest(req.params.id);
	res.send(response);
});

app.get('/api', (req, res) => {
	res.send('Hello from the server');
});

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
});

app.listen(4000, () => console.log('App listening to port 4000'));
