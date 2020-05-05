const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
        res.send('<h1>Yo piggy!</h1>');
});

app.listen(port, () => console.log(`App is lsitening on port ${port}`));
