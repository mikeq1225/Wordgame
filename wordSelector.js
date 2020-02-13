var words3 = commonWords.filter(function(data) {
  return data.length > 2
})
var randomWord = words3[Math.floor(Math.random() * words3.length)].toUpperCase()

var space = "_"
var newWord = randomWord.toUpperCase().split("")
var displayWord = newWord
  .map(function() {
    return space
  })
  .join("")
$(".displayWord").html(displayWord)

// function wordSelector() {
//   var words3 = commonWords.filter(function(data) {
//     return data.length > 2
//   })
//   var randomWord = words3[Math.floor(Math.random() * words3.length)]
//   var space = "_"
//   var newWord = randomWord.toUpperCase().split("")
//   var displayWord = newWord
//     .map(function() {
//       return `<p class="letterBox actualLetter">${space}</p>`
//     })
//     .join("")
//   $(".displayWord").html(displayWord)
//   console.log(newWord)
// }
