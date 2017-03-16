<?php
  ini_set('mysql.connect_timeout',300);
  ini_set('default_socket_timeout',300);
 ?>

 <!DOCTYPE html>
 <html>
   <head>
     <meta charset="utf-8">
   </head>
   <body>
        <form method="post" enctype="multipart/form-data">
          <br/>
            <input type="file" name="image"/>
            <br/><br/>
            <input type="submit" name="submit"  value="Upload"/>
        </form>


        <?php
            if(isset($_POST['submit']))
            {
              if(getimagesize($_FILES['image']['tmp_name'])==FALSE)
              {
                echo "please select an image";
              }
              else
              {
                $image=addslashes($_FILES['image']['tmp_name']);
                $name=addslashes($_FILES['image']['name']);
                $image=file_get_contents($image);
                $image=base64_encode($image);
                saveimage($name,$image);
              }
            }

            function saveimage($name,$image)
            {
              $conn=mysql_connect("localhost","root","vjwmf2017");
              mysql_select_db($conn,"puzzle");
              $qry="INSERT INTO topic (name,image) VALUES ('$name','$image')"
              $result=mysql_query($conn,$qry);
              if($result)
              {
                echo "<br/>Image uploaded";
              }
              else
              {
                echo "<br/> Image not uploaded";
              }
            }
         ?>

   </body>
 </html>
