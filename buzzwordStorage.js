let buzzWords = [];
let totalScore = {
  'totalScore': 0
};

function read() {
  return { "buzzWords": buzzWords };
};

function add(word) {
  let doesntExist = true;
  buzzWords.forEach(buzzWord => {
    if (buzzWord.buzzWord === word.buzzWord) {
      doesntExist = false;
    };
  });

  if (doesntExist) {
    buzzWords.push(word);
  };
  return doesntExist;
};

function update(word) {
  if (!word.buzzWord) {
    return false;
  };

  let exists = false;
  buzzWords.forEach(buzzWord => {
    if (buzzWord.buzzWord === word.buzzWord) {
      exists = true;
      buzzWords.splice(buzzWords.indexOf(buzzWord), 1, word);
    }
  });
  return exists;
};

function deleteWord(word) {
  if (!word.buzzWord) {
    return false;
  }

  let exists = false;
  buzzWords.forEach(buzzWord => {
    if (buzzWord.buzzWord === word.buzzWord) {
      exists = true;
      buzzWords.splice(buzzWords.indexOf(buzzWord), 1);
    };
  });
  return exists;
};

function score(word) {
  if (!word.buzzWord) {
    return false;
  };

  let exists = false;
  buzzWords.forEach(buzzWord => {
    if (buzzWord.buzzWord === word.buzzWord) {
      exists = true;
      totalScore.totalScore += parseInt(buzzWord.points);
    };
  });

  if (exists) {
    return totalScore;
  } else {
    return false;
  }
}

function reset() {
  buzzWords.length = 0;
};

module.exports = {
  read,
  add,
  update,
  deleteWord,
  reset,
  score
};