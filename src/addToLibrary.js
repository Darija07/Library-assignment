import Book from "./book.js";


const bookLibrary = [];


function getUserInput() {
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const pages = document.getElementById('pages').value
    const read = document.getElementById('myCheck').checked

    return { title, author, pages, read }
}

function addToLibrary() {
    const { title, author, pages, read } = getUserInput();
    const newBook = new Book(title, author, pages, read)
    bookLibrary.push(newBook)
}

export { bookLibrary, addToLibrary }