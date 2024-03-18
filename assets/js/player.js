var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player_guwrgura;
function onYouTubeIframeAPIReady() {
    player_guwrgura = new YT.Player("player_guwrgura", {
        height: "315",
        width: "560",
        videoId: "dBK0gKW61NU",
        playerVars: {
            playsinline: 1,
        },
        events: {
            onReady: onPlayerReady,
        },
    });
}

function onPlayerReady(event) {
    event.target.setVolume(5);
    event.target.playVideo();
}

function resetVideo_guwrgura() {
    player_guwrgura.pauseVideo();
    player_guwrgura.seekTo(220);
}