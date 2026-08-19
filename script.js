const titleInput=document.querySelector('.title-input')
const descriptionInput=document.querySelector('.description-input')
const addBtn=document.querySelector('.add-btn')
const error=document.querySelector('.error')
const searchInput=document.querySelector('.search-input')
const noteCount=document.querySelector('.note-count')
const notesContainer=document.querySelector('.notes-container')


const notes=[]


addBtn.addEventListener('click',()=>{
    const title=titleInput.value
    const description=descriptionInput.value

    if (title===''  || description==='') {
        error.textContent='Please fill all the fields';
       return 
    }

    const note={
    title:title,
    description:description,
}


    notes.push(note);
    titleInput.value=''
    
    descriptionInput.value=''
    console.log(notes)
    
    error.textContent=''
    renderNotes()
})  



function renderNotes() {
    notesContainer.innerHTML=''
    if (notes.length == 0) {    
        notesContainer.innerHTML= `<p class='empty-message'>No Notes Available</p>` 
      }
notes.forEach(function (note) {
    const card = document.createElement('div')
card.classList.add('note-card')
card.innerHTML=`
<h3>${note.title}</h3>
<p>${note.description}</p>
<button  class="edit-btn">Edit</button>
<button  class="del-btn">Delete</button>
`
notesContainer.appendChild(card)

})
noteCount.textContent=notes.length
}

const delBtn=document.querySelector('.del-btn')
function deleteNote() {
delBtn.addEventListener('click',()=>{


})
    
}


        renderNotes()
