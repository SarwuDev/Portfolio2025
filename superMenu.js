  const items = ['After Effects', 'Cinema 4D', 'Indesign', 'Illustrator', 'Photoshop'];
  let currentIndex = 0;

  const itemDisplay = document.getElementById('superMenuItem');
  const leftBtn = document.querySelector('.arrow.left');
  const rightBtn = document.querySelector('.arrow.right');

  function updateItem() {
    itemDisplay.textContent = items[currentIndex];
  }

  leftBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateItem();
  });

  rightBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;
    updateItem();
  });

  updateItem(); // initialize with first item
