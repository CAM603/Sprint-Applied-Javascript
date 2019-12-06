// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then( response => {
    response.data.topics.forEach(topic => {
        // Add to DOM 
        let topics = document.querySelector('.topics');
        topics.appendChild(tabMaker(topic));
    });;
})
.catch( err => {
    console.log( err)
})

// Create tab component
function tabMaker(topic) {
    let tab = document.createElement('div');
    tab.classList.add('tab');
    tab.textContent = topic;
    tab.dataset.topic = topic;

    tab.addEventListener('click', (event) => {
        let topic = event.target.dataset.topic;
        let card = document.querySelectorAll('.card');
        card.forEach(el => {
            el.style.display = 'flex';
            el.dataset.topic === topic ? el : el.style.display = 'none';
        })
    })

    return tab;
}
