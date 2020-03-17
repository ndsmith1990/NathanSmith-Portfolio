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
  let id = 0;
  chatList.innerHTML += `<li class="bg-white"><div class="border-dark font-italic">${time}: ${name}</div> <div>${message}</div>`;
}

const clearChat = function(){
  const chatList = document.getElementById('chat-list');
  chatList.innerHTML = '';
}

initViews(); //Last Line