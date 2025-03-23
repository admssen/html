function copyAddress() {
    let addr = document.getElementById("ip");
    addr.select();
    navigator.clipboard.writeText(addr.value);
}
