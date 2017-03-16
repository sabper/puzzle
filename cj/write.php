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

      <link rel="stylesheet" type="text/css" href="style.css">
      <script src="camera.js"></script>
      <style>
      textarea {
        font-size: 14px;
      }

      input[type="text"]
      {
        font-size:14px;
      }

      .font{
        font-size:14px;
      }

      </style>

  </head>

  <body>
    <div data-role="page" id="main" data-theme="b">
        <div data-role="header" data-position="fixed" data-theme="b">
            <h2 id="logo">Ugly Truth</h2>
          <div data-role="navbar" data-positon="fixed" data-theme="b">
           <ul>
             <li><a href="index.php" data-icon="home" data-iconpos="notext">Home</a></li>
             <li><a href="search.html" data-icon="search" data-iconpos="notext">Search</a></li>
             <li><a href="myaccount.html" data-icon="user" data-iconpos="notext">My Account</a></li>
           </ul>
          </div>
         </div>

        <div data-role="content" data-theme="b">
          <div class="contents" data-theme="a">
                  <label for="title"><p class="font" style="margin-top: 2px; margin-bottom: 0px;">Title</p></label>
                  <input type="text" name="title" id="title" class="textarea">

                  <label for="description"><p class="font" style="margin-top: 2px; margin-bottom: 0px;">What's up?</p></label>
                  <textarea name="description" id="description" class="textarea" placeholder="Tell us about your story"></textarea>

                  <label for="information"><p class="font" style="margin-top: 2px; margin-bottom: 0px;">What else?</p></label>
                  <textarea name="information" id="information" class="textarea" placeholder="Good information for others"></textarea>
          </div>
          <br/>
          <input type="submit" id="save" value="저장" style="background: rgb(85,71,232); color:white;">

          <script src="ajax.js" type="text/javascript"></script>
        </div>
    </div>
  </body>
</html>
