 $(function(){
        $('#camera').change(function(e){
           $('#pic').attr('src', URL.createObjectURL(e.target.files[0]));
           });
       });

  $(function(){
        $('#camcorder').change(function(e){
            $('#mov').attr('src', URL.createObjectURL(e.target.files[0]));
            });
       });
