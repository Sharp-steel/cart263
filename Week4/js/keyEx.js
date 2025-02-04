window.onload = function(){
    console.log("keys");
}

// window.addEventListener("keydown", function(event)
// {
//  console.log(event);
// })

//OR

window.addEventListener("keydown", keyHandler)

//Display text once after the timer has hit

window.setTimeout(addTimeoutText,2000);
  function addTimeoutText(){
    let parent = document.getElementById("parent");
    parent.innerHTML+="<p> NEW TEXT TO APPEAR </p>";
  }

  //Recuring text

  window.setInterval(addTextRecur,2000);
 
  function addTextRecur(){
    let parent = document.getElementById("parent");
    parent.innerHTML+="<p> NEW TEXT TO APPEAR RECUR </p>";
  }

function keyHandler(event){
    console.log(event);
    document.querySelector("#textContainer").textContent+=event.key;
    document.querySelector("#textContainer").textContent+=event.code;
    //OR 
    // document.querySelector("#textContainer").textContent=
    // document.querySelector("#textContainer").textContent+event.code+' ';
    //And do same for key
    let speedX =5;
    if(event.key ==="ArrowRight"){
        document.getElementById("boxA").style.left=parseInt(document.getElementById("boxA").style.left)+speedX+"px";
      }
      else if(event.key ==="ArrowLeft"){
        document.getElementById("boxA").style.left =parseInt(document.getElementById("boxA").style.left)-speedX+"px";   
      }
    //   else if(event.code ==="Space"){
    //     document.getElementById("boxB").style.background = "orange"; 
    // }
    else if (event.code === "Space") {
        let bool = document.getElementById("boxB").getAttribute("custom-bool");
        if (bool === "off") {
          document.getElementById("boxB").style.background = "orange";
          document.getElementById("boxB").setAttribute("custom-bool", "on");
        } else {
          document.getElementById("boxB").style.background = "rgb(112, 184, 226)";
          document.getElementById("boxB").setAttribute("custom-bool", "off");
        }
      }
      else if (event.key === "Shift") {
        document.getElementById("boxA").style.background ="rgb(226, 112, 177)";
    }
}

window.addEventListener("keyup", function(event){
    console.log("keyup")
     //2: change color when space is down
     if(event.key ==="Shift"){
        document.getElementById("boxA").style.background = "rgb(112, 184, 226)";

    }
    else{
      console.log(`key up not shift:`)
      console.log(event)
    }

})

