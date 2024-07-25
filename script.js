const myLibrary = [];


//this is my book object
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

//this selects the input in the form and the value that will be the output
document.getElementById('submitBtn').addEventListener('submit', addBookToLibrary);

function addBookToLibrary(Book){
    let title = document.getElementById('bookTitle').value;
    let author = document.getElementById('bookAuthor').value;
    let pages = document.getElementById('bookPages').value;
    let read = document.getElementById('read').checked;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    console.log(myLibrary);
    
}


//shows the form when the add book icon is clicked//
document.getElementById('add-book-icon').addEventListener('click', openForm);

function openForm() {
    let form = document.querySelector('.newBookForm');
    if (form) {
        form.style.display = 'block';
    } else {
        console.error("Form not found");
    }
}


document.querySelector('.newBookForm').addEventListener('submit', function(event){
    event.preventDefault();
    addBookToLibrary(Book);
})
