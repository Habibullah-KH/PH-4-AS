function  waitingTime(waitingTimes  , serialNumber) {
  if(typeof waitingTimes !== 'object' || typeof serialNumber !== 'number'){
return 'Invalid Input';}

let sum = 0;
for (let i = 0; i < waitingTimes.length; i++){ 
  sum += waitingTimes[i];
}
    let avrageTime = Math.round(sum / waitingTimes.length);

    let currentSerial = (serialNumber - waitingTimes.length);

    let timeNeed = avrageTime * ( currentSerial - 1);
   return timeNeed;
  }


console.log(waitingTime([7, 8, 3, 4, 5], "9"));