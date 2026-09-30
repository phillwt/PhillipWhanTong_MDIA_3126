let button1 = document.getElementById("button1")
let button2 = document.getElementById("button2")
let button3 = document.getElementById("button3")
let button4 = document.getElementById("button4")

button1.addEventListener("click", () => {
    alert("Button 1 was cliked!")
})

button2.addEventListener("click", () => {
    alert("Button 2 was cliked!")
})

button3.addEventListener("click", () => {
    alert("Button 3 was cliked, though it's meant to be disabled!")
})

button4.addEventListener("click", () => {
    alert("Button 4 was cliked!")
})