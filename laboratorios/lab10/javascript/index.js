

const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  setInterval(()=>{
    let segundos=printSeconds();
    let minutos= printMinutes();
    let milliseconds =printMilliseconds();
  minDecElement.innerText=minutos[0];
  minUniElement.innerText=minutos[1];
  secDecElement.innerText=segundos[0];
  secUniElement.innerText=segundos[1];
  milDecElement.innerText=milliseconds[0];
  milUniElement.innerText=milliseconds[1];
},10);
}


function printMinutes() {
  return chronometer.computeTwoDigitNumber(chronometer.getMinutes());
}

function printSeconds() {
  return chronometer.computeTwoDigitNumber(chronometer.getSeconds());
}

// // ==> BONUS
function printMilliseconds() {
  return chronometer.computeTwoDigitNumber(chronometer.getMilliseconds());
}

function printSplit() {
  let split= chronometer.split();
 let listaSplit= document.createElement('li');
 listaSplit.innerText=split;
 splitsElement.appendChild(listaSplit);
}

function clearSplits() {
  splitsElement.innerText='';
}

function setStopBtn() {
  btnLeftElement.innerText='STOP';
  btnLeftElement.className= 'btn stop';
}

function setSplitBtn(){
 btnRightElement.innerText='SPLIT';
 btnRightElement.className='btn split'
}

function setStartBtn() {
  btnLeftElement.innerText='START';
  btnLeftElement.className= 'btn start';
}

function setResetBtn() {
  btnRightElement.innerText='RESET';
  btnRightElement.className='btn reset'
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if(btnLeftElement.innerText==='START'){
    setStopBtn();
    chronometer.start();
    printTime();
    setSplitBtn();
    printMilliseconds();

  }
  else{
    setStartBtn();
    chronometer.stop();
    setResetBtn();

  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if ( btnRightElement.innerText==='RESET'){
    chronometer.stop();
    chronometer.reset();
    minDecElement.innerText = '0';
    minUniElement.innerText = '0';
    secUniElement.innerText = '0';
    secDecElement.innerText = '0';
    clearSplits();
  }
  else{
    printSplit();
  }
});
