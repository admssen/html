function copyAddress() {
    var to_clipboard = document.getElementById("ip");
    navigator.clipboard.writeText(to_clipboard.value);
}
