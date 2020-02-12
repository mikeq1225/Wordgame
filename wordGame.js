$(document).ready(function() {
  $("#letters").on("click", "button", function(e) {
    e.preventDefault()
    const state = {
      disabled: false,
      value: "",
      guesses: 8
    }

    state.value += $(this).html()
    state.guesses -= 1
    state.disabled = true
    console.log(state)
    // letter2.forEach(item => {
    //   if (value == letter2[item]) {
    //     $(this)
    //       .parents("div")
    //       .find("+ p")
    //       .removeClass("letterBox")
    //   }
    // })
  })
})
