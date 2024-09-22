import GameDetails from "./gamedetails.js";

let homeSection = document.querySelector(".home-section");
let gameDetailSection = document.querySelector(".game-detials");
let loadingScreen = document.querySelector(".loading-section");

let newGameDetails = new GameDetails();

export function displayGamesData(arr) {
  let gamesBox = "";
  let gamesData = document.querySelector("#gamesData");

  for (let i = 0; i < arr.length; i++) {
    gamesBox += ` 
              <div class="col">
                <div class="card" role="button" -data-gameId=${arr[i].id}>
                  <div class="card-img overflow-hidden p-3">
                    <img
                      class="img-fluid"
                      src=${arr[i].thumbnail}
                      alt="gameImage" />
                  </div>
                  <div class="card-body text-center px-3 pt-1">
                    <div
                      class="card-title d-flex justify-content-between align-items-center">
                      <h3>${arr[i].title}</h3>
                      <span class="p-2 bg-primary rounded-2">Free</span>
                    </div>
                    <p class="text-secondary">
                    ${arr[i].short_description.substr(0, 50)}
                    </p>
                  </div>
                  <div
                    class="card-footer d-flex justify-content-between w-100 px-3 py-2">
                    <small class="p-1 rounded-2">${arr[i].genre}</small>
                    <small class="p-1 rounded-2">  ${arr[i].platform}</small>
                  </div>
                </div>
              </div>`;
  }
  gamesData.innerHTML = gamesBox;

  loadingScreen.classList.add("d-none");

  cardsEvent();
}

function cardsEvent() {
  let gameId;
  let gameCards = document.querySelectorAll(".card");

  console.log(gameCards);

  gameCards.forEach((card) => {
    card.addEventListener("click", () => {
      gameDetailSection.classList.remove("d-none");
      homeSection.classList.add("d-none");
      loadingScreen.classList.remove("d-none");

      gameId = card.getAttribute("-data-gameid");
      console.log(gameId);

      displayDetails(gameId);
    });
  });
}

async function displayDetails(id) {
  await newGameDetails.getGameDetails(id);
  displayGameDetails(
    newGameDetails.thumbnail,
    newGameDetails.title,
    newGameDetails.genre,
    newGameDetails.platform,
    newGameDetails.gameStatus,
    newGameDetails.description,
    newGameDetails.gameUrl
  );
}

function displayGameDetails(
  imgLink,
  title,
  genre,
  platform,
  status,
  desc,
  gameLink
) {
  let gamesBox = "";
  let gameDetailsBody = document.querySelector("#gameDetailsBody");

  gamesBox = ` <div class="game-details-body-img col-12 col-md-5">
                      <img
                        class="img-fluid w-100"
                        src=${imgLink}
                        alt="" />
                    </div>
                    <div class="game-details-body-content">
                      <h3 class="heading-ff">Title: <span>${title}</span></h3>
                      <p>Category: <span class="rounded-2">${genre}</span></p>
                      <p>Platform: <span class="rounded-2">${platform}</span></p>
                      <p>Status: <span class="rounded-2">${status}</span></p>
                      <p>${desc}</p>
                      <a class="btn btn-outline-warning text-white" href=${gameLink}
                        >Show Game</a
                      >
                    </div>`;

  gameDetailsBody.innerHTML = gamesBox;
  loadingScreen.classList.add("d-none");
}
