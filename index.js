// Your code here
let dodger=document.getElementById("dodger");
dodger.style.backgroundColor="#FF69B4";

function parse_int(position){
    let numbers=position.replace("px", "");
    let pxNum= parseInt(numbers, 10);
    return pxNum; 
}
function moveDodgerLeft(){
    const left=parse_int(dodger.style.left);
    if (left>0){
        dodger.style.left=`${left-5}px`;
    }
}

function moveDodgerRight(){
    const left=parse_int(dodger.style.left);
    if (left<360){
        dodger.style.left=`${left+5}px`;
    }
}

function moveDodgerUp(){
    // let upNumbers=dodger.style.bottom.replace("px", "");
    // let up=parseInt(upNumbers, 10);
    const up=parse_int(dodger.style.bottom);
    if (up<379){
        dodger.style.bottom=`${up+5}px`;
    }
}


function moveDodgerDown(){
    // let upNumbers=dodger.style.bottom.replace("px", "");
    // let up=parseInt(upNumbers, 10);
    const up=parse_int(dodger.style.bottom);
    if (up>0){
        dodger.style.bottom=`${up-5}px`;
    }
}

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
    else if(e.key==="ArrowRight"){
        moveDodgerRight();
    }
    else if(e.key==="ArrowUp"){
        moveDodgerUp();
    }
    else if(e.key==="ArrowDown"){
        moveDodgerDown();
    }
  });
  
  /* type this in the devTools Console, and see what key you are pressing 
  document.addEventListener("keydown", function(e) {
  console.log(e.key);
});
*/

  