function letters() {
  var letter = "abcdefghijklmnopqrstuvwxyz"
  var button = letter
    .toUpperCase()
    .split("")
    .map(function(item) {
      return `
            <button class="buttons">${item}</button>`
    })
    .join("")
  $("#letters").html(button)
}

// class Letter {
//   constructor(alphabet) {
//     this.alphabet = alphabet
//     this.value = alphabet
//   }
// }
