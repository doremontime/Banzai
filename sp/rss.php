<?php
	$url  = $_GET["url"];
	$xml = file_get_contents($url);
	echo $xml;
?>