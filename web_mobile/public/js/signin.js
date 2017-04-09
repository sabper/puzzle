$(document).on("pagebeforecreate", function (event) {
  firebase.auth().onAuthStateChanged(function (user) {
    window.user = user;
    // Step 1:
    //  If no user, sign in anonymously with firebase.auth().signInAnonymously()
    //  If there is a user, log out out user details for debugging purposes.

    if (user) { // 로그인 성공
      console.log('login success in mobile. ', user.email)
      $.mobile.changePage('/');
    } else { // 로그인 실패 또는 미로그인
      console.log('not login in mobile.')
    }
  });
});

$(function () {
  $("#loginBtn").click(function(e) {
    e.preventDefault();
    e.stopPropagation();

    var email = $('#loginID').val();
    var password = $('#loginPASS').val();

    if (!email) {
      alert('이메일을 입력해주세요.')
      return
    }

    if (!password) {
      alert('비밀번호를 입력해주세요.')
      return
    }

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
      // Handle Errors here.
      // 등록되지 않은 이메일 ... 등등 오류코드 확인 : https://firebase.google.com/docs/reference/js/firebase.auth.Auth#signInWithEmailAndPassword
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage);
      alert(errorMessage)
      return;
    });
  });

  // 로그아웃
  $("#logoutBtn").click(function(e) {
    e.preventDefault();
    e.stopPropagation();

    firebase.auth().signOut();
  });
})
