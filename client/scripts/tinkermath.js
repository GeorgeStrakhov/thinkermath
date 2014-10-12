/* custom scripts */
Meteor.startup(function() {
  trianglifyBg();
  document.body.onresize = trianglifyBg();
});

var trianglifyBg = function() {
  var t = new Trianglify({
    x_gradient: Trianglify.colorbrewer.Oranges[7],
    y_gradient: Trianglify.colorbrewer.Oranges[7]
  });
  var pattern = t.generate(document.body.clientWidth, document.body.clientHeight);
  $('#bgFixed').attr('style', 'background-image: '+pattern.dataUrl);
}
