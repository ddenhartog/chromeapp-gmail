chrome.app.runtime.onLaunched.addListener(function() {
  // Screen and window property variables
  var screenw = screen.availWidth;
  var screenh = screen.availHeight;
  var width = 1400;
  var height = 900;

  var frame = chrome.app.window.create('app/frame.html', {
    id: "frame",
    bounds: {
      width: width,
      height: height,
      left: Math.round((screenw - width) / 2),
      top: Math.round((screenh - height) / 2)
    }
  },
  function (win) {
    win.contentWindow.onload = function() {
      var webview = win.contentWindow.document.querySelector('#gmail-gui');
      webview.addEventListener('newwindow', function(target) {
        target.preventDefault();
        window.open(target.targetUrl);
      });
    };
  });
});
