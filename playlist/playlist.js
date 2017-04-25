

function handleButtonClick() {
  //alert("button was clicked");
  var textInput = document.getElementById("songTextInput");
  var songName = textInput.value;

  if(songName == "") {
    alert("please enter a song.");
  }
  else {
    var li = document.createElement("li");
    li.innerHTML = songName;
    var ul = document.getElementById("playlist");
    ul.appendChild(li);
    save(songName);
  }
}
window.onload = init;

function init() {
	var button = document.getElementById("addButton");
	button.onclick = handleButtonClick;

	loadPlaylist();
}
