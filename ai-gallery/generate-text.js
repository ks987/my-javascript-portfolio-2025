

const container = document.querySelector('.generate-text-container');

function getPoemFileFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('poem');
}


function displayPoem(poemPath) {
    const smallContainer = document.createElement('div');

    const textTitle = document.createElement('div');
    textTitle.textContent = poemPath.substr(21, 350).toLowerCase().replace('.pdf', '').replace('-', ' '); // shorten displayed name
    textTitle.classList.add('text-title');

    const textFile = document.createElement('embed');
    textFile.classList.add('text-file');
    textFile.src = poemPath;
    textFile.type = 'application/pdf';
    textFile.width = '100%';
    textFile.height = '600px';

    smallContainer.appendChild(textTitle);
    smallContainer.appendChild(textFile);
    container.appendChild(smallContainer);

}


//run the function

const poemPath = getPoemFileFromURL();

if(poemPath) {
    displayPoem(poemPath);
}