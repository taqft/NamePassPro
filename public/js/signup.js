$(document).ready(function() {
	const emailField = $('#emailField');
	const usernameField = $('#usernameField');
	const passwordField = $('#passwordField');
	const masterPassField = $('#masterPassField');
	const signupBtn = $('#signupBtn');
	signupBtn.on('click', async function(event) {
		event.preventDefault();
		await $.post('/api/users/signup', {
			email: emailField.val(),
			username: usernameField.val(),
			password: passwordField.val(),
			master: masterPassField.val(),
		});

		window.location.href = '/saved';
	});
});
