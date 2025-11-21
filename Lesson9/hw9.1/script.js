const block = document.createElement('div');
block.classList.add('wrap', 'collapse', 'alpha', 'beta');
document.body.appendChild(block);
block.textContent = 'Original block';
const clone = block.cloneNode(true);
document.body.appendChild(clone);
clone.textContent = 'Cloned block!';