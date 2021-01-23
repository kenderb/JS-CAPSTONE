
// M1mobuMiRuczfzhHj0qs
// name: 'Space Shooter'
export default class ScoresApi {
  constructor() {
    this.url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/M1mobuMiRuczfzhHj0qs/scores/';
  }

  static catchErrors(response) {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response;
  }

  getScores() {
    return fetch(this.url,
      {
        method: 'GET',
        mode: 'cors',
      })
      .then((res) => res.json())
      .then(data => data);
  }

  postScores(user, score) {
    fetch(this.url,
      {
        method: 'POST',
        mode: 'cors',
        headers:
          { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user, score }),
      })
      .then(ScoresApi.catchErrors);
  }
}