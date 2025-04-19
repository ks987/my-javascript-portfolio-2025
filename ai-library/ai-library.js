const allPodcastsContainer = document.querySelector('.all-podcasts-container');

const notebookLMpodcasts = [
    '../sounds/for-coding-NotebookLM-audio/attention-and-memory-notebook-LM-podcast.wav',
    '../sounds/for-coding-NotebookLM-audio/creativity-science-notebook-LM-podcast.wav',
    '../sounds/for-coding-NotebookLM-audio/fourth-dimension-notebookLM_podcast.wav',
    '../sounds/for-coding-NotebookLM-audio/Paris-notebook-LM-podcast.wav',
    '../sounds/for-coding-NotebookLM-audio/Quantum-Mechanics-Notebook-LM.wav'
];



function createAudioElement(src, index) {
    const audioDiv = document.createElement('div');
    audioDiv.classList.add('audio-div');


    const audioID = document.createElement('div');
    audioID.textContent = `Notebook LM podcast # ${index + 1}`;

    const audioTitle = document.createElement('div');
    audioTitle.textContent = src;
    audioTitle.textContent = src.substr(10, 350);
    audioTitle.textContent = src.substring(src.lastIndexOf('/') + 1);

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
    notebookLMpodcasts.forEach((podcast, index) => {
        const audioElement = createAudioElement(podcast, index);
        allPodcastsContainer.appendChild(audioElement);

    })

}

addAudioFiles();