function copyAddress() {
    var to_clipboard = document.getElementById("ip");
    to_clipboard.select();
    navigator.clipboard.writeText(to_clipboard.value);
}
