/* MAIN */
const arrLibrary = [];

function Book(title, author, pages, read) {
    if (!new.target) {
        throw Error("ERROR! Use the new operator.");
    }

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID(); // Working?

    // for testing
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read}`;
    };
}

Book.prototype.addBookToLibrary = function () {
    arrLibrary.push(this);
}

// Manually Added Books
const book = new Book("The Hobbit", "J.K.K Tolkien", 295, "not read yet");
const book2 = new Book("The Hobbit2", "J.K.K Tolkien", 295, "not read yet");
const book3 = new Book("The Hobbit3", "J.K.K Tolkien", 295, "not read yet");

/* DISPLAY */
