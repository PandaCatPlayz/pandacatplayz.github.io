function onStartedDownload(id) {
    console.log(`Started downloading: ${id}`);
  }
  
  function onFailed(error) {
    console.log(`Download failed: ${error}`);
  }
  
  let downloadUrl = document.getElementById("path");
  
  let downloading = browser.downloads.download({
    url : downloadUrl,
    filename : 'my-image-again.png',
    conflictAction : 'uniquify'
  });
  
  downloading.then(onStartedDownload, onFailed);