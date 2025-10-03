/* MAIN CODE */
class Library {
    static arrLibrary = [];
    static addBookToLibrary(book) {
        this.arrLibrary.push(book);
    } 

    constructor(title, author, pages, notes, read) {
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

    toggleRead() {
        if (this.read === "Read") {
            this.read = "Unread";
        } else {
            this.read = "Read";
        }
        updateTable();
    }

    /* DOM */
    test() {
        console.log("yes")
        this.test2();
    }
    test2() {
        console.log("yes2")
    }

    static updateTable(instance) {
        const table = document.querySelector('table');
        const tbody = table.querySelector('tbody');

        // prevent duplicate books by clearing
        instance.clearBooks(tbody);
        instance.showBooks(tbody, Library.arrLibrary);
    }
    clearBooks(tbody) {
        tbody.innerHTML = '';
    }
    showBooks(tbody, bookList) {
        bookList.forEach(book => {
            const tr = document.createElement('tr');        
            this.addBookData(tr, book);
            this.addActionsBtns(tr);
            tbody.appendChild(tr);
        });
    }
    addBookData(tr, book) {
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
    addActionsBtns(tr) {
        const arrBtns = ["Remove", "Toggle Read"];

        for (const arrBtn in arrBtns) {
            const td = document.createElement('td');
            const btn = document.createElement('button');

            btn.textContent = arrBtns[arrBtn];
            btn.setAttribute('type', 'button');

            btn.addEventListener("click", (e) => {
                switch (e.target.textContent) {
                    case "Remove":
                        this.removeBook(tr);
                        break;
                    case "Toggle Read":
                        this.toggleRead(tr);
                }
            });
            tr.appendChild(td);
            td.appendChild(btn);
        }
    }
    removeBook(tr) {
        Library.arrLibrary = Library.arrLibrary.filter(book => book.id !== tr.getAttribute('data-id'));
        Library.updateTable();
    }
    toggleRead(tr) {
        const book = this.arrLibrary.find(book => book.id === tr.getAttribute('data-id'));
        book.toggleRead();
    }
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
    Library.addBookToLibrary(book);
    Library.updateTable();
});


// Manually Added Books
const book = new Library("The Hobbit", "J.K.K Tolkien", 295, "notes", "Read");
const book2 = new Library("The Hobbit2", "J.K.K Tolkien", 295, "notes", "Read");
const book3 = new Library("The Hobbit3", "J.K.K Tolkien", 295, "notes", "Read");
Library.addBookToLibrary(book);
Library.addBookToLibrary(book2);
Library.addBookToLibrary(book3);
book.test();
Library.updateTable(book);
