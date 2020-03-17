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
  if()
  chatList.innerHTML += `<li class="border-light"><div class="font-italic">${time} ${name}</div> <div>${message}</div>
  <div><button type="button" class="reply align-right"> Reply </button></div></li>
  <div id="reply${id}" style="padding-right: 10px;">
    <ul class="list-unstyled"></ul>
    <div style="visibility: hidden;">
      <div>
        <input  class="form-control col-md-4" type="text" id="name" placeholder="name">
      </div>
      <div>
        <textarea class="form-control col-md-4" rows="4" id="message" placeholder="message"></textarea>
      </div>
      <button type="button" id="submit"> Submit </button>
    </div>
  </div>`;
}

const clearChat = function(){
  const chatList = document.getElementById('chat-list');
  chatList.innerHTML = '';
}

initViews(); //Last Line
