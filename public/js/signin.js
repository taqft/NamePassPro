$(document).ready(function () {
  const emailField = $('#emailField');
  const passwordField = $('#passwordField');
  const signinBtn = $('#signinBtn');
  signinBtn.on('click', async function (event) {
    event.preventDefault();
    await $.post('/api/users/login', {
      email: emailField.val().trim(),
      password: passwordField.val().trim(),
    });
    window.location.href = '/saved';
  });
  // logoutBtn.on('click', async function () {
  //   await $.post('/api/users/logout');
  //   window.location.href = '/';
  // });
});
