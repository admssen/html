<?php

$function = $_POST["function"];

if ($function == "watch_server"){
	watch();
}

function watch(){
	$reply = shell_exec("bash mc_status.sh 2>&1");
	echo $reply;
}
?>
