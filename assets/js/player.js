var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player_rurudo;

function onYouTubeIframeAPIReady() {
    player_rurudo = new YT.Player("player_rurudo", {
        height: "315",
        width: "560",
        videoId: "bCzPSNivndU",
        playerVars: {
            playsinline: 1,
        },
        events: {
            onReady: onPlayerReady,
        },
    });
}

function onPlayerReady(event) {
    event.target.setVolume(40);
    event.target.playVideo();
}

function resetVideos() {
    resetVideo_rurudo();
}

function resetVideo_rurudo() {
    player_rurudo.pauseVideo();
    player_rurudo.seekTo(4660);
}