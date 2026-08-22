const titleInput = document.querySelector('.title-input')
const descriptionInput = document.querySelector('.description-input')
const addBtn = document.querySelector('.add-btn')
const error = document.querySelector('.error')
const searchInput = document.querySelector('.search-input')
const noteCount = document.querySelector('.note-count')
const notesContainer = document.querySelector('.notes-container')


const savedNotes=localStorage.getItem('notes')
const notes=savedNotes ? JSON.parse(savedNotes): []

let editIndex = null

function saveToLocalStorage() {
     localStorage.setItem('notes',JSON.stringify(notes))
}
addBtn.addEventListener('click', () => {
    const title = titleInput.value
    const description = descriptionInput.value

    if (title === '' || description === '') {
        error.textContent = 'Please fill all the fields';
        return
    }

    if (editIndex !== null) {
        notes[editIndex].title = title
        notes[editIndex].description = description

        editIndex = null

        addBtn.textContent = 'Add Note'
        
    } else {
        const note = {
            title: title,
            description: description,
        }

        notes.push(note);
    }

    titleInput.value = ''
    descriptionInput.value = ''


    saveToLocalStorage()
    error.textContent = ''
    renderNotes()
})




function renderNotes() {
    notesContainer.innerHTML = ''
    if (notes.length == 0) {
        notesContainer.innerHTML = `<p class='empty-message'>No Notes Available</p>`
    }else{
    notes.forEach(function (note, index) {
        const card = document.createElement('div')
        card.classList.add('note-card')
        card.innerHTML = `
        <h3>${note.title}</h3>
        <p>${note.description}</p>
        <button  class="edit-btn">Edit</button>
        <button  class="del-btn">Delete</button>
        `
        notesContainer.appendChild(card)
        // DELETE BTN

        const delBtn = card.querySelector('.del-btn')
        delBtn.addEventListener('click', () => {
            notes.splice(index, 1)
            renderNotes()
            saveToLocalStorage()
        })

        // END DELETE BTN

        //  EDIT BTN

        const editBtn = card.querySelector('.edit-btn')
        editBtn.addEventListener('click', () => {

            titleInput.value = note.title;
            descriptionInput.value = note.description;

            editIndex = index
            
            addBtn.textContent = 'Update Note'
            titleInput.focus()
        })

        // END EDIT BTN
    })
    }
    noteCount.textContent = notes.length
}
renderNotes()
