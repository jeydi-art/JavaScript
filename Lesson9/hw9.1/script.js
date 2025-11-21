const block = document.createElement('div');
block.classList.add('wrap', 'collapse', 'alpha', 'beta');
block.textContent = 'Original block';

const clone = block.cloneNode(true);
clone.textContent = 'Cloned block!';

document.body.append(block, clone);
