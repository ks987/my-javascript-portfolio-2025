const allArtContainer = document.querySelector('.all-art-container');

const aiArtArray = [
    '../images/chatgpt-fruits-image.png',
    '../images/chatgpt-mushroom-in-a-jar-image.png',
    '../images/chatgpt-summer-morning-image.png'
];




// let artToAdd = (aiArtArray.map((artwork, index) => (
//     <div class="ai-artwork">
//         <div>AI Artwork # {index + 1}</div>
//         <div>{artwork}</div>
//         <img
//           class="chatgpt-image"
//           src={artwork}
//         />
//       </div>)))

  
// function somethingToAdd(artToAdd) {
//     const imageElement = document.createElement('img');
//     imageElement.classList.add('chatgpt-artwork');
//     imageElement.textContent = artToAdd;
//     allArtContainer.appendChild(imageElement);
// }

// somethingToAdd();



function createArtworkElement(src, index) {
    const artworkDiv = document.createElement('div');
    artworkDiv.classList.add("ai-artwork-div");

    const labelDiv = document.createElement('div');
    labelDiv.textContent = `AI Artwork #${index + 1}`;

    // const pathDiv = document.createElement('div');
    // pathDiv.textContent = src;

    const img = document.createElement('img');
    img.classList.add('chatgpt-image');
    img.src = src;


    artworkDiv.appendChild(labelDiv);
    // artworkDiv.appendChild(pathDiv);
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