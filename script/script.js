/* MAIN CODE */
let arrLibrary = [];

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

Book.prototype.toggleRead = function() {
    if (this.read === "Read") {
        this.read = "Unread";
    } else {
        this.read = "Read";
    }
    updateTable();
}

/* DOM */
function updateTable() {
    const table = document.querySelector('table');
    const tbody = table.querySelector('tbody');

    // prevent duplicate books by clearing
    clearBooks(tbody);
    showBooks(tbody, arrLibrary);

}

function clearBooks(tbody) {
    tbody.innerHTML = '';
}

function showBooks(tbody, bookList) {
    bookList.forEach(book => {
        const tr = document.createElement('tr');        
        addBookData(tr, book);
        addActionsBtns(tr);
        tbody.appendChild(tr);
    });
}

function addBookData(tr, book) {
    const skipItem = ["id", "toggleRead"];
    let isSkip = false;

    for (const item in book) {
        isSkip = false;
        if (skipItem.includes(item)) {
            isSkip = true;
        }

        if (item === 'id') {
            tr.setAttribute('data-id', book[item]);
        }

        if (!isSkip) {
            const td = document.createElement('td');
            td.textContent = book[item];
            tr.appendChild(td);
        }
    }
}

function addActionsBtns(tr) {
    const arrBtns = ["Remove", "Toggle Read"];

    for (const arrBtn in arrBtns) {
        const td = document.createElement('td');
        const btn = document.createElement('button');

        btn.textContent = arrBtns[arrBtn];
        btn.setAttribute('type', 'button');

        btn.addEventListener("click", (e) => {
            switch (e.target.textContent) {
                case "Remove":
                    removeBook(tr);
                    break;
                case "Toggle Read":
                    toggleRead(tr);
            }
        });
        tr.appendChild(td);
        td.appendChild(btn);
    }
}

function removeBook(tr) {
    arrLibrary = arrLibrary.filter(book => book.id !== tr.getAttribute('data-id'));
    updateTable();
}

function toggleRead(tr) {
    const book = arrLibrary.find(book => book.id === tr.getAttribute('data-id'));
    book.toggleRead();
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
    updateTable();
});


// Manually Added Books
const book = new Book("The Hobbit", "J.K.K Tolkien", 295, "notes", "Read");
const book2 = new Book("The Hobbit2", "J.K.K Tolkien", 295, "notes", "Read");
const book3 = new Book("The Hobbit3", "J.K.K Tolkien", 295, "notes", "Read");
addBookToLibrary(book);
addBookToLibrary(book2);
addBookToLibrary(book3);
updateTable();
