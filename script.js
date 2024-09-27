const myLibrary = [];

function Book() {
    this.title = title;
    this.author = author;
    this.pages = pages;
    // this.read = read;
}

// const bookName = '';
// const authorName = '';
// const numPages = '';


function addBookToLibrary(form) {
   document.getElementById('addBook')
   .addEventListener('click', (e) => {
    const bookName = document.getElementById('book_name').value;
    alert(bookName);
    const authorName = document.getElementById('author_name').value;
    alert(authorName);
    const numPages = document.getElementById('num_pages').value;
    alert(numPages);
    const newBook = new Book(bookName, authorName, numPages);
    console.log(newBook);
    // myLibrary.push(newBook);
   })

}

addBookToLibrary();

function addBookToDisplay() {

}
