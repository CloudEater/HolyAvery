<?
$flavour = $_POST['flavour']; 
$location = $_POST['location']; 
$graphic = $_POST['graphic']; 
$notes = $_POST['notes'];

$filename="thedata.html";
$dataArray=split('~', file_get_contents($filename));

if ($flavour == '') {
	$flavour = $dataArray[0];
}
if ($location == '') {
	$location = $dataArray[1];
}
if ($notes == '') {
	$notes = $dataArray[3];
}

file_put_contents($filename, $flavour.'~'.$location.'~'.$graphic.'~'.$notes);


$display=file_get_contents($filename);

echo $display;
echo "<br/><br/>DONE";
?> 