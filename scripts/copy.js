function copyAddress() {
    var to_clipboart = document.getElementById("ip");
    to_clipboard.select();
    to_clipboard.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(to_clipboard.value);
}
