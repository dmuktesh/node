res = function(number1,number2,operation){
if(operation=='+')
return number1+number2;
else if(operation=='-')
return number1-number2;
else if(operation=='*')
return number1*number2;
else if(operation=='/')
return anumber1/number2;
else if(operation=='%')
return number1%number2;
else
return 'undefined operation'
}
module.exports = res;
