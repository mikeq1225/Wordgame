$(document).ready(function() {
  letters()
  // wordSelector()
  var word = displayWord
  var lives = 8
  var guess = ""
  $("#letters").on("click", "button", function(e) {
    e.preventDefault()
    value = $(this).html()
    guess = value

    $(this).attr("disabled", true)

    for (i = 0; i < randomWord.length; i++) {
      if (guess === randomWord.charAt(i)) {
        wordArr = word.split("")
        wordArr[i] = guess
        word = wordArr.join("")
      }
    }
    if (word.includes(guess)) {
      lives = lives
    } else {
      lives--
    }

    if (word == randomWord) {
      $("#letters").html("Congratulations! YOU WIN!")
    }

    if (lives == 0) {
      $("#letters").html("GAME OVER")
    }

    $(".displayWord").html(word)
    $(".lives").html(`Turns remaining: ${lives}`)
  })
})
