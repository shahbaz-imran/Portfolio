let textArea = document.getElementById('textArea');
let addBtn = document.getElementById('addBtn');
let delBtn = document.getElementById('delBtn');
let notes = document.getElementById('notes');
let searchBar = document.getElementById('searchBar');
let searchBtn = document.getElementById('searchBtn');

// let notesArray = [];
window.addEventListener('DOMContentLoaded', showNotes());

addBtn.addEventListener('click', () => {
    let notesElement = localStorage.getItem('notesArray');
    if (notesElement === null) {
        initTodo = [];
    } else {
        initTodo = JSON.parse(notesElement);
    }

    if (textArea.value === '') {
        alert("Notes can't be blank");
    } else {
        initTodo.push(textArea.value);
        localStorage.setItem('notesArray', JSON.stringify(initTodo));
        showNotes();
        textArea.value = '';
    }

})

function showNotes() {
    let notesElement = localStorage.getItem('notesArray');
    if (notesElement === null) {
        initTodo = [];
    } else {
        initTodo = JSON.parse(notesElement);
    }

    let html = '';
    initTodo.forEach((value, index) => {
        html += ` 
    <div class="card my-1 mx-1" style="width: 17rem;">
        <div class="card-body">
            <h5 class="card-title">note ${index + 1}</h5>
            <p>${value}</p>
            <hr>
            <a href="#" class="btn btn-outline-danger" id=${index} onclick="deleteNote(this.id)">Delete Note</a>
        </div>
    </div>`
    })
    if (initTodo.length != 0) {
        notes.innerHTML = html;
        // localStorage.setItem('notesArray', JSON.stringify(initTodo));
    } else {
        notes.innerHTML = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>No Notes To Displaly!</strong> You can use 'Add-Notes' section to add your note.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`;
    }

}

function deleteNote(index) {
    let notesElement = localStorage.getItem('notesArray');
    if (notesElement === null) {
        initTodo = [];
    } else {
        initTodo = JSON.parse(notesElement);
    }

    initTodo.splice(index, 1);
    localStorage.setItem('notesArray', JSON.stringify(initTodo));
    showNotes();
}



searchBar.addEventListener('input', () => {
    let inputvalue = searchBar.value;
    console.log(searchBar.value);

    let card = document.getElementsByClassName('card');

    Array.from(card).forEach((element) => {
        let cardText = element.getElementsByTagName("p")[0].innerText;
        if (cardText.includes(inputvalue)) {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    })
})








