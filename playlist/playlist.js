function handleButtonClick() {
  //alert("Button was clicked!");
  var textInput = document.getElementById("songTextInput");
  if (textInput.value == "") {
    alert("歌曲名不能为空！")
  } else {
    var songName = textInput.value;
    alert("Adding " + songName);
  }
}

  var button = document.getElementById("addButton");
  button.onclick = handleButtonClick;
