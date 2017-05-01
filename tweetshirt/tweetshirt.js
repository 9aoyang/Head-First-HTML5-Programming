window.onload = function() {
	var button = document.getElementById("previewButton");
	button.onclick = previewHandler;
}

function previewHandler() {

    var canvas = document.getElementById("tshirtCanvas");
    var context = canvas.getContext("2d");
    fillBackgroundColor(canvas, context);
    drawLogo(canvas, context);
    drawText(canvas, context);
    
    var selectObj = document.getElementById("shape");
    var index = selectObj.selectedIndex;
    var shape = selectObj[index].value;
        
    if(shape == "squares") {
        
        for(var squares=0; squares<20; squares++) {   
            drawSquare(canvas, context);
        }
    }
    else if(shape == "circles") {
        for(var squares=0; squares<20; squares++) {
            drawCircle(canvas, context);
        }
    }
    else if (shape == "none") {
        drawTriangle(canvas, context);
    }
}

function drawSquare(canvas, context) {
    
    var w = Math.floor(Math.random() * 40);
    var x = Math.floor(Math.random() * canvas.width);
    var y = Math.floor(Math.random() * canvas.height);
	context.fillStyle = "lightblue";
	context.fillRect(x, y, w, w);
}

function drawCircle(canvas, context) {
    var radius = Math.floor(Math.random() * 40);
    var x = Math.floor(Math.random() * canvas.width);
    var y = Math.floor(Math.random() * canvas.height);
   
    context.beginPath();
    context.arc(x, y, radius, 0, degreesToRadians(360), false);
     //alert(1);   
    
    context.fillStyle = "lightblue";
    context.fill();
}

function drawTriangle (canvas, context) {
    /* 三角形绘制测试
    context.beginPath();
    context.moveTo(100, 150);
    context.lineTo(250, 75);
    context.lineTo(125, 30);
    context.closePath();
    context.lineWith = 5;
    context.stroke();
    context.fillStyle = "black";
    context.fill();
    */
    /* context.arc角度从起始边到终止边，取顺时针为正
    var radius = Math.floor(Math.random() * 40);
    var x = Math.floor(Math.random() * canvas.width);
    var y = Math.floor(Math.random() * canvas.height);
    
    context.beginPath();
    context.arc(200, 150, 30, 0, degreesToRadians(-90), false);
     //alert(1);   
    
    context.fillStyle = "lightblue";
    context.stroke();
    */
}

function drawText(canvas, context) {
    
	var selectObj = document.getElementById("foregroundColor");
	var index = selectObj.selectedIndex;
	var fgColor = selectObj[index].value;
    context.fillStyle = fgColor;  
    //前言
    context.font = "bold 1em sans-serif";
    context.textAlign = "left";
    context.fillText("I saw this tweet", 20, 40);
    //正文
    /*
    selectObj = document.getElementById("tweets");
    index = selectObj.selectedIndex;
    var tweet = selectObj[index].value;
    context.font = "italic   1.2em serif";
    context.fillText(tweet, 30, 100);
    */
    //后缀

    context.color = "bold 1em sans-serif";
    context.textAlign = "right";
    context.fillText("ann all i got was this lousy t-shirt!", canvas.width-20, canvas.height-40);
   
}

function drawLogo (canvas, context) {
    var twitterBird = new Image();
    twitterBird.src = "twitterBird.png";
    twitterBird.onload = function() {
    context.drawImage(twitterBird, 20, 120 ,66, 66);
    }
}

function fillBackgroundColor (canvas, context) {
    var selectObj = document.getElementById("backgroundColor");
    var index = selectObj.selectedIndex;
    var bgColor = selectObj.options[index].value;
    context.fillStyle = bgColor;
    context.fillRect(0, 0, canvas.width, canvas.height);
}

function degreesToRadians(degrees) {
    return (degrees * Math.PI) / 180;
}

function updateTweets(tweets) {
    alert(1);
    var tweetsSelection = document.getElementById("tweets");
    
    for(var  i = 0; i < tweets.length; i++) {
        var tweet = tweets[i];
        var option = document.createElement("option");
        option.text = tweet.text;
        option.value = tweet.text.replace("\"", "'");

        tweetsSelection.options.add(option);

    }

    tweetsSelection.selectedIndex = 0;
    
}