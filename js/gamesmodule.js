export default class Games {
  constructor() {
    this.gamesData;
  }

  async getGamesData(gameCategory = "mmorpg") {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "90d00c3520msh581c59f31d0b0ebp1b8bfejsn079c64fce703",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    let httpReq = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=shooter${gameCategory}`,
      options
    );
    let response = await httpReq.json();
    // console.log(response);

    this.gamesData = response;
    // console.log(gamesData.length);
  }
}
