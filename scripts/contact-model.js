const postToGoogleDB = function(data){
  const urlEncoded = encodeURL(urlPOST, data);
  const request = initRequest('POST', urlEncoded, 'no-cors');
  sendRequest(request);
}

const encodeURL = function(path, params){
  const url = new URL(path);
  for(let key in params){
    url.searchParams.set(key, params[key]);
  }
  return url;
}

const initRequest = function(verb, url, mode='cors'){
  const init = new Object();
  init.method = verb;
  init.mode = mode;
  return new Request(url, init);
}

const sendRequest = async function(request){
  const response = await fetch(request);
  return response;
}
