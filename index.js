for(var i = 0; i<6; i++){
     document.querySelectorAll('.btn')[i].addEventListener('click',function(){
        
        var theNote = this.innerHTML;
        makeSound(theNote);
        animation(theNote);
    })
}
document.addEventListener('keydown',function(event){
var key = event.key;
var yoo = key.toUpperCase();
makeSound(yoo);
animation(yoo);

  
})



function makeSound(note){
 if(note == 'A'){
     var note1 = new Audio('sounds/A.mp3');
     note1.play();
 }
 else if(note =="E"){
     var note2 = new Audio('sounds/E.mp3');
     note2.play();
 }
 else if(note =="D"){
    var note3 = new Audio('sounds/D.mp3');
    note3.play();
}
else if(note =="G"){
    var note4 = new Audio('sounds/G.mp3');
    note4.play();
}
else if(note =="B"){
    var note5 = new Audio('sounds/B.mp3');
    note5.play();
}
else if(note =="e"){
    var note6 = new Audio('sounds/E1.mp3');
    note6.play();
}
 }

 function animation(note){
  var one = document.querySelector('.'+note);
  one.classList.add("white");
  setTimeout(function(){
      one.classList.remove('white')
  }, 100);

 }