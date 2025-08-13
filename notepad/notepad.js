
const notepadInput = document.querySelector('.notepad-title-input')
const notepadTextarea = document.querySelector('.notepad-textarea');
const saveButton = document.querySelector('.notepad-save-btn');
const createdNotesBox = document.querySelector('.created-notes-box');
const clearButton = document.querySelector('.clear-storage-btn');


let notepadNotes = JSON.parse(localStorage.getItem("notepad-notes")) ?? [];
let editingNoteIndex = null;


// save notes to localStorage
const saveNotesToStorage = () => {
    localStorage.setItem("notepad-notes", JSON.stringify(notepadNotes));
};


const createNoteElement = (oneNote, index) => {
    const noteElementDiv = document.createElement('div');
    noteElementDiv.classList.add('one-note');


    const noteTitle = document.createElement('h4');
    noteTitle.classList.add('one-note-title');
    noteTitle.textContent = oneNote.title;

    const noteDescription = document.createElement('div');
    noteDescription.classList.add('one-note-description');
    noteDescription.textContent = oneNote.description;

    const editButton = document.createElement('button');
    editButton.textContent = "Edit";
    editButton.classList.add('note-edit-button');
    editButton.addEventListener("click", () => {
        notepadInput.value = oneNote.title;
        notepadTextarea.value = oneNote.description;
        editingNoteIndex = index;
        saveButton.textContent = "Update Note";
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";
    deleteButton.classList.add('note-delete-button');
    deleteButton.addEventListener("click", () => {
        notepadNotes.splice(index, 1);
        saveNotesToStorage();
        renderNotes();
    });


    noteElementDiv.appendChild(noteTitle);
    noteElementDiv.appendChild(noteDescription);
    noteElementDiv.appendChild(editButton);
    noteElementDiv.appendChild(deleteButton);

    createdNotesBox.appendChild(noteElementDiv);
};


const renderNotes = () => {
    createdNotesBox.textContent = '';
    notepadNotes.forEach((note, index) => {
        createNoteElement(note, index);
    });
};


//  save or update note
saveButton.addEventListener("click", () => {
    const title = notepadInput.value.trim();
    const description = notepadTextarea.value.trim();

    // prevent saving empty notes
    if (!title && !description) return;

    const note = { title, description };

    if(editingNoteIndex !== null) {
        notepadNotes[editingNoteIndex] = note;
        editingNoteIndex = null;
        saveButton.textContent = "Save Note";
    } else {
        notepadNotes.push(note);
    }

    saveNotesToStorage();
    renderNotes();


    // clear input values
    notepadInput.value = "";
    notepadTextarea.value = "";

});

    
// clear local storage and UI

clearButton.addEventListener("click", () => {
    localStorage.removeItem("notepad-notes");
    notepadNotes = [];
    renderNotes();
});


//  initial render
renderNotes();



