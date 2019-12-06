// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then( response => {
    let obj = response.data.articles;

    let entries = Object.entries(obj);
    for (let [key, value] of entries) {
        console.log(key, value);
        value.forEach(obj => {
            let cardContainer = document.querySelector('.cards-container');
            cardContainer.appendChild(cardMaker(obj, key));
        })
    }
    // let values = Object.values(obj);
    // for (let el of values) {
    //     el.forEach(obj => {
    //         let cardContainer = document.querySelector('.cards-container');
    //         cardContainer.appendChild(cardMaker(obj))
    //     });
    // }
})
.catch( err => {
    console.log(err);
})

function cardMaker(obj, topic) {
    // Create elements
    let card = document.createElement('div');
    let headLine = document.createElement('div');
    let author = document.createElement('div');
    let imgContainer = document.createElement('div');
    let img = document.createElement('img');
    let name = document.createElement('span');
    // Add class
    card.classList.add('card');
    headLine.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    if (topic === 'node') {
        card.dataset.topic = 'node.js';
    } else {
        card.dataset.topic = topic;
    }
    // Add text content and img src
    headLine.textContent = obj.headline;
    img.src = obj.authorPhoto;
    name.textContent = 'By ' + obj.authorName;
    // Append
    card.appendChild(headLine);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(img);
    author.appendChild(name);

    return card
}
