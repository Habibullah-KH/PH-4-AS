const a = { name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true  };


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


console.log(calculateFinalScore({ name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true  }));
