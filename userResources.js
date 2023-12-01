function handleKeyDown(event) {
  const keyPressed = event.key.toLowerCase();
  const isCtrlPressed = event.ctrlKey;
  const isAltPressed = event.altKey;
  const isTildePressed = keyPressed === '`' || keyPressed === '˜'; // Tilde key

  if (isCtrlPressed && isAltPressed && isTildePressed) {
    alert('Ctrl + Alt + Tilde pressed!');
  }
}

// Attaching event listener for keydown
document.addEventListener('keydown', handleKeyDown);
