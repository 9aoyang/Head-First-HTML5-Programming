window.onload = function() {
    setInterval(handleRefresh, 3000);
    /*
    var url = "http://localhost/creamcandy/sales.json";
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = function() {
        if(request.status == 200) {
            updateSales(request.responseText);
        }
    }
    request.send(null);
    */
}

function updateSales (sales) {
    var salesDiv = document.getElementById("sales");
    //salesDiv.innerHTML = responseText;
    //var sales = JSON.parse(responseText);
    for (var i=0; i<sales.length; i++) {
        var sale = sales[i];
        var div = document.createElement("div");
        div.setAttribute("class", "saleItem");
        div.innerHTML = sale.name + " sold " + sale.sales + " Creamcandy";
        salesDiv.appendChild(div);
    }
    if(sales.length > 0) {
        lastReportTime = sales[sales.length - 1].time;
    }
}

var lastReportTime = 0;
function handleRefresh() {
    //alert("i'm alive");
	var url = "http://gumball.wickedlysmart.com" +
				"?callback=updateSales" +
				"&lastreporttime=" + lastReportTime +
				"&random=" + (new Date()).getTime();

    var newScriptElement = document.createElement("script");
    newScriptElement.setAttribute("src", url);
    newScriptElement.setAttribute("id", "jsonp");
    var oldScriptElement = document.getElementById("jsonp");
    var head = document.getElementsByTagName("head")[0];  
	if (oldScriptElement == null) {
 
		head.appendChild(newScriptElement);
	}
	else {
		head.replaceChild(newScriptElement, oldScriptElement);
	}
}