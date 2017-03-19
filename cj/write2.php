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
        <form action="process.php" method="POST" data-ajax="false">

                  <label for="title"><p class="font" style="margin-top: 2px; margin-bottom: 0px;">Title</p></label>
                  <input type="text" name="title" id="text-1" class="textarea">

                  <label for="description"><p class="font" style="margin-top: 2px; margin-bottom: 0px;">What's up?</p></label>
                  <textarea name="description" id="textarea-1" class="textarea" placeholder="Tell us about your story"></textarea>

                  <input type="submit" value="저장">
         </form>
        </div>
    </div>
  </body>
</html>
