const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
]
const buttons = letters.map(function(item) {
  return `
          <button class="buttons">${item.toUpperCase()}</button>`
})
$("#letters").html(buttons)

class Letter {
  constructor(alphabet) {
    this.alphabet = alphabet
    this.value = alphabet
  }
}
