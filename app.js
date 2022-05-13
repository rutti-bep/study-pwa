console.log("run app")
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/study-pwa/sw.js');
}

/*navigator.clipboard.writeText("txt").then(e=>console.log(e));
navigator.clipboard.readText().then(
  clipText => console.log(clipText));
*/

navigator.serviceWorker.addEventListener('message', event => {
  if(event.data.type === 'clipboard') {
      navigator.clipboard.writeText(event.data.msg).then(function() {
        console.log('Async: Copying to clipboard was successful!');
      }, function(err) {
        console.error('Async: Could not copy text: ', err);
      });
  }
});

const clip = ()=>{
    client.postMessage({
        type:'clip',
      msg:"!"
    });
}
