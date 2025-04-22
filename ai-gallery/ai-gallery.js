const allArtContainer = document.querySelector('.all-art-container');

const aiArtArray = [

    '../images/food/chatGPT-plant-based-dish-2.PNG',
    '../images/food/chatGPT-dessert-screenshot.png',
    '../images/food/chatgpt-breakfast-dish-1.png',
    '../images/food/chatgpt-lunch-dish-2.png',
    '../images/food/chatgpt-lunch-dish-1.png',
    '../images/food/chatgpt-smoothie-1.png'
];




function createArtworkElement(src, index) {

    const artworkDiv = document.createElement('a');
    artworkDiv.href = './generate-text.html';
    artworkDiv.classList.add("ai-artwork-div");

    const labelDiv = document.createElement('div');
    labelDiv.textContent = `AI Artwork #${index + 1}`;

    const pathDiv = document.createElement('div');
    pathDiv.textContent = src;
    pathDiv.textContent = src.substr(10, 350);

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