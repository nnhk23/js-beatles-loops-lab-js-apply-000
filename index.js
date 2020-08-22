var arr = [];
function theBeatlesPlay (musician, instrument) {
  for (let i = 0; i < musician.length; i++) {
    arr.push(`${musician[i]} plays ${instrument[i]}`)
  }
  return arr
}

function johnLennonFacts (fact) {
  let i = 0;
  var array = [];
  while (i < fact.length) {
    array.push(`${fact[i]}!!!`)
    i++
  }
  return array
}

function iLoveTheBeatles(number){
  var list = [];
  do {
    list.push("I love the Beatles!")
    number++
  } while (
    15 - number > 0
    );
    return list
}