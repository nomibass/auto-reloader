class Timer {
  constructor() {
    this.timer = undefined;
  }

  setTimer(action, interval) {
    this.stopTimer();

    this.timer = setInterval(action, interval * 1000);
  }

  stopTimer() {
    if(this.timer != undefined) {
      clearInterval(this.timer);
      this.timer = undefined;
    }
  }
}