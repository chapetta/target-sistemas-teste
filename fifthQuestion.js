
function reversedString(string) {
  const word = string.split('')
  const reverdWord = []

  for (let i= word.length -1; i >= 0; i--){
    reverdWord.push(word[i])
  }
  return reverdWord.join('')
}


console.log(reversedString('chapetta'))