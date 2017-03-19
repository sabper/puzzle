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
      .write_button{
      padding-top: 5px;
      padding-bottom: 5px;
      padding-left: 10px;
      padding-right: 10px;
      margin-left: 5px;
      margin-right: 5px;
      margin-top: 5px;
      margin-bottom: 5px;
      height: 32px;
      font-size: 14px;
    }
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
        <form action="process.php" method="POST" data-ajax="false">
          <div class="contents" data-theme="b">

                  <label for="title"><p class="font" style="margin-top: 2px; margin-bottom: 0px;">Title</p></label>
                  <input type="text" name="title" id="title" class="textarea">

                  <label for="description"><p class="font" style="margin-top: 2px; margin-bottom: 0px;">What's up?</p></label>
                  <textarea name="description" id="description" class="textarea" placeholder="Tell us about your story"></textarea>
          </div>
                </br>
          <input type="hidden" role="uploadcare-uploader" data-crop="disabled" data-preview-step="true" />
          <input type="submit" value="저장">
         </form>
        </div>
    </div>
    <script> //이미지 업로드 하는 툴
      UPLOADCARE_LOCALE = "en";
      UPLOADCARE_TABS = "file url facebook gdrive dropbox instagram flickr skydrive";
      UPLOADCARE_PUBLIC_KEY = "237281836e4132aca1dc";
    </script>

    <script charset="utf-8" src="//ucarecdn.com/libs/widget/2.10.3/uploadcare.full.min.js"></script>
    <script>
    var singleWidget = uploadcare.SingleWidget('[role=uploadcare-uploader]');
    singleWidget.onUploadComplete(function(info){
      document.getElementById('description').value = document.getElementById('description').value + '<img src="'+info.cdnUrl+'">';
    });
    </script>
  </body>
</html>
