
function createGrid(size) {
    const container = document.querySelector('.container');
    for (i = 0; i < size**2; i++) {
        const content = document.createElement('div');
        content.classList.add('content');
        content.style.width = Math.sqrt((1024**2)/(size**2)) + 'px';    // calc the required width/height to distribute the boxes evenly in the container
        content.style.height = Math.sqrt((1024**2)/(size**2)) + 'px';
        content.addEventListener('mouseover', function (e) {
            e.target.style.background = 'black';
          });
        container.appendChild(content);
    }
}

function eraseGrid() {
    const removeContent = document.querySelectorAll('.content');
    removeContent.forEach(content => {
        content.remove();
    });
}

let btn = document.getElementById("btn");
btn.addEventListener('click', event => {
    eraseGrid();
    getSize();
});

function getSize() {
    let size = prompt("Enter a number to size your Etch-A-Sketch(1-100)", 16);
    createGrid(size);
}


createGrid(16);

