
const notepadTextarea = document.querySelector('.notepad-textarea');
const saveButton = document.querySelector('.notepad-save-btn');
const createdNotesBox = document.querySelector('.created-notes-box');


const loadNotes = () => {
    const notes = JSON.parse(localStorage.getItem("notepad-notes")) ?? [];
    notes.forEach(createNoteElement);
}

const createNoteElement = (content) => {
    const noteElementDiv = document.createElement('div');
    noteElementDiv.classList.add('one-note');
    noteElementDiv.textContent = content;
    createdNotesBox.appendChild(noteElementDiv);
}

saveButton.addEventListener("click", () => {
    const noteContent = notepadTextarea.value.trim();
    createNoteElement(noteContent);
    notepadTextarea.value = "";
    const notes = JSON.parse(localStorage.getItem("notes")) ?? [];
    notes.push(noteContent);
    localStorage.setItem("notepad-notes", JSON.stringify(notes));
})

loadNotes();