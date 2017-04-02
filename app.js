var express = require('express');

var app = express();

var port = process.env.PORT || 5000;

var nav = [{
    link: '/books',
    text: 'Books'
        }, {
    link: '/authers',
    text: 'Authors'
        }, {
    link: '/contact',
    text: 'Contact Us'
        }];
var bookRouters = require('./src/routes/booksroutes')(nav);

app.use(express.static('public'));
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use('/books', bookRouters);

app.get('/', function (req, res) {
    res.render('index', {
        title: 'Library',
        nav: nav
    });
});


app.listen(port, function (err) {
    console.log('running server on port ' + port);
});