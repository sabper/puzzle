<!DOCTYPE html>
<html>
<head>
     <meta charset="utf-8">
     <meta name="viewport" content="width=device-width, initial-scale=1">

     <link rel="stylesheet" href="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css" />
     <link rel="stylesheet" href="themes/my-custom-theme.min.css" />
     <link rel="stylesheet" href="themes/jquery.mobile.icons.min.css" />
     <script src="http://code.jquery.com/jquery-1.11.1.min.js"></script>
     <script src="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"></script>

     <link rel="stylesheet" href="//fonts.googleapis.com/icon?family=Material+Icons">
     <link rel="stylesheet" href="collapzion.min.css">
     <script src="collapzion.min.js"></script>

     <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
  <?php
    $password = $_GET["password"];
    if($password == "1111"){
        header('Location: localhost:8080/puzzle/cj/index.html/');
    } else {
        header('Location: signin.html')
    }
   ?>
</body>
</html>
