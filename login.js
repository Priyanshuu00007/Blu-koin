// DOM Elements
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const signupForm = document.getElementById('signupForm');
const signinForm = document.getElementById('signinForm');

// Toggle between sign up and sign in
signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

// Validation functions
function validateEmail(email) {
	const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return re.test(email);
}

function validatePhone(phone) {
	const re = /^[\+]?[1-9][\d]{0,15}$/;
	return re.test(phone.replace(/\s/g, ''));
}

function validatePassword(password) {
	return password.length >= 6;
}

function validateFullName(name) {
	return name.trim().length >= 2;
}

// Show validation message
function showValidation(input, message, isValid) {
	// Remove existing validation message
	const existingMessage = input.parentNode.querySelector('.validation-message');
	if (existingMessage) {
		existingMessage.remove();
	}
	
	// Create validation message
	const messageEl = document.createElement('div');
	messageEl.className = `validation-message ${isValid ? 'success' : 'error'}`;
	messageEl.textContent = message;
	messageEl.style.cssText = `
		font-size: 12px;
		margin-top: 4px;
		color: ${isValid ? '#4FD1C5' : '#ef4444'};
		opacity: 0;
		animation: fadeIn 0.3s ease forwards;
	`;
	
	input.parentNode.appendChild(messageEl);
	
	// Add validation styles to input
	input.style.borderColor = isValid ? '#4FD1C5' : '#ef4444';
	input.style.backgroundColor = isValid ? 'rgba(79, 209, 197, 0.1)' : 'rgba(239, 68, 68, 0.1)';
}

function clearValidation(input) {
	const messageEl = input.parentNode.querySelector('.validation-message');
	if (messageEl) {
		messageEl.remove();
	}
	input.style.borderColor = '';
	input.style.backgroundColor = '';
}

// Real-time validation
function setupValidation(input, validator, successMessage, errorMessage) {
	input.addEventListener('blur', function() {
		const value = this.value.trim();
		if (value) {
			const isValid = validator(value);
			showValidation(this, isValid ? successMessage : errorMessage, isValid);
		} else {
			clearValidation(this);
		}
	});
	
	input.addEventListener('input', function() {
		// Clear validation on input
		clearValidation(this);
	});
}

// Setup validation for all inputs
document.addEventListener('DOMContentLoaded', function() {
	// Email validation
	const emailInputs = document.querySelectorAll('input[type="email"]');
	emailInputs.forEach(input => {
		setupValidation(input, validateEmail, 'Valid email address', 'Please enter a valid email');
	});
	
	// Password validation
	const passwordInputs = document.querySelectorAll('input[type="password"]');
	passwordInputs.forEach(input => {
		setupValidation(input, validatePassword, 'Password strength: Good', 'Password must be at least 6 characters');
	});
	
	// Full name validation
	const fullNameInput = document.querySelector('input[name="fullName"]');
	if (fullNameInput) {
		setupValidation(fullNameInput, validateFullName, 'Name looks good', 'Name must be at least 2 characters');
	}
	
	// Contact validation
	const contactInput = document.querySelector('input[name="contact"]');
	if (contactInput) {
		setupValidation(contactInput, validatePhone, 'Valid contact number', 'Please enter a valid contact number');
	}
});

