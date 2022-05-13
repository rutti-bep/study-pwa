console.log("sw run")
var counter = 0;

self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');

});
self.addEventListener('fetch', (e) => {
    console.log('[Service Worker] Fetched resource '+e.request.url);
/*  navigator.clipboard.writeText("serviceworker").catch(e=>console.log(e));
  navigator.clipboard.readText().then(
  clipText => console.log(clipText));
*/
});

self.addEventListener('message',(e)=>{
    setInterval(()=>{
        counter++;
        console.log("run"+counter);
        e.source.postMessage({
        type: 'clipboard',
        msg: "test"+counter
    });

    },5000);
})
