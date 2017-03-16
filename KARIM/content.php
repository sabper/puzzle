<?php
$conn = mysqli_connect("localhost", "root", "17vjwmf");
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

        <div data-role="content" data-theme="b" style="padding-top: 1px;">
          <div class="ui-corner-all custom-corners">
            <div class="ui-bar ui-bar-a" data-theme="c">
            <?php
            if(empty($_GET['id']) === false ) {
                $sql = 'SELECT * FROM topic WHERE id='.$_GET['id'];
                $result = mysqli_query($conn, $sql);
                $row = mysqli_fetch_assoc($result);
                echo '<h3>'.$row['title'].'</h3>';

            }
            ?>
          </div>
          <div class="ui-body ui-body-a">
          <?php
          if(empty($_GET['id']) === false ) {
              $sql = 'SELECT * FROM topic WHERE id='.$_GET['id'];
              $result = mysqli_query($conn, $sql);
              $row = mysqli_fetch_assoc($result);
              echo $row['description'];
          }
          ?>
          </div>
        </div>
          <br>
          <div>
            작성일자:
            <?php
            if(empty($_GET['id']) === false ) {
                $sql = 'SELECT * FROM topic WHERE id='.$_GET['id'];
                $result = mysqli_query($conn, $sql);
                $row = mysqli_fetch_assoc($result);
                echo $row['created'];
            }
            ?>
          </div>
        </div>
   </div>
 </body>
</html>
