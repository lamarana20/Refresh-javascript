//chalenge one
const calculator= (num1,num2,operator) =>{
let result;
  switch(operator){
    case '+':
     result = num1+num2
    break;
    case '-':
    result = num1-num2
    break;
    case '*':
    result = num1*num2
    break;
    case '/':
    result = num1/num2
    break;
    default:
    result = 'Invalid operator maybe valid but not part of the my plan on this operation'
  }
  return result;
}
console.log(calculator(5, 2, '+'))
console.log(calculator(5, 2, '-'))
console.log(calculator(5, 2, '*'))
console.log(calculator(5, 2, '/'))
console.log(calculator(5, 2, '%'))
  //challenge second