$(function () {
  $('#reviewSave').click(function (e) {
    e.preventDefault();
    e.stopPropagation();

    var userUid = firebase.auth().currentUser.uid;

    if (!userUid) {
      alert('login 되지 않았네요...');
      return false;
    }

    $('#uid').val(userUid);

    // Todo. 입력값 validation
    var title = $('#title').val();

    var data = $('#reviewFrm').serializeArray();
    $.ajax({
      url:'/api/v1/reviews/review',
      type: 'POST',
      data: data,
      success: function (data){
        console.log(data)
        if(data != null){
          $('#title').val('')
          $('#description').val('')
          $('#information').val('')
          $.mobile.changePage('/', {
            allowSamePageTransition: true,
            transition: 'none',
            reloadPage: true
          });
        }
      },
      error: function (err) {
        console.log(err.message)
        alert('등록 과정 중에 오류 발생하였습니다.');
      }
    })
  });
})
