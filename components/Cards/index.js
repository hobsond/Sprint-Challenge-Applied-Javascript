// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

function createCard(headline,authImg,authName){
    const card = document.createElement('div')
    card.classList.add('card')

    const head= document.createElement('div')
    head.classList.add('headline')
    head.textContent = headline;

   

    const author = document.createElement('div')
    author.classList.add('author')

    const imgContainer= document.createElement('div')
    imgContainer.classList.add('img-container')

    const img = document.createElement('img')
    img.setAttribute('src', authImg)

    const name = document.createElement('span')
    name.textContent = authName



    card.appendChild(head)
    card.appendChild(author)
    author.appendChild(imgContainer)
    imgContainer.appendChild(img)
    author.appendChild(name)
    const cardCont = document.querySelector('.cards-container')
    cardCont.appendChild(card)

}



axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(data =>{
        const articles = data.data.articles
        
        let articleTopics= []
        
        for(items in articles){
            articleTopics.push(items)
        }

      
        for(let i = 0 ; i < articleTopics.length; i++ ){
            dataObjects= Object.entries(articles)[i][1]
        
          console.log( dataObjects)
          debugger
          dataObjects.forEach(cardinfo =>{
              
              createCard(cardinfo.headline,cardinfo.authorPhoto,cardinfo.authorName)

            

          })
           


        }
    })