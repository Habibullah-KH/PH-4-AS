function calculateTax(income, expenses) {

  if( typeof income !== "number" || typeof expenses !== "number" ||
      income <= 0 || expenses <= 0 || income < expenses
  ){

    return 'Invalid Input';
  }

  let result = (income - expenses)*.20;
return result;
}



function sendNotification(email) {

  let countAt = 0;
  
    for (let i = 0; i < email.length; i++) {
      if (email[i] === "@") {
        countAt++;
      }
    }
  
    if(countAt > 1 || countAt <= 0){
  
      return 'invalid Email';
    }
  
  
  
    let atSign = email.indexOf('@');
  
    let userName = email.slice(0, atSign);
    let domainName = email.slice(atSign+1);
  
    let notificaton = userName + " sent you an email from " + domainName;
  
    return notificaton;
  }


  function checkDigitsInName(name) {
    if (typeof name !== 'string') {
      return 'Invalid Input';
    }
    let i = 0;
    for (; i < name.length; i++) {
      if (!isNaN(name[i])) {
        return true;
      }
    }
  
    return false;
  }


  function calculateFinalScore(obj) {

    if(typeof obj !== 'object' || typeof obj.name !== 'string' || obj.testScore > 50 ||  obj.schoolGrade > 30 || 
      typeof obj.testScore !== 'number' || typeof obj.schoolGrade !== 'number' || typeof obj.isFFamily !== 'boolean'
    ){
    
      return "Invalid Input";
    }
    
    let totalMarks = obj.testScore + obj.schoolGrade ;
    
    if( obj.isFFamily){
    
    totalMarks += 20;
    }
    
    if(totalMarks >= 80){
    
      return 'true';
    }
    
    else {
    
      return 'false';
    }
    
    }


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