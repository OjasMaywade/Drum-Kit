var len = document.querySelectorAll(".drum").length;
// Click Event Listener
for(var i=0; i<len;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
      var buttonPressed = this.innerHTML;
      check(buttonPressed);
      animation(buttonPressed);
    });
}
// Keydown Event Listener 
document.addEventListener("keydown", function(event){
 check(event.key);
 animation(event.key);
})
// Switch case for Sound Play
function check(key) {
switch (key) {
  case "w":
    var tom_1 = new Audio("sounds/tom-1.mp3");
    tom_1.play();
    break;

  case "a":
    var tom_2 = new Audio("sounds/tom-2.mp3");
    tom_2.play();
    break;

  case "s":
    var tom_3 = new Audio("sounds/tom-3.mp3");
    tom_3.play();
    break;

  case "d":
    var tom_4 = new Audio("sounds/tom-4.mp3");
    tom_4.play();
    break;

  case "j":
    var tom_5 = new Audio("sounds/crash.mp3");
    tom_5.play();
    break;

  case "k":
    var tom_6 = new Audio("sounds/kick-bass.mp3");
    tom_6.play();
    break;

  case "l":
    var tom_7 = new Audio("sounds/snare.mp3");
    tom_7.play();
    break;

  default: 
    console.log(buttonPressed);
    break;
}
}
 // Animation Function
function animation(d){
  document.querySelector("." + d).classList.add("pressed");
  setTimeout(function(){
    document.querySelector("." + d).classList.remove("pressed");
  }, 150);
}