const allPodcastsContainer = document.querySelector('.all-podcasts-container');



const notebookLMpodcasts5 = [
   '../sounds/for-coding-NotebookLM-audio/attention-and-memory-notebook-LM-podcast.wav',
    '../sounds/for-coding-NotebookLM-audio/creativity-science-notebook-LM-podcast.wav',
    '../sounds/for-coding-NotebookLM-audio/fourth-dimension-notebookLM_podcast.wav',
    '../sounds/for-coding-NotebookLM-audio/Paris-notebook-LM-podcast.wav',
   '../sounds/for-coding-NotebookLM-audio/Quantum-Mechanics-Notebook-LM.wav'
];



// to create audio element


function createAudioElement(src, index) {
    const audioDiv = document.createElement('div');
    audioDiv.classList.add('audio-div');


    const audioID = document.createElement('div');
    audioID.textContent = `Notebook LM podcast # ${index + 1}`;

    const audioTitle = document.createElement('div');
    audioTitle.classList.add('audio-title');
    audioTitle.textContent = src;
    audioTitle.textContent = src.replace('../sounds/for-coding-NotebookLM-audio/', '').replace('.wav', '');


    // to add audio file wrapper and audio file itself

    const audioFileWrapper = document.createElement('audio');
    audioFileWrapper.controls = true;
    audioFileWrapper.classList.add('audio-file-wrapper');

    const audioFile = document.createElement('source');
    audioFile.src = src;
    audioFile.type = 'audio/wav'; // if all files are in WAV format


    audioFileWrapper.appendChild(audioFile);
    audioDiv.appendChild(audioID);
    audioDiv.appendChild(audioTitle);
    audioDiv.appendChild(audioFileWrapper);

    return audioDiv;
}

function addAudioFiles() {
    notebookLMpodcasts5.forEach((podcast, index) => {
        const audioElement = createAudioElement(podcast, index);
        allPodcastsContainer.appendChild(audioElement);

    })
}


addAudioFiles();




const aiLibrarySearch = document.querySelector('#ai-library-search');
const audioDivs = document.querySelectorAll('.audio-div');
const audioTitles = document.querySelectorAll('.audio-title');

aiLibrarySearch.addEventListener('input', function () {
    const query = this.value.toLowerCase();
    audioDivs.forEach(audioDiv => {
        const text = audioDiv.textContent.toLowerCase();
        audioDiv.classList.toggle('hide-audio-div', !text.includes(query));
    });
});





// 
// search bar functionality WRONG
// const aiLibrarySearch = document.getElementById('ai-library-search');


// searchInput.addEventListener('input', function() {
//     const searchText = this.value.toLowerCase();
//     const audioTitles = document.querySelectorAll('.audio-title');

//     audioTitles.forEach(item => {
//         const title = item.dataset.title.toLowerCase();
//         const parentDiv = item.closest('.audio-div');
//         // item.textContent = src.substring(src.lastIndexOf('/') + 1);
//         // item.dataset.title = item.textContent; 

//         if(title.includes(searchText)) {
//           parentDiv.style.display = '';
//          }else {
//              parentDiv.style.display = 'none';
//          }
//     });
// });



