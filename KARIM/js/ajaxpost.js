$('#fly').click(function(){
    var 
    $.ajax({
      url:"http://localhost/develop/puzzle/KARIM/process_ajax.php",
      type: 'POST',
      data: {title:$('#badreviewtt').val(), description:$('#badreviewdes').val()},
      success:function (data){
      if(data != null){
              window.location = "http://localhost/develop/puzzle/KARIM/uglytruthdf4.html";
              }
            }
          })
        });
