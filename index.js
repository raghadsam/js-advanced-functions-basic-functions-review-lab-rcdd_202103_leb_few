// Your code here
function saturdayFun(x="roller-skate"){
  return`This Saturday, I want to ${x}!`;
}
function mondayWork(y="go to the office"){
  return`This Monday, I will ${y}.`;
}
function wrapAdjective(visual="*"){
  const innerFunction=function(z="special"){
    return `You are ${visual}${z}${visual}!`;
  }
  return innerFunction;
}
let Calculator={
  add:function(){
    return 1+3;
  },
  subtract:function(){
    return 1-3;
  },
  multiply:function(){
    return 1*3;
  },
  divide:function(){
    return 10/5;
  }
};
function actionApplyer(integ,array){
  return [MultiplyBy2(integ),Add1000()]

}
function MultiplyBy2(integ){
  let result1=integ*2;
  return result1;
}
function Add1000(result1){
  let result2=result1+1000;
  return result2;
}
function Modulo7(result2){
  let result3=result2%7;
  return result3;
}
