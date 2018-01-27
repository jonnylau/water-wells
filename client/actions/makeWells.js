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
      });
  };

  submitBtn.addEventListener('click', submitUserInput, false);

});