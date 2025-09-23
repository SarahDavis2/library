function Book(title, author, pages, read) {
    if (!new.target) {
        throw Error("ERROR! Use the new operator.");
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read}`;
    };
}

const book = new Book("The Hobbit", "J.K.K Tolkien", 295, "not read yet");