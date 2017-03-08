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

  </head>

  <body>
    <div data-role="page" id="main" data-theme="b">
        <div data-role="header" data-position="fixed" data-theme="b">
          <h1>PUZZLE</h1>
        </div>
        <div data-role="content">
          <table data-role="table" id="my-table" data-mode="reflow">
            <thead>
              <tr>
                <th scope="col">
                  <?php
                    echo $views->subject;
                  ?>
                </th>
                <th scope="col">이름:
                  <?php
                    echo $views->subject;
                  ?>
                </th>
                <th scope="col">조횟수:
                  <?php
                    echo $views->subject;
                  ?>
                </th>
                <th scope="col">등록일:
                  <?php
                    echo $views->subject;
                  ?>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th colspan="4">
                  <img src="/sns/uploads/<?php echo $views->file_name;?>"><br>
                  <?php
                    echo $views->contents;?><br><br>
                    파일명: <?php echo $views->original_name;?>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
 </body>
</html>
