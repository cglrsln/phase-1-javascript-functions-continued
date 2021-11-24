
function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`
}
saturdayFun();


function mondayWork(activity = 'go to the office'){
  return `This Monday, I will ${activity}.`;
}
mondayWork();


let wrapAdjective = function(highlighter="*") {
   return function adj (adjective="special"){
    return `You are ${highlighter}${adjective}${highlighter}!`
  }
 
  
}
wrapAdjective();







// let wrapAdjective = function(highlighter="*") {
//   return function (adjective="special") {
//     return `You are ${highlighter}${adjective}${highlighter}!`
//   }
// }
// wrapAdjective();

























// function saturdayFun(activity="roller-skate") {
//   return `This Saturday, I want to ${activity}!`
// }

// let mondayWork = function(activity="go to the office") {
//   return `This Monday, I will ${activity}.`
// }

// let wrapAdjective = function(style="*") {
//   return function(adjective="special") {
//     return `You are ${style}${adjective}${style}!`
//   }
// }
