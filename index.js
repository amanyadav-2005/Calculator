let buttons = document.getElementsByTagName('button');
let screen = document.getElementById("screen");
console.log("Everything is going on well");
let screenValue = "";
let buttonText= "";
for(items of buttons){
  items.addEventListener("click",(e)=>{
  buttonText = e.target.innerHTML;
  if(buttonText!="="&&buttonText!="AC"&&buttonText!="C"&&buttonText!="DEL"&&buttonText!="x"){
    screenValue = screenValue+buttonText;
    screen.value= screenValue;
    document.getElementById("AC").innerHTML = "C";
  }
  if(buttonText=="x"){
    buttonText = "*";
    screenValue = screenValue+buttonText;
    screen.value= screenValue;
  }
    if(buttonText=="="){
      screen.value = eval(screenValue)
      screenValue = "";
    }
    if(buttonText=="C"){
      screenValue="";
      screen.value= "0";
      document.getElementById("AC").innerHTML= "AC"
    }
    if(buttonText=="DEL"){
      screenValue = screenValue.substring(0,screenValue.length-1);
      screen.value = screenValue;
      if(screen.value==""){
        screen.value = "0";
        
      }
    }
    
  })
}

