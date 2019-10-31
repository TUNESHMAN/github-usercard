/* Step 1: using axios, send a GET request to the following URL 
           (replacing the placeholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
function createCard(data) {
  // CREATE HTML MARKUP
  const outerDiv = document.createElement("div");
  const picture = document.createElement("img");
  const innerDiv = document.createElement("div");
  const smallHeader = document.createElement("h3");
  const para1 = document.createElement("p");
  const para2 = document.createElement("p");
  const para3 = document.createElement("p");
  const para4 = document.createElement("p");
  const para5 = document.createElement("p");
  const para6 = document.createElement("p");
  const anchor = document.createElement("a");

  // CREATE CLASSES
  outerDiv.classList.add("card");
  innerDiv.classList.add("card-info");
  smallHeader.classList.add("name");
  para1.classList.add("username");

  // ADD CONTENT
  picture.src = data.avatar_url;
  smallHeader.textContent = data.name;
  para1.textContent = data.login;
  para2.textContent = data.location;
  para4.textContent = `Followers: ${data.followers}`;
  para5.textContent =`Following: ${data.following}` ;
  para6.textContent = `Bio: ${data.bio}`;
  para3.textContent = `Profile: `;
  anchor.setAttribute("href", data.url);
  anchor.textContent = data.url;

  // DEFINE HTML MARKUP
  outerDiv.append(picture);
  outerDiv.append(innerDiv);
  innerDiv.append(para1);
  innerDiv.append(para2);
  innerDiv.append(para3);
  innerDiv.append(para4);
  innerDiv.append(para5);
  innerDiv.append(para6);
  para3.append(anchor);

  return outerDiv;
}

const bodyStructure = document.querySelector(".cards");
// MAKING MY API REQUEST
axios
  .get("https://api.github.com/users/Tuneshman")
  .then(info => {
    bodyStructure.append(
      createCard(
        info.data,
    
      )
    );
  })
  .catch(error => {
    console.log(error);
  });
