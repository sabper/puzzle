$(document).on("pagecreate", function (event) {
  firebase.auth().onAuthStateChanged(function (user) {
    window.user = user;
    // Step 1:
    //  If no user, sign in anonymously with firebase.auth().signInAnonymously()
    //  If there is a user, log out out user details for debugging purposes.

    if (user) { // 로그인 성공
      console.log('login success in mobile. ', user.email)
    } else { // 로그인 실패 또는 미로그인
      console.log('not login in mobile.')
    }
  });
});
