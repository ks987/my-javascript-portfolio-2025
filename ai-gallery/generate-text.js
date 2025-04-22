const container = document.querySelector('.generate-text-container');

const arrayOfPoems = [
    '../files-for-reading/chatGPT-Falafel-Fiesta-A-Bowl-Drama.pdf',
  '../files-for-reading/chatGPT-Ode-to-the-Strawberry-Choco-Supreme.pdf',
  '../files-for-reading/chatGPT-Ode-to-the-Oaty-Beast--a-Very-Nutty-Tale.pdf',
  '../files-for-reading/chatGPT-Ode-to-a-Bowl-of-Chaos.pdf',
  '../files-for-reading/chatGPT-Ode-to-a-Bowl-of-Beans-and-Greens.pdf',
'../files-for-reading/chatGPT-Ode-to-a-Tropical-Smoothie-Supreme.pdf'
];


function createTextElement(src, index) {
const smallContainer = document.createElement('div');




    const textTitle = document.createElement('div');
    textTitle.textContent = src.substr(21, 350);
    textTitle.classList.add('text-title');

    
    const textFile = document.createElement('embed');
    textFile.classList.add('text-file');
    textFile.src = src;
    textFile.type = 'application/pdf';
    textFile.width = '100%';
    textFile.height = '600px';


smallContainer.appendChild(textTitle);
    smallContainer.appendChild(textFile);
    container.appendChild(smallContainer);
}




function addTextFile() {
    arrayOfPoems.forEach((text, index) => {
        const textElement = createTextElement(text, index);
        container.appendChild(textElement);
    })};

