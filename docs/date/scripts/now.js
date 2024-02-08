function updateNow(currDateDisp, currTimeDisp) {
  const now = new Date();
  const month = now.getMonth()
  const date = now.getDate()
  const year = now.getFullYear()
  const hour = now.getHours()
  const min = now.getMinutes()
  const sec = now.getseconds()

  const dateStr = 'Current date: <b>' + month + '/' + date + '/' + year + '</b>'
  const timeStr = 'Current time: <b>' + hour + ':' + min + ':' + sec + '</b>'

  currDateDisp.innerHTML = dateStr;
  currTimeDisp.innerHTML = timeStr;
}

const currDateDisplay = document.createElement('p');
currDateDisplay.innerHTML = 'Current date:';

const currTimeDisplay = document.createElement('p');
currTimeDisplay.innerHTML = 'Current time:';

const nowButton = document.createElement("button");
nowButton.textContent = 'Update Now';
nowButton.addEventListener('click', () => updateNow(currDateDisplay, currTimeDisplay));

document.body.appendChild(nowButton)
document.body.appendChild(currDateDisplay)
document.body.appendChild(currTimeDisplay)
