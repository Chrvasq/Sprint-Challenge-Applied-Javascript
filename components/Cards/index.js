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

function Card(data) {
  // create elements
  const card = document.createElement("div");
  const headline = document.createElement("div");
  const authorContainer = document.createElement("div");
  const imageContainer = document.createElement("div");
  const authorName = document.createElement("span");

  // add classes to elements
  card.classList.add("card");
  headline.classList.add("headline");
  authorContainer.classList.add("author");
  imageContainer.classList.add("img-container");

  // add content to elements
  headline.textContent = data.headline;
  imageContainer.insertAdjacentHTML(
    "afterbegin",
    `<img src=${data.authorPhoto} />`
  );
  authorName.textContent = data.authorName;

  // build component
  card.appendChild(headline);
  card.appendChild(authorContainer);
  authorContainer.appendChild(imageContainer);
  authorContainer.appendChild(authorName);

  return card;
}

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    let keys = Object.keys(response.data.articles);
    keys.forEach(key => {
      response.data.articles[key].forEach(article => {
        document.querySelector(".cards-container").appendChild(Card(article));
      });
    });
  })
  .catch(error => {
    console.log("Error: ", error);
  });
