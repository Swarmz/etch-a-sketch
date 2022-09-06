
function createGrid(size) {
    const container = document.querySelector('.container');
    for (i = 0; i < size; i++) {
        const content = document.createElement('div');
        content.classList.add('content');
        content.addEventListener('mouseover', function (e) {
            e.target.style.background = 'black';
          });
        container.appendChild(content);
    }
}

let btn = document.getElementById("btn");
btn.addEventListener('click', event => {
  getSize();
});

function getSize() {
    let size = prompt("Enter a number to size your Etch-A-Sketch(1-100)", 16);
    createGrid(size);
}

createGrid();