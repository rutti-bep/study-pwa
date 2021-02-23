console.log("sw run")
self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
  navigator.clipboard.writeText("txt").catch(e=>console.log(e));
  navigator.clipboard.readText().then(
  clipText => console.log(clipText));

});
self.addEventListener('fetch', (e) => {
    console.log('[Service Worker] Fetched resource '+e.request.url);
});
