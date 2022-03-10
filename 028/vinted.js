
fetch('https://in3.dev/vinted/api/products/13')
  .then(response => response.json())
  .then(data => {
        console.log(data)
    const h1 = document.createElement('h1')
    h1.innerText = data.message;

    document.querySelector('body').appendChild(h1)
    

});