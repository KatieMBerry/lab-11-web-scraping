const Book = require('./models/Book');

//takes an array of books and stores each book in a postgres database
const store = books => {
    return Promise.all(books.map(book => Book.insert(book)));
};

module.exports = store;

