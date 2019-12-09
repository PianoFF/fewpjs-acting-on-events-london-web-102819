// Your code here
let dodger=document.getElementById("dodger");
dodger.style.backgroundColor="#FF69B4";

function moveDodgerLeft(){
    let leftNumbers=dodger.style.left.replace("px", "");
    let left= parseInt(leftNumbers, 10);
    
    if (left>0){
        dodger.style.left=`${left-5}px`;
    }
}

function moveDodgerRight(){
    let leftNumbers=dodger.style.left.replace("px", "");
    let left=parseInt(leftNumbers, 10);

    if (left<360){
        dodger.style.left=`${left+5}px`;
    }
}

function moveDodgerUp(){
    let upNumbers=dodger.style.bottom.replace("px", "");
    let up=parseInt(upNumbers, 10);

    if (up<379){
        dodger.style.bottom=`${up+5}px`;
    }
}


function moveDodgerDown(){
    let upNumbers=dodger.style.bottom.replace("px", "");
    let up=parseInt(upNumbers, 10);

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

  