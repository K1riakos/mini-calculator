const input = document.getElementById("inp")
const kostas = document.getElementById("res")
let num1 = 0
let num2 = 0
let calc = ""

function clearScreen() {
  if (input.value !== "") {
    input.value = ""
    num1 = 0
    num2 = 0
  }
}

function dNum(number) {
  if (input.value) {
    input.value += number
  } else {
    input.value = number
  }
}

function plus() {
  num1 = parseInt(input.value)
  calc = "plus"
  input.value = ""
}

function minus() {
  num1 = parseInt(input.value)
  calc = "minus"
  input.value = ""
}

function result() {
  num2 = parseInt(input.value)
  if (calc == "plus") {
    kostas.innerText = num1 + num2
  } else if (calc == "minus") {
    kostas.innerText = num1 - num2
  }
  input.value = ""
}
