function copyAddress() {
    var addr = document.getElementById("ip");
    navigator.clipboard.writeText(addr.textContent);
}
