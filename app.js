console.log("run app")
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/study-pwa/sw.js');
}
