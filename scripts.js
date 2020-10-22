function ranNum() {
    var num = Math.floor(Math.random() * 10)+1;
    var numText = document.createTextNode(num);
    var element = document.getElementById("h2");
    element.appendChild(numText);
}
ranNum();