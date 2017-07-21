<?
$message=$_POST['message']; 

$filename="androidmessages.html";

file_put_contents($filename, $message."..", FILE_APPEND);

$androidmessages=file_get_contents($filename);

echo $androidmessages;
echo "<br />END"	
?> 