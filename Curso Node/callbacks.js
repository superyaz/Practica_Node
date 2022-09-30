const booksDB = [
    {
        id: 1,
        title: "Clean Code"
    },
    {
        id: 2,
        title: "The pragmantic programmer"
    },
    {
        id: 3,
        title: "Web Development with Node.js"
    },
];

function getBookById(id, callback) {
    const book = booksDB.find((book) => book.id === id);
    if (!book) {
        const error = new Error();
        error.message = "Book not found!"
        return callback(error);
    }
    callback(null, book)
}

getBookById(20, (err, book) => {
    if (err) {
        return console.log(err.message);
    }
    return console.log(book);
})