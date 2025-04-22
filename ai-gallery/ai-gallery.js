const allArtContainer = document.querySelector('.all-art-container');

const aiArtArray = [

    '../images/food/chatgpt-mediterrarean-bowl.png',

    '../images/food/chatgpt-dessert.png',

    '../images/food/chatgpt-oatmeal.png',

    '../images/food/chatgpt-breakfast.png',

    '../images/food/chatgpt-burrito-bowl.png',

    '../images/food/chatgpt-tropical-smoothie.png'
];

const arrayOfPoems = [
    '../files-for-reading/chatgpt-mediterranean-bowl-advertisement.pdf',



    '../files-for-reading/chatgpt-dessert-advertisement.pdf',


  '../files-for-reading/chatgpt-oatmeal-advertisement.pdf',


  '../files-for-reading/chatgpt-breakfast-advertisement.pdf',

  '../files-for-reading/chatgpt-burrito-bowl-advertisement.pdf',

'../files-for-reading/chatgpt-tropical-smoothie-advertisement.pdf'
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