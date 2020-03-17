const initControllers = function(){
  const submitButton = document.getElementById('submit');
  submitButton.addEventListener('click', submitEvent);
  /**const replyButton = document.getElementsByClassName("reply");
  for(let i = 0; i<replyButton.length; i++){
    replyButton[i].addEventListener('click', replyEvent);
  }**/
}

const replyEvent = function(){

}

const submitEvent = function(){
  const formData = new Object();
  formData[name] = document.getElementById('name').value;
  formData[message] = document.getElementById('message').value;

  postToGoogleDB(formData);
}

initControllers(); //Last Line
