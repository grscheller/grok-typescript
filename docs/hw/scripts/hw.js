function displayArea() {
  <p id="hw">
    Greeting to be displayed here.
  </p>
}

function helloButton() {
  <button type="button"
    onClick='document.getElementById("hw").innerHTML = "<b>Hello, World!</b>"'>
    Click the button
  </button>
}

displayArea();
helloButton();
