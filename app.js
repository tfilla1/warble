var express = require('express');
var app = express();
var port = 3030;

app.use(express.static('public'));

app.get('/', (req, res) => {
    // res.send('hello world');
    res.sendFile(__dirname + '/index.html');
})

app.listen(port, () => { console.log('catch it!'); })