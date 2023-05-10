import { bookLibrary } from "./addToLibrary.js";
import counter from "./counter.js";


function render() {
  const cardContainer = document.querySelector('.app')
  cardContainer.innerHTML = "";

  bookLibrary.forEach((book, index) => {
    const bookCard = document.createElement('div')
    bookCard.classList.add('bookCard')

    //attach close icon
    const attachCloseIcon = document.createElement("i")
    attachCloseIcon.classList.add("fas")
    attachCloseIcon.classList.add("fa-times")
    attachCloseIcon.classList.add("card-icon")
    bookCard.appendChild(attachCloseIcon)

    attachCloseIcon.addEventListener("click", () => {
      const ind = bookCard.getAttribute("data-index")
      // we have index access BookLib.slip
      bookLibrary.splice(index, 1)
      //render
      render();
      //counter 
      counter()
    });


    const titleAdd = document.createElement('h2')
    titleAdd.classList.add('h2')
    titleAdd.textContent = book.title
    bookCard.appendChild(titleAdd)

    const authorAdd = document.createElement('h3')
    authorAdd.classList.add('h3')
    authorAdd.textContent = `Author: ${book.author}`;
    bookCard.appendChild(authorAdd)

    const pagesAdd = document.createElement('h3')
    pagesAdd.classList.add('h3')
    pagesAdd.textContent = `Pages: ${book.pages}`;
    bookCard.appendChild(pagesAdd)

    const readAdd = document.createElement('h3')
    readAdd.classList.add('h3')

    readAdd.textContent = book.read ? 'Read' : 'Not read';
    bookCard.appendChild(readAdd)

    // give each cardBook index
    bookCard.setAttribute("data-index", index)

    cardContainer.appendChild(bookCard);

  })
}

export default render