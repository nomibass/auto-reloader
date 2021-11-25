const getIntervalInput = () => {
  return document.getElementById('interval')
}

const timer = new Timer();

chrome.storage.local.get(['interval', 'reload'], items => {
  const intervalValue = items.interval;
  getIntervalInput().value = intervalValue;
});

document.getElementById('startButton').addEventListener('click', function() {
  const intervalValue = parseInt(getIntervalInput().value);

  chrome.storage.local.set({
    interval: intervalValue,
  });

  if(intervalValue <= 0) {
    return;
  }

  timer.setTimer(sendReloadMessage, intervalValue);
});

document.getElementById('stopButton').addEventListener('click', function() {
  timer.stopTimer();
});

window.addEventListener('unload', function() {
  timer.stopTimer();
}, false);

const sendReloadMessage = () => {
  chrome.tabs.reload();
}