import { addToLibrary } from "./addToLibrary.js";
import render from "./render.js";
import counter from "./counter.js";


const selectForm = document.querySelector(".openForm");
const formActivation = document.querySelector(".form-container");

selectForm.addEventListener("click", () => {
    formActivation.classList.remove("active");
});

const closeIcon = document.querySelector(".close-icon");
closeIcon.addEventListener("click", () => {
    formActivation.classList.add("active");
});


function submitForm(e) {
    //prevent relaoding the page
    e.preventDefault()
    addToLibrary()
    render()
    document.getElementById('title').value = ''
    document.getElementById('author').value = ''
    document.getElementById('pages').value = ''
    document.getElementById('myCheck').checked = false;
    formActivation.classList.add("active")

    counter();

}

//upon submit open form 
const addNewBook = document.getElementById('addbook')
addNewBook.addEventListener('submit', submitForm)


















