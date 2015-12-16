var express = require('express');
var exphbs  = require('express-handlebars');
var path = require('path');
var app = express();


app.engine('handlebars', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'templates', 'layouts')
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'templates'));


app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.render('home');
});

var server = app.listen(4000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});