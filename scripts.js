//calculator logic
let num1 = 6;
let num2 = 4;
let operator="/"
if(operator==="+"){
  console.log(num1 + num2 );
 }

else if(operator==="-"){
  console.log(num1 - num2 );
}

else if(operator==="/"){
  if(num2!=0){
  console.log(num1 / num2 );
  }
  else{
    console.log("num2 cannot be zero");
  }
}

else if(operator==="*"){
  console.log(num1 * num2 );
}




//student mark analysis

let marks = 100;
let bonus = 5;

marks += bonus;

let grade;

if(marks >= 90){
    grade ="A"
}
else if(marks >= 70 && marks <= 89){
    grade ="B"
}
else if(marks >= 50 && marks <= 69){
    grade ="C"
}
else if(marks < 50){
    grade ="F"
}

let result = marks >= 50 ? "Pass" : "Fail";

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

console.log("Marks = "+ marks +"\nGrade="+grade+"\nResult = "+result+"\nRemark = "+remark)