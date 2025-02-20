const clickButton = document.createElement('button')
clickButton.textContent = "click me"

const resetButton = document.createElement('button')
resetButton.textContent = "reset"
resetButton.disabled = true

function updateGreeting() {
    document.getElementById("greeting").innerHTML = "<b>Hello, World!</b>"
    clickButton.disabled = true
    resetButton.disabled = false
}

function resetGreeting() {
    document.getElementById("greeting").innerHTML = 'Try again.'
    clickButton.disabled = false
    resetButton.disabled = true
}

clickButton.addEventListener("click", updateGreeting)
resetButton.addEventListener("click", resetGreeting)

document.body.appendChild(clickButton)
document.body.appendChild(resetButton)

