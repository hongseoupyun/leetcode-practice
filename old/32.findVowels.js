function getVowelsCount(sentence) {

  let count = 0;
  let vowel = ["a", "e", "i", "o", "u"]

  for (let char of sentence){
    if(vowel.includes(char.toLowerCase())){
      count++
    }
  }
  return console.log(count)
}
getVowelsCount("Hello my name is hongseoup")
getVowelsCount("aaaeeii")