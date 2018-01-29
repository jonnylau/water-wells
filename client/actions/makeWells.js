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
          let gridSize = response.cols;
          const makeGrid = (gridSize) => {
            let boxDimensions = 600/gridSize;
            for (let rows = 0; rows < gridSize; rows++) {
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

      });
  };

  submitBtn.addEventListener('click', submitUserInput, false);

});