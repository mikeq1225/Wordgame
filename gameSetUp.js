var words3 = commonWords.filter(function(data) {
  return data.length > 2
})

var randomWord = words3[Math.floor(Math.random() * words3.length)]

var displayWord = randomWord.split("")
console.log(displayWord)

const letter2 = displayWord.map(function(item) {
  return `<p class="letterBox actualLetter">${item.toUpperCase()}</p>`
})

const underScore = displayWord.map(function() {
  return `<p class="hideLetter">_</p>`
})

$(".displayWord").html(letter2)
$(".hideWord").html(underScore)
