const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

let bookName;
let authorName;
let numPages;
let read;
let newBook; 



document.getElementById('addBook')
.addEventListener('click', (e) => {
    bookName = document.getElementById('book_name').value;
    authorName = document.getElementById('author_name').value;
    numPages = document.getElementById('num_pages').value;
    read = document.getElementById('read').checked;
    newBook = new Book(bookName, authorName, numPages, read);
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
          if (key === 'read') {
            continue;
          }
          let myString = JSON.stringify(element[key]);
          myString = charRemove(myString);
          const newP = document.createElement('p');
          newP.className = 'content';
          newDiv.appendChild(newP);
          newP.innerHTML = myString;
        };
        if (element.read == false) {
            console.log(element.read.value);
            let x = document.createElement('INPUT');
            x.setAttribute('type', 'checkbox');
            x.checked = false;
            x.className = 'readToggle';
            newDiv.appendChild(x); 
        }
        else {
            let x = document.createElement('INPUT');
            x.setAttribute('type', 'checkbox');
            x.checked = true;
            x.className = 'readToggle';
            newDiv.appendChild(x);  
        }
        const removeButton = document.createElement('button');
        removeButton.id = 'removeButton';
        newDiv.appendChild(removeButton);
        removeButton.textContent = 'Remove Book';
        removeButton.className = 'content';
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
    const target = e.target.closest('#removeButton');
    if (target) {
        const parent = target.parentNode.closest('.card');
        const arrElem = parent.getAttribute("data-index");
        myLibrary.splice(arrElem, 1);
        console.log(arrElem)
        parent.remove();
    }
})

document.addEventListener('click', (e) => {
    let target = e.target.closest('.readToggle');
    if (target) {
        let parent = target.parentNode.closest('.card');
        let arrElem = parent.getAttribute("data-index");
        myLibrary[arrElem].read = !myLibrary[arrElem].read;
    }
})
