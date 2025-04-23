

const container = document.querySelector('.generate-text-container');

function getTextFileFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('text');
}


function displayText(textPath) {
    const smallContainer = document.createElement('div');

    const textTitle = document.createElement('div');
    textTitle.textContent = textPath.substr(21, 350).toLowerCase().replace('.pdf', '').replace('-', ' '); // shorten displayed name
    textTitle.classList.add('text-title');

    const textContent = document.createElement('embed');
    textContent.classList.add('text-file');
    textContent.src = textPath;
    textContent.type = 'application/pdf';
    textContent.width = '100%';
    textContent.height = '600px';

    smallContainer.appendChild(textTitle);
    smallContainer.appendChild(textContent);
    container.appendChild(smallContainer);

}


//run the function

const itemPath = getTextFileFromURL();

if(itemPath) {
    displayText(itemPath);
}