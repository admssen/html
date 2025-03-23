<?php

$function = $_POST["function"];

if ($function == "update_ip"){
	ip();
}

function ip(){
	$reply = shell_exec("bash hamachi_ip.sh 2>&1");
	echo $reply;
}
?>
