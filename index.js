const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', function (req, res) {
    res.send("waiting for post request")
});

app.post('/runningsum', function (req, res) {
    for (var i = 1; i < req.body.arr.length; ++i) {
        req.body.arr[i] += req.body.arr[i - 1];
    }
    res.json(req.body)
});

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`)
});