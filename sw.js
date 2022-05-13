console.log("sw run")
self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');

});
self.addEventListener('fetch', (e) => {
    console.log('[Service Worker] Fetched resource '+e.request.url);
  navigator.clipboard.writeText("serviceworker").catch(e=>console.log(e));
  navigator.clipboard.readText().then(
  clipText => console.log(clipText));
});
self.addEventListenr('clip',(e)=>{
    setTimeout(()=>{
        console.log("run");
      self.postMessage({
      type: 'clipboard',
      msg: "test"
    });

    },1000);
})
