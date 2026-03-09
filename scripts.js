//calculator logic
let num1 = 6;
let num2 = 4;
let operator="/"
if(operator==="+"){
  console.log(num1 + num2 );
 }

if(operator==="-"){
  console.log(num1 - num2 );
}

if(operator==="/"){
  if(num2!=0){
  console.log(num1 / num2 );
  }
  else{
    console.log("num2 cannot be zero");
  }
}

if(operator==="*"){
  console.log(num1 * num2 );
}



//student mark analysis

let mark = 100;
bonus=5
mark +=bonus
let grade;
if(mark>90){
    grade ="A"
    
}
else if(mark>=70 && mark<=89){
    grade ="B"
    
}
else if(mark>=50 && mark<=69){
    grade ="C"
    
}
else if(mark<50){
    grade ="F"
   
}


let Result = mark >= 50 ? "Pass" : "Fail";
let remark;
switch(grade)
{
   case "A":
           remark ="Excellent!";
           break;
   case "B":
           remark ="Good";
           break;
   case "C":
           remark ="Average";
           break;
   case "F":
           remark ="Needs Improvement";
           break;
}

console.log("Marks = "+ mark +"\nGrade="+grade+"\nResult = "+Result+"\nRemark ="+remark)
