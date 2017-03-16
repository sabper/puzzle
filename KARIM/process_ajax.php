<?php
$conn = mysqli_connect("localhost", "root", "17vjwmf");
mysqli_select_db($conn, "puzzle");
$sql = "INSERT INTO topic (title,description,created) VALUES('".$_POST['title']."', '".$_POST['description']."', now())";
$result = mysqli_query($conn, $sql);
?>
