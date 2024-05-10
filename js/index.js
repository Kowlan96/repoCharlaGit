function updateColor(color){
    document.getElementById("color-box").style.backgroundColor = color;
    document.getElementById("color-info").innerText = color.toUpperCase();
}