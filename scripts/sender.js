function updateSender() {
    let sender = document.getElementById('namer').value;
    if (sender==""){
        document.getElementById('sender').innerHTML="[unknown]";
    } else{
        if (sender.length > 8) { sender = sender.slice(0, 8); }
        document.getElementById('sender').innerHTML="["+sender+"]";
    }
}
