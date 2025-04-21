const colorsSearchBar = document.querySelector('.colors-search-bar');
const colorNames = document.querySelectorAll('.color-name');


colorsSearchBar.addEventListener('input', function() {
    const query = this.value.toLowerCase();
    colorNames.forEach(color => {
        const text = color.textContent.toLowerCase();
        color.classList.toggle('hide-item', !text.includes(query));
    });
});
