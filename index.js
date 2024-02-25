const elements = {
    list: document.querySelector('.js-list'),
    guard: document.querySelector('.container-guard'),
}

let page = 1;

const options = {
    rootMargin: '300px',
}
const observer = new IntersectionObserver(handlerLoadMore, options);
function createMarkup(arr) {
    console.log(arr);
    const markup = arr.map(h => {
        return `<div class="movie-item">
                    <img class="img" src="${h}/> 
                    alt="${h}">
                    <h3>${h}</h3>
                    <h4></h4>
                    <p>Last known location: ${h}</p>
                    <p>First seen in: ${h}</p>
                </div>`
    }).join('');
    return markup;
}
fetch('https://rickandmortyapi.com/api/character')
    .then(resp => {console.log(resp)
    if (!resp.ok) {
        throw new Error('error');
        }
        return resp.json();
    })
    .catch(err => console.error(err));

function handlerLoadMore() {
    
}