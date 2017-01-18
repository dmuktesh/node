/*res = function(number1,number2,operation){
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
*/


module.exports = {
  add: function(a,b) {
    return a+b;
  },
       
  subtract: function(a,b) {
    return a-b;
  },

  multiply: function(a,b) {
    return a*b;
  },

  devide: function(a,b) {
    return a/b;
  }
};
