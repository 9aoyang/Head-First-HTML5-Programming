window.onload = function() {
	var button = document.getElementById("previewButton");
	button.onclick = previewHandler;
}

function previewHandler() {

    var canvas = document.getElementById("tshirtCanvas");
    var context = canvas.getContext("2d");
    fillBackgroundColor(canvas, context);

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

function fillBackgroundColor (canvas, context) {
    var selectObj = document.getElementById("backgroundColor");
    var index = selectObj.selectedIndex;
    var bgColor = selectObj.options[index].value;
    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, canvas.width, canvas.height);
}

function degreesToRadians(degrees) {
    return (degrees * Math.PI) / 180;
}

