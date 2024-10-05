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
    addBookToDisplay(myLibrary);
    e.preventDefault();
    clearForm();
    myLibrary.length = 0;
});

let cardWrapper = document.getElementById('card-wrapper');

function addBookToDisplay(arr) {
    arr.forEach(element => {
      const newDiv = document.createElement('div');
      newDiv.id = 'card';
      cardWrapper.appendChild(newDiv);
        for (let key in element) {
          let myString = JSON.stringify(element[key]);
          myString = charRemove(myString);
          const newP = document.createElement('p');
          newDiv.appendChild(newP);
          newP.innerHTML = myString;
        };
      const removeButton = document.createElement('button');
      removeButton.id = 'removeButton';
      newDiv.appendChild(removeButton);
      removeButton.textContent = 'Remove Book';
    });
}

function clearForm () {
    document.getElementById('book_name').value = '';
    document.getElementById('author_name').value = '';
    document.getElementById('num_pages').value = '';
}

function charRemove(str) {
    str = str
        .replaceAll('{', '')
        .replaceAll('}', '')
        .replaceAll(':', '')
        .replaceAll(',', '')
        .replaceAll('title', 'Title: ')
        .replaceAll('author', 'Author: ')
        .replaceAll('pages', 'Pages: ')
        .replaceAll('"', '');
        console.log(str);
    return str;
}

const showButton = document.getElementById('openDialog');
const bookDialog = document.getElementById('bookDialog');
const closeDialog = document.getElementById('closeDialog');
const removeBook = document.getElementById('removeButton');

showButton.addEventListener('click', () => {
    bookDialog.showModal();
})

closeDialog.addEventListener('click', () => {
    bookDialog.close();
})

removeBook.addEventListener('click', () => {
    const parentElement = this.parentNode;
    parentElement.remove();
})