const initControllers = function(){
  const submitButton = document.getElementById('submit');
  submitButton.addEventListener('click', submitEvent);
}

const submitEvent = function(){
  const formData = new Object();
  formData[name] = document.getElementById('form-name').value;
  formData[email] = document.getElementById('form-email').value;
  formData[subject] = document.getElementById('form-subject').value;
  formData[message] = document.getElementById('form-message').value;

  postToGoogleDB(formData);
  alert('Thanks for your response. I will get back to you as soon as possible.');
}

initControllers(); //Last Line
