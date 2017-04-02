var express = require('express');
var bookRouters = express.Router();
//GoodReads API key 
//key: I3D5XN4m1mj3NvnwbEkJg
//secret: Wr6F45QvPh3ZdC9Xi3L5xJCAKrDbLsDMTVbtT62OoEw

var books = [{
        id: 0,
        name: 'Book_0',
        description: 'This is book 0 decription'
            }, {
        id: 1,
        name: 'Book_1',
        description: 'This is book 1 decription'
            }, {
        id: 2,
        name: 'Book_2',
        description: 'This is book 2 decription'
            },
    {
        id: 3,
        name: 'Book_3',
        description: 'This is book 3 decription'
            }];

var router = function (nav) {
    bookRouters.route('/')
        .get(function (req, res) {
            res.render('books', {
                title: 'All Books',
                nav: nav,
                books: books
            });
        });

    bookRouters.route('/:id')
        .get(function (req, res) {
            var id = req.params.id;
            res.render('bookInfo', {
                title: 'All Books',
                nav: nav,
                book: books[id]
            });
        });

    return bookRouters;

}


module.exports = router;