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

      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
<style>
.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;  /* Preferred icon size */
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;
  vertical-align: middle;
  padding-bottom: 3px;
  /* Support for all WebKit browsers. */
  -webkit-font-smoothing: antialiased;
  /* Support for Safari and Chrome. */
  text-rendering: optimizeLegibility;

  /* Support for Firefox. */
  -moz-osx-font-smoothing: grayscale;

  /* Support for IE. */
  font-feature-settings: 'liga';
}

.ui-bar-a {
  padding-bottom: 4px;
  padding-top: 4px;
  border-radius: 0px 0px 0px 0px;
  }

.ui-body-a {
  border-style: solid hidden solid hidden;
  border-top-color: rgb(178, 235, 242);
  border-bottom-color: gray;
}
}

</style>
  </head>

  <body>
    <div data-role="page" id="main" data-theme="b">
        <div data-role="header" data-position="fixed" data-theme="b">
          <a data-rel="back" data-role="button" data-icon="back" data-iconpos="notext" class="ui-icon-left">back</a>
          <a href="login.html" data-role="button" data-icon="gear" data-iconpos="notext" class="ui-btn-right">Login</a>
          <h2 id="logo">Ugly Truth</h2>
          <div data-role="navbar" data-positon="fixed" data-theme="b">
           <ul>
             <li><a href="index.php" data-icon="home" class="ui-btn-active" data-iconpos="notext">Home</a></li>
             <li><a href="search.html" data-icon="search" data-iconpos="notext">Search</a></li>
             <li><a href="myaccount.html" data-icon="user" data-iconpos="notext">My Account</a></li>
           </ul>
          </div>
        </div>

        <div data-role="content" data-theme="b" style="padding-top:0px; padding-left:0px; padding-right:0px;">
          <div class="ui-content" style="padding-right: 0px; padding-left: 0px; padding-top: 0px; padding-bottom: 0px;">

            <div class="ui-body ui-body-a">
            <?php
            if(empty($_GET['id']) === false ) {
                $sql = 'SELECT * FROM topic WHERE id='.$_GET['id'];
                $result = mysqli_query($conn, $sql);
                $row = mysqli_fetch_assoc($result);
                echo '<h3>'.$row['title'].'</h3>';
                echo $row['description'];
                echo $row['information'];
                echo $row['created'];
                echo '<img src="data:image/jpeg;base64,'.base64_encode( $row['image']).'"/>';
            }
            ?>
            </div>
        </div>
   </div>
 </body>
</html>
