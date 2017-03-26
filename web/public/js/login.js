$(function() {
  $('#login_form').submit(function (event) {
    var data = ($(this).serializeArray())
    $.ajax({
      type: 'POST',
      url: '/api/v1/users/user/login',
      data: data,
      success: function (data) {
        console.log(data)
        window.location.replace('/')
      },
      error: function (data) {
        alert('로그인 실패')
      }
    })
    event.preventDefault()
  })
})
