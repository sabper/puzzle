<?php
$conn = mysqli_connect("localhost", "root", "vjwmf2017");
mysqli_select_db($conn, "puzzle");
$sql = "INSERT INTO topic (title,description,information,created) VALUES('".$_POST['title']."', '".$_POST['description']."', '".$_POST['information']."', now())";
$result = mysqli_query($conn, $sql);
?>
