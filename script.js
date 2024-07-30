const myLibrary = [];


//this is my book object
function Book(title, author, pages, read, imgSrc){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.imgSrc = imgSrc;
}

function displayNewBook(Book){
    const bookGrid = document.querySelector('.book-grid');
    const bookCard = document.createElement('div'); //creates new div
    bookCard.classList.add('book-card'); // adds the card class to the new div that was just created

    const img = document.createElement('img');
    img.src = Book.imgSrc || 'assets/default_cover.png';
    img.alt = 'Book cover';

    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');

    const cardTitle = document.createElement('h3');
    cardTitle.classList.add('card-title');
    cardTitle.innerHTML = `Book Title: ${Book.title}`;

    const cardAuthor = document.createElement('p');
    cardAuthor.classList.add('card-author');
    cardAuthor.innerHTML = `Author: ${Book.author}`;

    const cardPages = document.createElement('p');
    cardPages.classList.add('card-page-number');
    cardPages.innerHTML = `Number of Pages: ${Book.pages}`;

    const cardRead = document.createElement('p');
    cardRead.classList.add('card-read');
    cardRead.innerHTML = `Read: ${Book.read ? 'Yes' : 'No'}`;

    
    cardContent.appendChild(cardTitle);
    cardContent.appendChild(cardAuthor);
    cardContent.appendChild(cardPages);
    cardContent.appendChild(cardRead);

    bookCard.appendChild(img);
    bookCard.appendChild(cardContent);

    bookGrid.appendChild(bookCard);

}


//this selects the input in the form and the value that will be the output
document.getElementById('submitBtn').addEventListener('submit', addBookToLibrary);

function addBookToLibrary(Book){
    let title = document.getElementById('bookTitle').value;
    let author = document.getElementById('bookAuthor').value;
    let pages = document.getElementById('bookPages').value;
    let read = document.getElementById('read').checked;
    let imgUpload = document.getElementById('imgUpload').files[0];

    if (imgUpload) {
        const reader = new FileReader(); // Create a new FileReader instance
        reader.onload = function(e) {
            const imgSrc = e.target.result; // Get the data URL of the uploaded image
            let newBook = new Book(title, author, pages, read, imgSrc); // Create a new book object with the image data URL
            myLibrary.push(newBook); // Add the new book to the library array
            displayNewBook(newBook); // Display the new book on the DOM
        };
        reader.readAsDataURL(imgUpload); // Read the file as a data URL
    } else {
        let newBook = new Book(title, author, pages, read, ''); // Create a new book object without an image
        myLibrary.push(newBook); // Add the new book to the library array
        displayNewBook(newBook); // Display the new book on the DOM
    }

}



//shows the form when the add book icon is clicked//
document.getElementById('add-book-icon').addEventListener('click', openForm);

let form = document.querySelector('.newBookForm');
function openForm() { 
    if (form) {
        form.style.display = 'block';
    } else {
        console.error("Form not found");
    }
}


document.querySelector('.newBookForm').addEventListener('submit', function(event){
    event.preventDefault();
    addBookToLibrary(Book);
    form.reset();
    form.style.display = 'none';
  
})






