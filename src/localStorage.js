const localStoreScore = (score) => {
  const scr = JSON.stringify(score);
  localStorage.setItem('scores', scr);
};

const getLocalScores = () => {
  const score = localStorage.getItem('scores');
  let result = JSON.parse(score);
  if (result === null) {
    result = [0, 0];
    localStoreScore(result);
  }
  return result;
};

const storeScores = (score) => {
  const localScore = getLocalScores();
  localScore[0] = score;
  localScore[1] = Math.max(...localScore);
  localStoreScore(localScore);
};

export { localStoreScore, getLocalScores, storeScores };