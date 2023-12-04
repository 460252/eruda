/// execute_script.js
// function handleKeyDown(event) {
//   const keyPressed = event.key.toLowerCase();
//   const isCtrlPressed = event.ctrlKey;
//   const isAltPressed = event.altKey;
//   const isTildePressed = keyPressed === '`' || keyPressed === '˜'; // Tilde key

//   if (isCtrlPressed && isAltPressed && isTildePressed) {
//     alert('Ctrl + Alt + Tilde pressed!');
//   }
// }

// // Attaching event listener for keydown
// document.addEventListener('keydown', handleKeyDown);
(function() {
  let script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/npm/eruda";
  script.addEventListener("load", () => eruda.init());
  document.body.appendChild(script);
})();
