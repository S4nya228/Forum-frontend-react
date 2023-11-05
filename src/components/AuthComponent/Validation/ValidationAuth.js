export function validateUsername(username) {
	if (!username) {
		return "Username is required.";
	}
	return null;
}

export function validatePassword(password) {
	if (!password) {
		return "Password is required.";
	}
	return null;
}

export function validateEmail(email) {
	if (!email || !/\S+@\S+\.\S+/.test(email)) {
		return `The email address must contain the @ sign. Email address "${email}" does not contain the @ sign.`;
	}
	return null;
}

export function validateName(name) {
	if (
		!name ||
		name.length < 3 ||
		name.length > 20 ||
		!/^[a-zA-Z0-9]+$/.test(name)
	) {
		return "Username must have between 3 and 20 characters";
	}
	return null;
}

export function validatePasswordComplexity(password) {
	if (!password) {
		return "Password is required.";
	}
	if (password.length < 8 || !/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/.test(password)) {
		return "The password must contain at least 8 characters, including an uppercase letter, a lowercase letter, and a number.";
	}

	return null;
}
