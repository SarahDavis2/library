/* MAIN CODE */
const arrLibrary = [];

function addBookToLibrary(book) {
    arrLibrary.push(book);
}

function Book(title, author, pages, notes, read) {
    if (!new.target) {
        throw Error("ERROR! Use the new operator.");
    }
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.notes = notes;
    this.read = read;
}

/* DOM */
function showBooks(bookList) {
    const table = document.querySelector('table');
    const tbody = table.querySelector('tbody');

    // prevent duplicate books by clearing
    clearBooks(tbody);
    addBooks(tbody, bookList);

}

function clearBooks(tbody) {
    tbody.innerHTML = '';
}

function addBooks(tbody, bookList) {
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
const showDialogBtn = document.querySelector('.showDialog');
const dialog = document.querySelector('dialog');
const addBookBtn = document.querySelector('form button');

showDialogBtn.addEventListener("click", () => {
    dialog.showModal();
});

addBookBtn.addEventListener("click", (e) => {
    e.preventDefault();
    dialog.close(); 

    let isRead = "Unread";
    if (read.checked) {
        isRead = "Read";
    }
    const book = new Book(title.value, author.value, pages.value, notes.value, isRead);
    addBookToLibrary(book);
    showBooks(arrLibrary);
});


// Manually Added Books
const book = new Book("The Hobbit", "J.K.K Tolkien", 295, "notes", "Read");
const book2 = new Book("The Hobbit2", "J.K.K Tolkien", 295, "notes", "Read");
const book3 = new Book("The Hobbit3", "J.K.K Tolkien", 295, "notes", "Read");
addBookToLibrary(book);
addBookToLibrary(book2);
addBookToLibrary(book3);
showBooks(arrLibrary);
