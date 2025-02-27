// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!


let likeButtons = document.querySelectorAll('.like');

for (const button of likeButtons) {
  button.addEventListener('click', handleClick)
}

function handleClick(event){
  let heart = event.target;
  mimicServerCall()
  .then(function(response){
    return response;
  })
  .then(function(object){
    if (heart.innerText === EMPTY_HEART) {
      // changes the heart to a full heart
      heart.innerText = FULL_HEART;
      // changes the color of the heart to red
      heart.classList.add('activated-heart')
    }else {
        // changes the heart to a empty heart
      heart.innerText = EMPTY_HEART;
    }
  })
  .catch(function(error){
    if(document.getElementById("modal").classList.contains('hidden')){
      // displays error
    	document.querySelector(".hidden").classList.remove('hidden');
      //displays error message
      document.getElementById("modal-message").innerHTML = error;
      // removes error message
      setTimeout(function(){ document.getElementById("modal").classList.add('hidden')}, 5000);
    }
  });
}

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
