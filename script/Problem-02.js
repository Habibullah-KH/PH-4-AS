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

let x = sendNotification('sadia8icloud.com');
console.log(x);

