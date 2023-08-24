var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    
    var buttonInnerHTML = this.innerHTML;
   
    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keydown", function(event){
  makeSound(event.key);

  buttonAnimation(event.key);
})

function makeSound(key){
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      return tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      return tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      return tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      return tom4.play();
      break;

    case "j":
      var crash = new Audio("sounds/crash.mp3");
      return crash.play();
      break;

    case "k":
      var snare = new Audio("sounds/snare.mp3");
      return snare.play();
      break;

    case "l":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      return kickBass.play();
      break;

    default: console.log(buttonInnerHTML);
  }
}

function buttonAnimation(currentKey){
 var activeButton = document.querySelector("." + currentKey);
 
 activeButton.classList.add("pressed");

 setTimeout (function() {
  activeButton.classList.remove("pressed");
}, 100);
}