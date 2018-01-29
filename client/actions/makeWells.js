// import makeGrid from './makeGrid';

document.addEventListener("DOMContentLoaded", () => {
  
  const submitBtn = document.getElementById('submitBtn');
  console.log(inputBlocks);

  const submitUserInput = () => {
    var inputBlocks = document.getElementById('inputBlocks').value;
    const myInit = {
      method: 'POST',
      body: JSON.stringify({ inputBlocks: inputBlocks }),
      headers: new Headers ({
        'Content-type': 'application/json',
        'Accept': 'application/json',
      }),
    }
    fetch('http://localhost:3000/makeBlocks', myInit)
      .then(res => res.json())
      .then((response) => {
        console.log(response);

          let gridSize = response.cols;
          let wells = response.wellsByCol;
          let blocks = response.blocks;
          
          const makeGrid = (gridSize) => {
            let boxDimensions = 600/gridSize;
            for (let rows = gridSize -1; rows >= 0; rows--) {
              for (let cols = 0; cols < gridSize; cols++) {
                let box = document.createElement('div');
                  box.className = 'box'
                  box.id = `${rows}${cols}`
                  box.style.width = `${boxDimensions}px`;
                  box.style.height = `${boxDimensions}px`;
                document.getElementById('grid').append(box);
              }
            }
          };          
          
          makeGrid(gridSize);
          const renderBlocks = () => {
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
            // for every element in the input array (col)
            // for the count of that element (blocks) 
            // row = gridSize - 1
            // getElementById(row, col)   
          }
          renderBlocks();
      });
  };

  submitBtn.addEventListener('click', submitUserInput, false);

});