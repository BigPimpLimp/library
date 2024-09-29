const myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    // this.read = read;
}

let bookName;
let authorName;
let numPages;
let newBook; 

document.getElementById('addBook')
.addEventListener('click', (e) => {
    bookName = document.getElementById('book_name').value;
    authorName = document.getElementById('author_name').value;
    numPages = document.getElementById('num_pages').value;
    newBook = new Book(bookName, authorName, numPages);
    myLibrary.push(newBook);
    e.preventDefault();
});



let main = document.getElementById('main');

function addBookToDisplay(arr) {
    arr.forEach(element => {
        let myString = JSON.stringify(element);
        // const div1 = document.createElement('div');
        let paragraph1 = document.createElement('div')
        .innerHTML = myString;
        document.body.appendChild(paragraph1);
    });
}

function addBookToDisplay2(arr) {

}





// myLibrary.push(newBook1);
// addBookToDisplay(myLibrary);
