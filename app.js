const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, './public');
app.use( express.static(publicPath) );

const port = 3000;

app.listen(port, () => {
    console.log('Server runing on port ' + port);
});

app.get('/home', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
});