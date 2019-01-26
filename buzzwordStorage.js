let buzzWords = [];

function read() {
  return { "buzzWords": buzzWords };
}

function add(word) {
  let doesntExist = true;
  buzzWords.forEach(buzzWord => {
    if (buzzWord.buzzWord === word.buzzWord) {
      doesntExist = false;
    }
  });
  if (doesntExist) {
    buzzWords.push(word);
  }
  return doesntExist;
}

function update(word) {
  let exists = false;
  buzzWords.forEach(buzzWord => {
    if (buzzWord.buzzWord === word.buzzWord) {
      exists = true;
      buzzWords.splice(buzzWords.indexOf(buzzWord), 1, word)
    }
  });
  return exists;
}

function deleteWord(word) {
  let exists = false;
  buzzWords.forEach(buzzWord => {
    if (buzzWord.buzzWord === word.buzzWord) {
      exists = true;
      buzzWords.splice(buzzWords.indexOf(buzzWord), 1)
    }
  });
  return exists;
}

module.exports = {
  read,
  add,
  update,
  deleteWord
}