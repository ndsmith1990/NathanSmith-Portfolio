const initViews = function(){
  getFromGoogleDB();
}

const showComments = function(sheetData){
  clearChat();
  for(let row of sheetData.values){
    addComment(row);
  }
}

const addComment = function(row){
  const [time, name, message] = row;
  const chatList = document.getElementById('chat-list');
  chatList.innerHTML += `<li class="bg-white"><div class="font-italic">${time}: ${name}</div> <div>${message}</div><hr class="comment-hr"></li>`;
}

const clearChat = function(){
  const chatList = document.getElementById('chat-list');
  chatList.innerHTML = '';
}

initViews(); //Last Line
