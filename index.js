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
  let result1,result2,result3;
  return 
    if(array="")
      return `${integ}`;
    else {
      [
        [function(){return result1=`${integ}*2`; }],
        [function(){return result2=`${result1}+1000;`}],
        [function(){return result3=`${result2}%7`}]
      ];
    }
}
