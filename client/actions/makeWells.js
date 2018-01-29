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
          console.log(response)
          
          let makeGrid = (gridSize) => {
            for (let rows = 0; rows < gridSize; rows++) {
              for (let cols = 0; cols < gridSize; cols++) {
                const className = 'box'
                document.getElementById('grid').append(
                  `<div class=${className}></div>`
                  )
              }
            }
            let grid = document.getElementById('grid');
            let boxes = document.getElementsByClassName('box');

            console.log(boxes);


          }
          makeGrid(gridSize);
      });
  };

  submitBtn.addEventListener('click', submitUserInput, false);

});