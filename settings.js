let player = document.querySelector('.player');
let move = 10;

window.addEventListener('load',() =>{
  player.style.position ='relative';
  player.style.left = 0;
  player.style.top =0;
  
)};
                        
window.addEventListener('keyUp', (e) =>{
  switch(e.key){
    case ('ArrowLeft':
          player.style.left = parseInt(player.style.left) - move + 'px';
      break;
      case ('ArrowRight':
          player.style.left = parseInt(player.style.left) + move + 'px';
      break;
      case ('ArrowUp':
          player.style.top = parseInt(player.style.left) - move + 'px';
      break;
      case ('ArrowDown':
          player.style.top = parseInt(player.style.left) + move + 'px';
      break;
      
  }
})     


var timer;

var compareDate = new Date();
compareDate.setDate(compareDate.getDate() + 7); 

timer = setInterval(function() {
  timeBetweenDates(compareDate);
}, 1000);

function timeBetweenDates(toDate) {
  var dateEntered = toDate;
  var now = new Date();
  var difference = dateEntered.getTime() - now.getTime();

  if (difference <= 0) {

    finish(timer);
  
  } else {
    
    var seconds = Math.floor(difference / 1000);
  
    seconds %= 60;
    $("#seconds").text(seconds);
  }
}
