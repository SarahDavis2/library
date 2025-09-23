const arrLibrary = [];

function Book(title, author, pages, read) {
    if (!new.target) {
        throw Error("ERROR! Use the new operator.");
    }
    
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}