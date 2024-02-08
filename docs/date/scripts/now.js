function updateNow(currDateDisp, currTimeDisp) {
    const now = new Date()
    const month = now.getMonth().toString()
    const date = now.getDate().toString()
    const year = now.getFullYear().toString()
    const hour = now.getHours().toString()
    const min = now.getMinutes().toString()
    const sec = now.getseconds().toString()

    const dateStr = 'Current date is <b>' + month + '/' + date + '/' + year + '</b>'
    const timeStr = 'Current time is <b>' + hour + ':' + min + ':' + sec + '</b>'

    currDateDisp.innerHTML = dateStr
    currTimeDisp.innerHTML = timeStr
}

const currentDateDisplay = document.createElement('p')
currentDateDisplay.innerHTML = 'Current date:'

const currentTimeDisplay = document.createElement('p')
currentTimeDisplay.innerHTML = 'Current time:'

const nowButton = document.createElement("button")
nowButton.textContent = 'Update date & time'
nowButton.addEventListener('click', () => updateNow(currentDateDisplay, currentTimeDisplay))

document.body.appendChild(currentDateDisplay)
document.body.appendChild(currentTimeDisplay)
document.body.appendChild(nowButton)

updateNow(currentDateDisplay, currentDateDisplay)
