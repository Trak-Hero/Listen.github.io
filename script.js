$(function() {
                
    setTimeout(function() {
        $('.fly-in-text').removeClass('hidden');
    }, 500);
    
})();

var audio = new Audio("http://music.ogg");

audio.oncanplaythrough = function(){
audio.play();
}

audio.loop = true;

audio.onended = function(){
audio.play();
}