const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
        res.send('<h1>Yo piggy!</h1>');
});

app.get('/demo', (req, res) => {
	res.set('X-full-stack', '4life');
	res.status(418);
	res.send('I prefer Oolong tea');
});

app.listen(port, () => console.log(`App is lsitening on port ${port}`));
