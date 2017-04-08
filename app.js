var express = require('express');
var session = require('express-session');

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
var index = require('./src/routes/index')(nav);
var bookRoutes = require('./src/routes/booksroutes')(nav);
var authRoutes = require('./src/routes/authRoutes');

app.use(express.static('public'));
app.set('views', './src/views');
app.set('view engine', 'ejs');


app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}));

require('./src/config/passport')(app);

app.use('/', index);
app.use('/auth', authRoutes);
app.use('/books', bookRoutes);


app.listen(port, function (err) {
  console.log('running server on port ' + port);
});