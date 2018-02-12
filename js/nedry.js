var step = 0;
var code = [38,38,40,40,37,39,37,39,66,65];
document.onkeydown = function(e) {
  e = e || window.event;
  if (e.which === code[step] || e.keyCode === code[step]) step++;
  else step = 0;
  if (step === 10) socialButterfly();
};
function socialButterfly() {
  var elem = document.createElement('div');
  elem.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;z-index:2000;';
  elem.id = "nedry";
  var img = document.createElement('img');
  img.src='/img/nedry.gif';
  elem.appendChild(img);
  var audio = document.createElement('audio');
  audio.src='/media/nedry.mp3';
  audio.autoplay='true';
  audio.loop='true';
  audio.volume=0.33;
  elem.appendChild(audio);
  document.body.appendChild(elem);
  (function(){
    var e = document.getElementById('nedry');
    var text = document.createElement('span');
    text.style.cssText = 'color:#FFFFFF;';
    text.innerHTML = "<br/>YOU DIDN'T SAY THE MAGIC WORD!";
    e.appendChild(text);
    setTimeout(arguments.callee, 375);
  })();
}