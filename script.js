console.log("welcome to tik tok toe")
let turn="X"
const changeTurn=()=>{
    return turn==="X"?"0":"X"
}
 
const checkwin=()=>{

}
let boxes=document.getElementsByClassName("box");
Array.from(boxes).foreach(element=>{
    let boxtext=element.querySelector('.boxtext');
  element.addEventListener('click',()=>{

if(boxtext.innerText==='');
boxtext.innertext=turn;
turn=changeTurn();
checkwin();
document.getElementsByClassName("info")[0].innrText="Turn for" +turn;
  })
})