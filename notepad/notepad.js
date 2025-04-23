const notepadInput = document.querySelector('.notepad-title-input')
const notepadTextarea = document.querySelector('.notepad-textarea');
const saveButton = document.querySelector('.notepad-save-btn');
const createdNotesBox = document.querySelector('.created-notes-box');


const loadNotes = () => {
    const createdNotes = JSON.parse(localStorage.getItem("notepad-notes")) ?? [];
    createdNotes.forEach(createNoteElement);
}

const createNoteElement = (content) => {
    const noteElementDiv = document.createElement('div');
    noteElementDiv.classList.add('one-note');
    noteElementDiv.textContent = content;

    const noteTitle = document.createElement('h3');
    noteTitle.classList.add('one-note-title');

    const noteDescription = document.createElement('div');
    noteDescription.classList.add('one-note-description');

    noteElementDiv.appendChild(noteTitle);
    noteElementDiv.appendChild(noteDescription);
    createdNotesBox.appendChild(noteElementDiv);
}

saveButton.addEventListener("click", () => {
    const noteTitle = notepadInput.value.trim();
    const noteDescription = notepadTextarea.value.trim();

    const noteContent = `${noteTitle}: ${noteDescription}`;
    createNoteElement(noteContent);

    notepadInput.value = "";
    notepadTextarea.value = "";

    const arrayOfNotes = JSON.parse(localStorage.getItem("notepad-notes")) ?? [];
    arrayOfNotes.push(noteContent);
    localStorage.setItem("notepad-notes", JSON.stringify(notes));
})

loadNotes();