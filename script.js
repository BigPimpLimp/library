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
let elementIndex = 0;


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
});

let cardWrapper = document.getElementById('card-wrapper');

function addBookToDisplay(arr) {
    arr.forEach(element => {
      let i = arr.indexOf(element);
      if (i === arr.length - 1) {
        const newDiv = document.createElement('div');
        newDiv.className = 'card';
        cardWrapper.appendChild(newDiv);
        newDiv.dataset.index = i;
        for (let key in element) {
          let myString = JSON.stringify(element[key]);
          myString = charRemove(myString);
          const newP = document.createElement('p');
          newDiv.appendChild(newP);
          newP.innerHTML = myString;
        };
        const removeButton = document.createElement('button');
        removeButton.className = 'removeButton';
        newDiv.appendChild(removeButton);
        removeButton.textContent = 'Remove Book';
      }
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
    return str;
}

const showButton = document.getElementById('openDialog');
const bookDialog = document.getElementById('bookDialog');
const closeDialog = document.getElementById('closeDialog');

showButton.addEventListener('click', () => {
    bookDialog.showModal();
})

closeDialog.addEventListener('click', (e) => {
    bookDialog.close();
    e.preventDefault();
})

document.addEventListener('click', (e) => {
    const target = e.target.closest('.removeButton');
    if(target) {
        const parent = target.parentNode.closest('.card');
        const arrElem = parent.getAttribute("data-index");
        myLibrary.splice(arrElem, 1);
        console.log(arrElem)
        parent.remove();
    }
})
