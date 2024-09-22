export default function GameDetails() {
  this.title;
  this.gameStatus;
  this.thumbnail;
  this.description;
  this.gameUrl;
  this.genre;
  this.platform;

  this.getGameDetails = async function (gameId = 452) {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "90d00c3520msh581c59f31d0b0ebp1b8bfejsn079c64fce703",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    let httpReq = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?${gameId}`,
      options
    );
    let response = await httpReq.json();

    // console.log(response);

    this.title = response.title;
    this.gameStatus = response.status;
    this.thumbnail = response.thumbnail;
    this.description = response.description;
    this.gameUrl = response.game_url;
    this.genre = response.genre;
    this.platform = response.platform;

    // console.log(this.title);
  };
}
