var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player("player_guwrgura", {
        height: "315",
        width: "560",
        videoId: "dBK0gKW61NU",
        playerVars: {
            playsinline: 1,
        },
        events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange,
        },
    });
}

function onPlayerReady(event) {
    event.target.setVolume(5);
    event.target.playVideo();
}

var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(pauseVideo, 6000);
        done = true;
    }
}

function pauseVideo() {
    player.pauseVideo();
    player.seekTo(220);
    done = false
}