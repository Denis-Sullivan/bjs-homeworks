"use strict";

function getResult(a,b,c){

  let result = [];

  let discriminant = b**2 - 4 * a * c;
  
  if (discriminant < 0) return result;
  
  if (discriminant == 0) {
    let x = - b / (2 * a);
    result.push(x);
    return result;
  }
  
  if (discriminant > 0) {
    let x1 =  (- b + discriminant**0.5) / (2 * a);
    let x2 = (- b - discriminant**0.5) / (2 * a);
    result.push(x1);
    result.push(x2);
    return result;
  }
}



function getAverageMark(marks){

  let sum = 0;

  if (marks.length == 0) {
    return 0;
  } 
  else if (marks.length > 5) {
    marks.splice(5);
  }
  
  for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
  }
  
  return sum / marks.length;
}



function askDrink(name,dateOfBirthday){

  return ((new Date().getFullYear() - dateOfBirthday.getFullYear()) >= 18) ? 
  `Не желаете ли олд-фэшн, ${name}?` : 
  `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;

}