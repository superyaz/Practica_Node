const booksDB = [
    {
        id: 1,
        title: "Clean Code",
        authorId: 1
    },
    {
        id: 2,
        title: "The pragmantic programmer",
        authorId: 2
    },
    {
        id: 3,
        title: "Web Development with Node.js",
        authorId: 3
    },
];

<<<<<<< HEAD
const authorsDB = [
    {
        id: 1,
        name: "Robert C. Martin"
    },
    {
        id: 2,
        name: "Steve Forest"
    }
];
=======
const autor = [
    {
        Nombre: "Paulo Cohelo",
        Ciudad: "Colombia"
    }
    {
        Nombre: "Thomas Carrasquilla",
        Ciudad: "Peru"
    }
]
>>>>>>> origin

function getBookById(id, callback) {
    const book = booksDB.find((book) => book.id === id);
    if (!book) {
        const error = new Error();
        error.message = "Book not found!"
        return callback(error);
    }
    callback(null, book)
}

function getAuthorById(id, callback) {
    const author = authorsDB.find((author) => author.id === id);
    if (!author) {
        const error = new Error();
        error.message = "Author not found!"
        return callback(error);
    }
    callback(null, author)
}

getBookById(2, (err, book) => {
    if (err) {
        return console.log(err.message);
    }

    getAuthorById(book.authorId, (err, author) => {
        if (err) {
            return console.log(err.message);
        }
        console.log(`This book ${book.name} was written by ${author.name}`);
    });
    return console.log(book);
})