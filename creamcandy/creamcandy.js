window.onload = function() {
    var url = "http://localhost/creamcandy/sales.json";
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = function() {
        if(request.status == 200) {
            updateSales(request.responseText);
        }
    }
    request.send(null);
}

function updateSales (responseText) {
    var salesDiv = document.getElementById("sales");
    salesDiv.innerHTML = responseText;
}