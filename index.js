const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Salam Muafakat!');
});

app.listen(8080, () => {
    console.log('App listening on port 8080!');
});

//Run app, then load http://localhost:8080 in a browser to see the output.
