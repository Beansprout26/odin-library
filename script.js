const myLibrary = [];

const myBook = {
    bookTitle: '',

}

function Book(title, author, pages, read){

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

