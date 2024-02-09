function updateNow(disps) {
    const now = new Date();

    const yr4 = now.getFullYear()
    const mon = now.getMonth() + 1
    const dom = now.getDate()
    const hrs = now.getHours()
    const min = now.getMinutes()
    const sec = now.getSeconds()

    const yr4Str = yr4.toString()
    const monStr = mon > 9 ? mon.toString() : '0' + mon.toString()
    const domStr = dom > 9 ? dom.toString() : '0' + dom.toString()
    const hrsStr = hrs > 9 ? hrs.toString() : '0' + hrs.toString()
    const minStr = min > 9 ? min.toString() : '0' + min.toString()
    const secStr = sec > 9 ? sec.toString() : '0' + sec.toString()

    const dateStr = 'Current date: <b>' + monStr + '/' + domStr + '/' + yr4Str + '</b>'
    const timeStr = 'Current time: <b>' + hrsStr + ':' + minStr + ':' + secStr + '</b>'

    disps[0].innerHTML = dateStr;
    disps[1].innerHTML = timeStr;
}

const currDateDisplay = document.createElement('p');
currDateDisplay.innerHTML = 'Current date:';

const currTimeDisplay = document.createElement('p');
currTimeDisplay.innerHTML = 'Current time:';

const nowButton = document.createElement("button");
nowButton.textContent = 'Update Now';

// const displays = [currDateDisplay, currTimeDisplay];
nowButton.addEventListener('click', () => updateNow([currDateDisplay, currTimeDisplay]));

document.body.appendChild(nowButton)
document.body.appendChild(currDateDisplay)
document.body.appendChild(currTimeDisplay)
