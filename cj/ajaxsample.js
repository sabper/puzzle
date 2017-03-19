<script type="text/javascript" language="javascript">

  function to_ajax(){
    var queryString = $("form[name=testFrom]").serialize();

    $(document).ready(function(){
        $.ajax({
            url : "/test.jsp",
            type : "POST",
            data : queryString
            dataType : "json",
            error : function(xhr, status, error){
                alert('error');
            },
            success : function(json){
                alert("통신데이터 값 : " + data) ;
                $("#dataArea").html(data) ;
            }
        });
    });
  }


</script>
