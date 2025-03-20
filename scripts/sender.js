function updateSender() {
    let sender = document.getElementById('namer').value;
    if (sender==""){
        document.getElementById('sender').innerHTML="[unknown]";
    } else{
        if (sender.length > 26) { sender = sender.slice(0, 26); }
        document.getElementById('sender').innerHTML="["+sender+"]";
    }
}
