const allArtContainer = document.querySelector('.all-art-container');

const aiArtArray = [

    '../images/food/chatGPT-plant-based-dish-2.png',
    '../images/food/chatGPT-dessert-screenshot.png',
    '../images/food/chatgpt-breakfast-dish-1.png',
    '../images/food/chatgpt-lunch-dish-2.png',
    '../images/food/chatgpt-lunch-dish-1.png',
    '../images/food/chatgpt-smoothie-1.png'
];

const arrayOfPoems = [
    '../files-for-reading/chatGPT-Falafel-Fiesta-A-Bowl-Drama.pdf',
  '../files-for-reading/chatGPT-Ode-to-the-Strawberry-Choco-Supreme.pdf',
  '../files-for-reading/chatGPT-Ode-to-the-Oaty-Beast--a-Very-Nutty-Tale.pdf',
  '../files-for-reading/chatGPT-Ode-to-a-Bowl-of-Chaos.pdf',
  '../files-for-reading/chatGPT-Ode-to-a-Bowl-of-Beans-and-Greens.pdf',
'../files-for-reading/chatGPT-Ode-to-a-Tropical-Smoothie-Supreme.pdf'
];




function createArtworkElement(src, index) {
    const artworkDiv = document.createElement('a');

    // link to generate-text.html and pass the corresponding poem file as query parameter
    const poemFile = arrayOfPoems[index]; // link image to its corresponding poem
    artworkDiv.href = `./generate-text.html?poem=${encodeURIComponent(poemFile)}`;
    artworkDiv.classList.add("ai-artwork-div");

    const labelDiv = document.createElement('div');
    labelDiv.textContent = `AI Artwork #${index + 1}`;

    const pathDiv = document.createElement('div');
    pathDiv.textContent = src.substr(15, 350).toLowerCase().replace('.png', '').replace('-', ' ');
    

    const img = document.createElement('img');
    img.classList.add('chatgpt-image');
    img.src = src;


    artworkDiv.appendChild(labelDiv);
    artworkDiv.appendChild(pathDiv);
    artworkDiv.appendChild(img);

    return artworkDiv;

}

function addArtworks(){
    aiArtArray.forEach((artwork, index) => {
        const artElement = createArtworkElement(artwork, index);
        allArtContainer.appendChild(artElement);
    })
}


addArtworks();