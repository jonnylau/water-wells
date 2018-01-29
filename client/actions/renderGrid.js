const renderGrid = () => {
  for (let col = 0; col < gridSize; col++) {
    for (let row = 0; row < blocks[col]; row ++) {
      document.getElementById(`${row}${col}`).style.backgroundColor = 'black';
    }
  }
  for (let col = 0; col < gridSize; col++) {
    for (let row = 0; row < wells[col]; row ++) {
      document.getElementById(`${row}${col}`).style.backgroundColor = 'blue';
    }
  }
}