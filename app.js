console.log("run app")
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/study-pwa/sw.js');
}

navigator.clipboard.writeText("txt").then(e=>console.log(e));
navigator.clipboard.readText().then(
  clipText => console.log(clipText));

