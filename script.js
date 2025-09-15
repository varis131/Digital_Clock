document.getElementById("clock").innerText = new Date().toLocaleTimeString();
setInterval(() => {
  document.getElementById("clock").innerText = new Date().toLocaleTimeString();
}, 1000);