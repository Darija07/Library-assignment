import { bookLibrary } from "./addToLibrary.js"
import render from "./render.js"

function counter() {
    const attachTotalBooks = document.querySelector(".booksInLibrary")
    const attachTotalRead = document.querySelector(".totalRead")
    const attachTotalUnread = document.querySelector(".totalUnread")
    const attachEmptyLibrary = document.querySelector(".emptyLibrary")

    // total books
    const allBooks = bookLibrary.length;
    attachTotalBooks.innerHTML = allBooks

    // total read books 
    const totalRead = bookLibrary.filter((book) => book.read === true).length
    attachTotalRead.innerHTML = totalRead;

    // total unRead book
    const totalUnread = bookLibrary.filter((book) => book.read === false).length
    attachTotalUnread.innerHTML = totalUnread;

    // empty all library
    attachEmptyLibrary.addEventListener("click", () => {

        //empty the bookLibrary
        bookLibrary.splice(0, bookLibrary.length)
        //update counter to 0
        attachEmptyLibrary.innerHTML = bookLibrary.length;
        attachTotalBooks.innerHTML = 0;
        attachTotalRead.innerHTML = 0;
        attachTotalUnread.innerHTML = 0;

        //rerender 
        render();
    })
}

export default counter;




