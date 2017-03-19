<?php
$conn = mysqli_connect("localhost", "root", "vjwmf2017");
mysqli_select_db($conn, "puzzle");
$title=$_POST['title'];
$description=$_POST['description'];
$information=$_POST['information'];
$image = addslashes(file_get_contents($_FILES['image']['tmp_name']));
$sql = "INSERT INTO topic (title,description,information,name,image,created) VALUES('$title', '$description', '$information', '$name', '$image', now())";
$result = mysqli_query($conn, $sql);
?>
