
// document.querySelector("button").addEventListener("click",handleClick); // call the funtion name haldleClick
// function handleClick() {
// 	alert('i dit clicked');
// }


var numberofDrums = document.querySelectorAll(".drum").length;

for(var i =0;i<numberofDrums;i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click",function() { //event using Anonimus function
   
    var innnerhtml=this.innerHTML;
	switch(innnerhtml){
		case "w":
		     var audio=new Audio("sounds/crash.mp3");
              audio.play();
         break;
         case "a":
              var audio=new Audio("sounds/kick-bass.mp3");
              audio.play();
         break;
         case "s":
              var audio=new Audio("sounds/snare.mp3");
              audio.play();
         break;
         case "d":
              var audio=new Audio("sounds/tom-1.mp3");
              audio.play();
         break;
         case "j":
              var audio=new Audio("sounds/tom-2.mp3");
              audio.play();
         break;
         case "k":
              var audio=new Audio("sounds/tom-3.mp3");
              audio.play();
         break;
         case "l":
              var audio=new Audio("sounds/tom-4.mp3")
              audio.play();
         default:console.log(innnerhtml);
         
     }
})
}
// document.querySelectorAll("button")[2].addEventListener("click",function() { //event using Anonimus function
// alert("i got clicked");
// })
// document.querySelectorAll("button")[1].addEventListener("click",function() { //event using Anonimus function
// alert("i got clicked");
// })
// }




audio.play();