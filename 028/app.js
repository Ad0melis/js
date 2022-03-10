const h1 = document.querySelector('h1')
const p = document.querySelector('p')
const button = document.querySelector('button')
const input = document.querySelector('input')
const ul = document.querySelector('ul')


fetch('https://jsonplaceholder.typicode.com/posts/7')
  .then(response => response.json())
  .then(data => {
        console.log(data)

    h1.innerText = data.title;
    p.innerText = data.body;

});



button.addEventListener('click', () => {

fetch('https://jsonplaceholder.typicode.com/posts/'+ input.value)
  .then(response => response.json())
  .then(data => {
        console.log(data)

    h1.innerText = data.title;
    p.innerText = data.body;

});
});




fetch('https://picsum.photos/v2/list')
    .then(response => response.json())
    .then(data => {
        const ul = document.createElement('ul');
        let html = '';
        data.forEach(element => {
            html += `<li>${element.author}</li>`;
        });
        ul.innerHTML = html;
        document.querySelector('body').appendChild(ul);
    });


    // fetch('https://picsum.photos/v2/list')
    // .then(response => response.json())
    // .then(data => {
    //     const div = document.createElement('div');
    //     data.forEach(element => {
    //         const img = document.createElement('img');
    //         img.setAttribute('src', element.download_url);
    //         div.appendChild(img);
    //     });
    //     document.querySelector('body').appendChild(div);
    // });
  



fetch('https://in3.dev/vinted/api/products/19')
    .then(response => response.json())
    .then(data => {


        const div = document.createElement('div');
        const h1 = document.createElement('h1');
        div.appendChild(h1);
        h1.appendChild(document.createTextNode(data.title));
        // PIRMAS IMG
        const mainImgUrl = data.img[data.main_img];
        data.img.splice(data.main_img, 1); // isimam pagrindini
        const img1 = document.createElement('img');
        img1.setAttribute('src', mainImgUrl);
        img1.classList.add('big');
        div.appendChild(img1);


        data.img.forEach(image => {
            const img = document.createElement('img');
            img.setAttribute('src', image);
            img.classList.add('small');
            div.appendChild(img);
        });
        document.querySelector('body').appendChild(div);
    });