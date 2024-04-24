
let fontSize = 16;
function showMessage(){

    fontSize += 100; // Tăng kích thước lên 2px mỗi lần
    document.getElementById("button1").style.fontSize = fontSize + "px";
    
}

function goToNewPage() {
    window.location.href = "Trangchu/home.html"; 
}