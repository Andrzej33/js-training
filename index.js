
const URL = 'https://hn.algolia.com/api/v1/';
const PER_PAGE = 4;
let page = 0;
let pages = 0;
let query = '';
let items = [];

const refs = {
    form: document.querySelector('.form'),
    list: document.querySelector('.list')
}

// const render = () => {
//     const list = items.map(({title,url}) => ` <li><a href="${url}"
//      target="_blank">"${title}"</a></li>`)
//     .join('')
//     refs.list.innerHTML = ''
//     refs.list.insertAdjacentHTML('beforeend',list)
// }




function createRequest ()  {
    createData(query, PER_PAGE, page)
        .then((data) => {
            items = data.hits;
            pages = data.nbPages
            // render()
        })
    .catch(error => console.log(error));
}

const onInput = (e) => {
    e.preventDefault();
    const { value } = e.target.elements.query
    query = value;
    createRequest()
}

refs.form.addEventListener('submit', onInput)
 
function createData(x,y,z) {
    fetch(`${URL}search?query=${x}&hitsPerPage=${y}&page=${z}`)
    .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
    //     .then(res => {
    //         if (res.ok) {
    //         console.log(res);
    //         return res.json() 
            
    //         }
    //         throw new Error ('fucking')
    // })
}