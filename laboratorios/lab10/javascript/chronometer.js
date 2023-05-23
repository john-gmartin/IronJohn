class Chronometer {
  constructor() {
    this.currentTime=0;
    this.intervalId= null;
    this.milliseconds=0;
    this.miliIntervalId= null;
  }

  start() {
   this.intervalId=setInterval(()=>{
    this.currentTime ++;
    console.log(this.currentTime);
   },1000);
   this.miliIntervalId=setInterval(()=>{
   this.milliseconds++;
   if (this.milliseconds===100){
     this.milliseconds=0;}
   },10);
  };


  getMinutes() {
    return Math.floor(this.currentTime/60);
  }

  getSeconds() {
    return Math.floor(this.currentTime%60);
  }

  getMilliseconds(){
   
    return this.milliseconds;
}


  computeTwoDigitNumber(value) {
    if(value<10){
      return '0' +value}
    else{
      return ''+value}
  }

  stop() {
    clearInterval(this.intervalId);
    clearInterval(this.miliIntervalId);
  }

  reset() {
    this.currentTime=0;
    this.milliseconds=0;
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}:${this.getMilliseconds()}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
