function displayArea() {
  <p id="hw">
    Greeting to be displayed here.
  </p>
}

function hello() {
  <button type="button" onClick='document.getElementById("hw").innerHTML =
      "Hello, World!"'>Click the button</button>
}

displayArea();
hello();
