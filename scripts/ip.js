function updateIP() {
    var q = new XMLHttpRequest();
    q.open('POST', 'ip.php', true);
    q.onload = function() {
        var reply = JSON.parse(this.responseText);
        document.getElementById('ip').innerHTML = reply.output;
    }
    q.onerror = function() {
        document.getElementById('ip').innerHTML = "kakashka";
    }
    q.send()
}
