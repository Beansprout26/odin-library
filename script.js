const myLibrary = [];


//this is my book object
function Book(title, author, pages, read, imgSrc, readToggleOn, readToggleOff, deletebtn){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.imgSrc = imgSrc;
    this.readToggleOn = readToggleOn;
    this.readToggleOff = readToggleOff;
    this.deletebtn = deletebtn;
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

    const toggleContainer = document.createElement('div');
    toggleContainer.classList.add('toggle-container');

    const cardToggleOn = document.createElement('button');
    cardToggleOn.classList.add('readToggleOn');
    cardToggleOn.innerHTML = `<i class="fa-solid fa-toggle-on fa-xl"></i>`;

    const cardToggleOff = document.createElement('button');
    cardToggleOff.classList.add('readToggleOff');
    cardToggleOff.innerHTML = `<i class="fa-solid fa-toggle-off fa-xl"></i>`;

    const cardDeleteBtn = document.createElement('button');
    cardDeleteBtn.classList.add('deletebtn');
    cardDeleteBtn.innerHTML = `<i class="fa-solid fa-trash" ></i>`;

    
    cardContent.appendChild(cardTitle);
    cardContent.appendChild(cardAuthor);
    cardContent.appendChild(cardPages);
    cardContent.appendChild(cardRead);
    cardContent.appendChild(toggleContainer)
    toggleContainer.appendChild(cardToggleOn)
    toggleContainer.appendChild(cardToggleOff)
    toggleContainer.appendChild(cardDeleteBtn)
    

    bookCard.appendChild(img);
    bookCard.appendChild(cardContent);

    bookGrid.appendChild(bookCard);

    cardToggleOn.addEventListener('click', function() {
        cardToggleOff.style.display = 'block';
        // cardToggleOn.style.display = 'none';
        cardRead.innerHTML = 'Read: No';
    });

    cardToggleOff.addEventListener('click', function() {
        cardToggleOn.style.display = 'block';
        cardToggleOff.style.display = 'none';
        cardRead.innerHTML = 'Read: Yes';
    });

    cardDeleteBtn.addEventListener('click', function() {
        bookCard.remove();
    });
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
        const reader = new FileReader(); 
        reader.onload = function(e) {
            const imgSrc = e.target.result; 
            let newBook = new Book(title, author, pages, read, imgSrc); 
            myLibrary.push(newBook); 
            displayNewBook(newBook); 
        };
        reader.readAsDataURL(imgUpload); 
    } else {
        let newBook = new Book(title, author, pages, read, ''); 
        myLibrary.push(newBook); 
        displayNewBook(newBook); 
    }

    // const toggleYes = document.querySelector('.readToggleOn');
    // const toggleNo = document.querySelector('.readToggleOff');

    if(read = true){
        document.querySelector('.readToggleOff').style.display = 'none';
        document.querySelector('.readToggleOn').style.display = 'block';
        // const cardRead = document.querySelector('.card-read');
        // cardRead.innerHTML = 'Read: Yes';
    }else{
        document.querySelector('.readToggleOn').style.display = 'none';
        // const cardRead = document.querySelector('.card-read');
        // cardRead.innerHTML = 'Read: No';
    }


};



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


// document.querySelector('.')

// const toggleOnbtn = querySelector('.readToggleOn');
// const toggleOffbtn = querySelector('.readToggleOff'); 



// function toggleRead(){
//     const toggleOnbtn = document.querySelectorAll('.readToggleOn');
//     toggleOnbtn.forEach(button => {
//         button.addEventListener('click', function(event){
//         event.target.closest('.readToggleOn');
//         document.querySelector('.readToggleOff').style.display = 'block';
//         const cardRead = document.querySelector('.card-read');
//         // this.style.display = 'none';
//         cardRead.innerHTML = 'Read: No';
//     })

//     const toggleOffbtn = document.querySelectorAll('.readToggleOff');toggleOffbtn.forEach(button => {
//         button.addEventListener('click', function(event){
//         event.target.closest('.readToggleOff');
//         document.querySelector('.readToggleOn').style.display = 'block';
//         const cardRead = document.querySelector('.card-read');
//         this.style.display = 'none';
//         cardRead.innerHTML = 'Read: Yes';
//     });
// })})}toggleRead();



const deleteButtons = document.querySelectorAll('.deletebtn');

deleteButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        event.target.closest('.book-card').remove();
    });
});

// document.querySelector('.deletebtn').addEventListener('click', function(event){
//     event.target.closest('.book-card').remove();
// })



