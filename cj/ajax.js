$('#save').click(function(){
  var queryString = $("form[name=testForm]").serialize();

  $.ajax({
    url:"http://localhost:8080/puzzle/cj/process_ajax_serialize.php",
    type: 'POST',
    data: queryString,
    success:function (data){
    if(data != null){
        window.location = "http://localhost:8080/puzzle/cj/index.php";
          }
        }
      })
    });
