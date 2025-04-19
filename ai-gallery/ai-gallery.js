const allArtContainer = document.querySelector('.all-art-container');

const aiArtArray = [
    '../images/chatgpt-fruits-image.png',
    '../images/chatgpt-mushroom-in-a-jar-image.png',
    '../images/chatgpt-summer-morning-image.png',
    '../images/chatgpt-cartoonish-house-1.png',
    '../images/chatgpt-flower-field.png',
    '../images/chatgpt-modern-living-room.png',
    '../images/chatgpt-skyscrapers.png',
    '../images/chatpgt-cute-cartoonish-hamster.png'

];


function createArtworkElement(src, index) {
    const artworkDiv = document.createElement('div');
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