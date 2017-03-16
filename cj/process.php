<?php
$conn = mysqli_connect("localhost", "root", "vjwmf2017");
mysqli_select_db($conn, "puzzle");
$sql = "INSERT INTO topic (title,description,created) VALUES('".$_POST['title']."', '".$_POST['description']."', now())";
$result = mysqli_query($conn, $sql);
header('Location: http://localhost:8080/puzzle/cj/index.php');
?>
