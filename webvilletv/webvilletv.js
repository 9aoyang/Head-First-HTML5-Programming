//当前播放视频
var position = 0;
//视频列表数组
var palylist;
//video元素的引用
var video;

window.onload = function () {
    playlist = ["video/preroll",
        "video/areyoupopular",
        "video/destinationearth"
    ];
    video = document.getElementById("video");
    video.addEventListener("ended", nextVideo, false);
    video.src = playlist[position] + getFormatExtension();
    video.load();
    video.play();
    //alert("Playing " + video.currentSrc);
    video.addEventListener("error", errorHandler, false);

}

function nextVideo() {

    position++;
    if (position >= video.length) {
        position = 0;
    }
    video.src = playlist[position] + getFormatExtension();
    video.load();
    video.play();
}

function getFormatExtension() {
    if (video.canPlayType("video/mp4") != "") {
        return ".mp4";
    }
    if (video.canPlayType("video/webm") != "") {
        return ".webm";
    }
    if (video.canPlayType("video/ogg") != "") {
        return ".ogv"
    }
}

function errorHandler() {
    var video = document.getElementById("video");
    if (video.error) {
        video.poster = "images/technicaldifficulties.jpg";
        alert(video.error.code);
    }
}