function updateIP() {
    var q = new XMLHttpRequest();
    q.open('POST', 'scripts/ip.php', true);
    q.onload = function() {
        document.getElementById('ip').innerHTML = this.responseText;
    }
    q.onerror = function() {
        document.getElementById('ip').innerHTML = "kakashka";
    }
    q.send()
}
