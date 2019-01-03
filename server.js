const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const bodyParser = require('body-parser');
const router = express.Router();

app.set('view engine', 'ejs');

app.use(express.static('res'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

router.use(function (req, res, next) {
    console.log(req.method, req.url);
    next();
});

app.use('/', require('./routes/client'));

app.listen(port);
console.log('Magic happens on port ' + port);