const allPodcastsContainer = document.querySelector('.all-podcasts-container');

const notebookLMpodcasts = [
    '../sounds/for-coding-NotebookLM-audio/attention-and-memory-notebook-LM-podcast.wav',
    '../sounds/for-coding-NotebookLM-audio/creativity-science-notebook-LM-podcast.wav',
    '../sounds/for-coding-NotebookLM-audio/fourth-dimension-notebookLM_podcast.wav',
    '../sounds/for-coding-NotebookLM-audio/Paris-notebook-LM-podcast.wav',
    '../sounds/for-coding-NotebookLM-audio/Quantum-Mechanics-Notebook-LM.wav',

    // 
     '../sounds/for-coding-NotebookLM-audio/communication-skills-notebook-lm-podcast.wav',
     '../sounds/for-coding-NotebookLM-audio/Culture-of-the-United-States-notebook-lm-podcast.wav',
     '../sounds/for-coding-NotebookLM-audio/France-as-a-country-notebook-lm-podcast.wav',
     '../sounds/for-coding-NotebookLM-audio/France-culture-notebook-LM-podcast.wav',
     '../sounds/for-coding-NotebookLM-audio/French-cuisine-notebook-lm-podcast.wav',


     '../sounds/for-coding-NotebookLM-audio/Human-Brain-notebook-LM-podcast.wav',
     '../sounds/for-coding-NotebookLM-audio/jules-verne-around-the-world-in-80-days-notebook-lm-podcast.wav',
     '../sounds/for-coding-NotebookLM-audio/Language-learning-notebook-LM-podcast.wav',
     '../sounds/for-coding-NotebookLM-audio/longevity-notebook-lm-podcast.wav',
     '../sounds/for-coding-NotebookLM-audio/Louvre-notebook-LM-podcast.wav',


     '../sounds/for-coding-NotebookLM-audio/memory-and-learning-notebook-lm-podcast.wav',
     '../sounds/for-coding-NotebookLM-audio/memory-short-term-long-term-notebook-lm-podcast.wav',
     '../sounds/for-coding-NotebookLM-audio/musketeers-fiction-notebook-LM-podcast.wav',
     '../sounds/for-coding-NotebookLM-audio/Neuroscience-health-Notebook-LM_podcast.wav',
     '../sounds/for-coding-NotebookLM-audio/notebook-LM-enchiridion-epictetus.wav',

     '../sounds/for-coding-NotebookLM-audio/Notebook-LM-history-of-Greece.wav',
     '../sounds/for-coding-NotebookLM-audio/Notebook-LM-The-Great-Pizza-Heist.wav',
     '../sounds/for-coding-NotebookLM-audio/Rousseau-confessions-notebook-LM.wav',
     '../sounds/for-coding-NotebookLM-audio/smartphone-science-notebook-LM-podcast.wav',
     '../sounds/for-coding-NotebookLM-audio/software-engineering-news-notebook-LM-podcast.wav',

     '../sounds/for-coding-NotebookLM-audio/Subatomic-particles-notebook-LM-podcast.wav',
     '../sounds/for-coding-NotebookLM-audio/Sweden-notebook-lm-podcast.wav',
     '../sounds/for-coding-NotebookLM-audio/United-States-as-a-country-notebook-lm-podcast.wav',

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