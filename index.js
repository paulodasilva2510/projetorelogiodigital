function updateClock() {
  var now = new Date();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();

  document.getElementById('hour').innerText = hour;
  document.getElementById('minute').innerText = minute;
  document.getElementById('second').innerText = second;
}

setInterval(updateClock, 1000); // Call the updateClock function every second
