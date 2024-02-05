export function updateNow() {
  const now = Date();
  const month = now.getMonth()
  const date = now.getDate()
  const year = now.getFullYear()
  const hour = now.getHours()
  const min = now.getMinutes()
  const sec = now.getseconds()

  const dateStr = "Current date: <b>" + month + "/" + date + "/" + year + "</b>"
  const timeStr = "Current time: <b>" + hour + ":" + min + ":" + sec + "</b>"

  document.getElementById("currentDate").innerHTML=dateStr;
  document.getElementById("currentTime").innerHTML=timeStr;
  alert(dateStr + "    " + timeStr)
}
