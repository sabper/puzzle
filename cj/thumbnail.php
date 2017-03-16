<?php
$conn = mysqli_connect("localhost", "root", "vjwmf2017");
mysqli_select_db($conn, "puzzle");
$result = mysqli_query($conn, "SELECT * FROM topic");
?>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">

    <title>Ugly Truth MVP</title>
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
      <script src="floatingbutton.js"></script>

      <style>
        #container {
          position: relative;
          left: 1%;
          top: 40px;
          border: 1px solid;
          width: 98%;

        }
      </style>
  </head>

  <body>
    <div data-role="page" id="main" data-theme="b">
        <div data-role="header" data-position="fixed" data-theme="b">
          <a href="login.html" data-icon="gear" data-iconpos="notext" class="ui-btn-right">Login</a>
          <h2 id="logo">Ugly Truth</h2>
          <div data-role="navbar" data-positon="fixed" data-theme="b">
           <ul>
             <li><a href="index.php" data-icon="home" class="ui-btn-active" data-iconpos="notext">Home</a></li>
             <li><a href="search.html" data-icon="search" data-iconpos="notext">Search</a></li>
             <li><a href="myaccount.html" data-icon="user" data-iconpos="notext">My Account</a></li>
           </ul>
          </div>

        </div>

        <div data-role="content" data-theme="b" style="padding-top: 0px; height: 550px;">
            <div id="container">
              <h1>i love you</h1>
            </div>
            <div id="container">
              <h1>i love you</h1>
            </div>
            <div id="container">
              <h1>i love you</h1>
            </div>
        </div>
   </div>
 </body>
</html>
