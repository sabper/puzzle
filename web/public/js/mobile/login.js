$(function() {
  $("#loginBtn").click(function(e) {
    e.preventDefault();
    e.stopPropagation();

    var email = $('#loginID').val();
    var password = $('#loginPASS').val();

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      // 등록되지 않은 이메일 ... 등등 오류코드 확인 : https://firebase.google.com/docs/reference/js/firebase.auth.Auth#signInWithEmailAndPassword
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage);
      return;
    });

    var userEmail = firebase.auth().currentUser.email;

    if (userEmail) {
      alert(userEmail + ' login 되었습니다.');
      window.location.replace("/mobile");
    }
  });

  // 로그아웃
  $("#logoutBtn").click(function(e) {
    e.preventDefault();
    e.stopPropagation();

    firebase.auth().signOut();
  });
})
