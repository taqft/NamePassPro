// namepass generation logic
$(document).ready(function () {
  const logoutBtn = $('#logout');
  logoutBtn.on('click', async function () {
    await $.post('/api/users/logout');
    window.location.href = '/';
  });
});

// TODO: port previous functions to work here as normal
