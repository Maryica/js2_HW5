let div = document.createElement('div')
let body = document.querySelector('body')
body.appendChild(div)
let parseData = JSON.parse(data)
//console.log(parseData)
parseData.forEach(element => {
    div.insertAdjacentHTML('beforeend', `
        <figure>
        <img src="${element.fox.img}"" />
        <figcaption>Fox</figcaption>
        <h2>${element.fox.name}</h2>
        <p>${element.fox.text}</p>
        </figure>`)
});
