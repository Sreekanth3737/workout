function createCountdownTimer(seconds) {
  let remainingTime = seconds;

  function updateTimer() {
    if (remainingTime > 0) {
      console.log(`Time remaining: ${remainingTime} seconds`);
      remainingTime--;
    } else {
      console.log("Time is up!");
      clearInterval(timerInterval);
    }
  }

  const timerInterval = setInterval(updateTimer, 1000);
}

createCountdownTimer(10);
createCountdownTimer(20);
