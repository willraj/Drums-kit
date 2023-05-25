// get count for iteration

var btnCount = document.querySelectorAll('button').length;

// loop to apply the function to all btn

let i = 0;
for(i;i<btnCount;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",function(){
    // using this key word used to figure out which buttton object trigger the event and using dot notation though its a object extract the individual text from the object.
       let buttonInnerhtml = this.innerHTML;
       makeSound(buttonInnerhtml);
       animationButton(buttonInnerhtml);
    })
    
}


// event listner for keyboard events

document.addEventListener('keydown',function(event){
    makeSound(event.key);
    animationButton(event.key);
})

// for play different event 

function makeSound(key){
    switch(key){
        case "w":
            var sound = new Audio("./sounds/crash.mp3");
            sound.play();
            break;
        case "a":
            var sound = new Audio("./sounds/kick-bass.mp3");
            sound.play();
            break;
         case "s":
             var sound = new Audio("./sounds/snare.mp3");
             sound.play();
            break;
        case "d":
            var sound = new Audio("./sounds/tom-1.mp3");
            sound.play();
            break;
        case "j":
            var sound = new Audio("./sounds/tom-2.mp3");
            sound.play();
            break;
        case "k":
            var sound = new Audio("./sounds/tom-3.mp3");
            sound.play();
            break;
        case "l":
            var sound = new Audio("./sounds/tom-4.mp3");
            sound.play();
            break;
               
       }
}

// animation to buttons 

function animationButton(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");  
    },100);
}