$(function() {
  $("#utloginbt").click(function(e) {
    e.preventDefault();
    e.stopPropagation();

    var email = $('#email').val();
    var password = $('#password').val();

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      // 등록되지 않은 이메일 ... 등등 오류코드 확인 : https://firebase.google.com/docs/reference/js/firebase.auth.Auth#signInWithEmailAndPassword
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
  });

  // 로그아웃
  $("#logoutBtn").click(function(e) {
    e.preventDefault();
    e.stopPropagation();

    firebase.auth().signOut();
  });
})
