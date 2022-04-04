class Book {
    constructor(
        title = '',
        author = '',
        totalPages = 0,
        completed = false
    ){
        this.title = title
        this.author = author
        this.totalPages = totalPages
        this.completed = completed
    }
}


class Library {
    constructor(){
        this.bookshelf = [];
    }

    addBook(newBook){
        if(!this.checkLibrary(newBook)) {
            this.bookshelf.push(newBook);
        }
    }

    deleteBook(removeBook){
        if(!checkLibrary(newBook)) {
            return null;
        }
        else {
            this.bookshelf.filter((book) => book.title !== title);
        }
    }

    checkLibrary(newBook){
        return this.bookshelf.some((book) => book.title === newBook.title);
    }

    topBook(){
        return this.bookshelf[this.bookshelf.length -1];
    }
}

const library = new Library();

const addNewBtn = document.getElementById("addBtn");
const addBookModal = document.getElementById('addNewBookPopUp');
const addToLibrary = document.getElementById('addToLibrary');
const titleInput = document.getElementById('titleInput');
const authorInput = document.getElementById('authorInput');
const pageInput = document.getElementById('pageInput');
const completedInput = document.getElementById('completedBook');
const currentLibrary = document.getElementById('currentLibrary');

addNewBtn.addEventListener("click", function() {
    addBookModal.classList.toggle("show");
    titleInput.value = "";
    authorInput.value = "";
    pageInput.value = "";
    completedInput.checked = false;
});

addToLibrary.addEventListener("click", function(){
    library.addBook(new Book (titleInput.value, authorInput.value, pageInput.value, completedInput.checked));    
    const cBook = document.createElement('div');
    const editBookBtn = document.createElement('button');
    const editBook = document.createTextNode("Edit");
    const cContent = document.createTextNode(library.topBook().title + " " + library.topBook().author);
    cBook.appendChild(cContent);
    editBookBtn.appendChild(editBook);
    document.body.insertBefore(cBook, currentLibrary);
    document.body.insertBefore(editBookBtn, currentLibrary );
    addBookModal.classList.toggle("show");
});


