
function createDiv() {
    const container = document.querySelector('.container');
    for (i = 0; i < 256; i++) {
        const content = document.createElement('div');
        content.classList.add('content');
        content.addEventListener('mouseover', function (e) {
            e.target.style.background = 'black';
          });
        container.appendChild(content);
    }
}

createDiv();