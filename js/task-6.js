function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  }
  
  const controls = document.querySelector('#controls');
  const input = controls.querySelector('input[type="number"]');
  const createButton = controls.querySelector('button[data-create]');
  const destroyButton = controls.querySelector('button[data-destroy]');
  const boxesContainer = document.querySelector('#boxes');
  
  function createBoxes(amount) {

    boxesContainer.innerHTML = '';
    
    const elements = [];
    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.style.width = `${30 + i * 10}px`;
      box.style.height = `${30 + i * 10}px`;
      box.style.backgroundColor = getRandomHexColor();
      elements.push(box);
    }
    
    boxesContainer.append(...elements);
  }
  
  function destroyBoxes() {
    boxesContainer.innerHTML = '';
  }
  
  createButton.addEventListener('click', () => {
    const amount = parseInt(input.value.trim(), 10);
    
    if (amount >= 1 && amount <= 100) {
      createBoxes(amount);
      input.value = ''; 
    } else {
      alert('Please enter a number between 1 and 100');
    }
  });
  
  destroyButton.addEventListener('click', destroyBoxes);
  