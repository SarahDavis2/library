/* MAIN CODE */
const arrLibrary = [];

function addBookToLibrary(book) {
    arrLibrary.push(book);
}

function Book(title, author, pages, read) {
    if (!new.target) {
        throw Error("ERROR! Use the new operator.");
    }
    this.id = crypto.randomUUID(); // Working?
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

/* DOM */
function showBooks(bookList) {
    const table = document.querySelector('table');
    const tbody = table.querySelector('tbody');

    bookList.forEach(book => {
        const tr = document.createElement('tr');
        
        for (const item in book) {
            const td = document.createElement('td');
            td.textContent = book[item];
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    });
}

/* DIALOG */
const showDialog = document.querySelector('.showDialog');
const dialog = document.querySelector('dialog');

showDialog.addEventListener("click", () => {
    dialog.showModal();
});



// Manually Added Books
const book = new Book("The Hobbit", "J.K.K Tolkien", 295, "not read yet");
const book2 = new Book("The Hobbit2", "J.K.K Tolkien", 295, "not read yet");
const book3 = new Book("The Hobbit3", "J.K.K Tolkien", 295, "not read yet");
addBookToLibrary(book);
addBookToLibrary(book2);
addBookToLibrary(book3);
showBooks(arrLibrary);
