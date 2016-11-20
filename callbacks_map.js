function map(lyric, elm ){
  var result = [];
  //console.log(lyric);
  var i = 0;
  for (value of lyric){
    result[i] = getLength(value);
    i++;
  }
  //console.log(result);
  return result;

}

function getLength( word ) {
  //console.log(word);
  return word.length;

    }

console.log(map(["ground", "control", "to", "major", "tom"], getLength ));
