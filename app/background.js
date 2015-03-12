chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('app/frame.html', {
    bounds: {
      width: 1400,
      height: 900
    }
  });
});
