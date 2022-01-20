let express = require('express');
let app = express();


app.get('/', (req, res) => {
    res.send('hello world');
});

app.get('/html5', (req, res) => {
    res.send('HTML5');
});
app.get('/java/:name,:age', (req, res) => {
    console.log(req.params.name);
    console.log(req.params.age);
    res.send('java');
});

app.listen(3000,'127.0.0.1')