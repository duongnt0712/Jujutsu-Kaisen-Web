const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.disable('etag');

// const home = require('./routes/attempts.js');

async function startServer() {
    await app.listen(3000, function() {
        console.log('Server listening on port 3000!');
    });
}
startServer();

app.get('/', function(req, res) {
    res.sendFile('index.html', { root: 'public' })
})

app.get('/home', function(req, res) {
    res.redirect(302, '/');
});

app.get('/music', function(req, res) {
    res.sendFile('music.html', { root: 'public' })
});