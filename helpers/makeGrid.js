export default function makeGrid(gridSize) {
  let boxDimensions = 960/gridSize;
  for (let rows = 0; rows < gridSize; rows++) {
    for (let cols = 0; cols < gridSize; cols++) {
      let box = document.createElement('div');
        box.className = 'box'
        box.style.width = `${boxDimensions}px`;
        box.style.height = `${boxDimensions}px`;
      document.getElementById('grid').append(box);
    }
  }
};