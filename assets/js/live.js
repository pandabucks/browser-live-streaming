(function () {
  var video_area = document.getElementById('video');
  var vendorURL = window.URL || window.webkitURL;

  navigator.getMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

  navigator.getMedia({
    video: true,
    audio: false
  }, function(stream) {
    // Media Stream Object
    video_area.src = vendorURL.createObjectURL(stream);
    video_area.play();
    console.log(stream);
  }, function(error) {
    console.log(error.code)
    console.log(error)
  });

})();