// Form submission handlers
signupForm.addEventListener('submit', async function(e) {
	e.preventDefault();
	
	const formData = new FormData(signupForm);
	const data = Object.fromEntries(formData);
	
	// Validate all fields
	const fullName = data.fullName?.trim();
	const email = data.email?.trim();
	const contact = data.contact?.trim();
	const password = data.password;
	
	let isValid = true;
	let errorMessage = '';
	
	if (!fullName || !validateFullName(fullName)) {
		errorMessage = 'Please enter a valid full name';
		isValid = false;
	} else if (!email || !validateEmail(email)) {
		errorMessage = 'Please enter a valid email address';
		isValid = false;
	} else if (!contact || !validatePhone(contact)) {
		errorMessage = 'Please enter a valid contact number';
		isValid = false;
	} else if (!password || !validatePassword(password)) {
		errorMessage = 'Password must be at least 6 characters long';
		isValid = false;
	}
	
	if (!isValid) {
		alert(errorMessage);
		return;
	}
	
	// Show loading state
	const submitButton = signupForm.querySelector('button[type="submit"]');
	submitButton.classList.add('loading');
	submitButton.disabled = true;
	
	try {
		// Simulate API call
		await new Promise(resolve => setTimeout(resolve, 2000));
		
		// Success animation
		container.classList.add('success');
		
		// Set user as logged in
		localStorage.setItem('userLoggedIn', 'true');
		
		// Reset form
		signupForm.reset();
		
		// Redirect to dashboard immediately after successful signup
		setTimeout(() => {
			window.location.href = 'dashboard.html';
		}, 1000);
		
	} catch (error) {
		console.error('Signup error:', error);
		alert('An error occurred. Please try again.');
	} finally {
		submitButton.classList.remove('loading');
		submitButton.disabled = false;
		
		setTimeout(() => {
			container.classList.remove('success');
		}, 600);
	}
});

signinForm.addEventListener('submit', async function(e) {
	e.preventDefault();
	
	const formData = new FormData(signinForm);
	const data = Object.fromEntries(formData);
	
	// Validate fields
	const email = data.email?.trim();
	const password = data.password;
	
	let isValid = true;
	let errorMessage = '';
	
	if (!email || !validateEmail(email)) {
		errorMessage = 'Please enter a valid email address';
		isValid = false;
	} else if (!password || !validatePassword(password)) {
		errorMessage = 'Password must be at least 6 characters long';
		isValid = false;
	}
	
	if (!isValid) {
		alert(errorMessage);
		return;
	}
	
	// Show loading state
	const submitButton = signinForm.querySelector('button[type="submit"]');
	submitButton.classList.add('loading');
	submitButton.disabled = true;
	
	try {
		// Simulate API call
		await new Promise(resolve => setTimeout(resolve, 2000));
		
		// Success animation
		container.classList.add('success');
		
		// Set user as logged in
		localStorage.setItem('userLoggedIn', 'true');
		
		// Reset form
		signinForm.reset();
		
		// Redirect to dashboard immediately after successful login
		setTimeout(() => {
			window.location.href = 'dashboard.html';
		}, 1000);
		
	} catch (error) {
		console.error('Login error:', error);
		alert('Invalid credentials. Please try again.');
	} finally {
		submitButton.classList.remove('loading');
		submitButton.disabled = false;
		
		setTimeout(() => {
			container.classList.remove('success');
		}, 600);
	}
});

// Add CSS for validation messages
const style = document.createElement('style');
style.textContent = `
	@keyframes fadeIn {
		from { opacity: 0; transform: translateY(-5px); }
		to { opacity: 1; transform: translateY(0); }
	}
	
	.validation-message {
		font-size: 12px;
		margin-top: 4px;
		transition: all 0.3s ease;
	}
	
	.validation-message.success {
		color: #4FD1C5;
	}
	
	.validation-message.error {
		color: #ef4444;
	}
`;
document.head.appendChild(style);

// Keyboard accessibility
document.addEventListener('keydown', function(e) {
	if (e.key === 'Enter' && e.target.classList.contains('ghost')) {
		e.preventDefault();
		if (e.target.id === 'signUp') {
			container.classList.add("right-panel-active");
		} else if (e.target.id === 'signIn') {
			container.classList.remove("right-panel-active");
		}
	}
});

// Add smooth transitions for better UX
document.addEventListener('DOMContentLoaded', function() {
	// Add entrance animation
	container.style.opacity = '0';
	container.style.transform = 'translateY(30px)';
	
	setTimeout(() => {
		container.style.transition = 'all 0.6s ease-out';
		container.style.opacity = '1';
		container.style.transform = 'translateY(0)';
	}, 100);
});