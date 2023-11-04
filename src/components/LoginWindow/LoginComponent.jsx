import React, { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import "../LoginWindow/LoginWindow.scss";

const LoginWindow = ({ isOpen, onClose }) => {
	const login = useGoogleLogin({
		onSuccess: (tokenResponse) => console.log(tokenResponse),
	});

	const [isLogin, setIsLogin] = useState(true);
	const [loginForm, setLoginForm] = useState({ username: "", password: "" });
	const [registerForm, setRegisterForm] = useState({
		email: "",
		name: "",
		password: "",
	});
	const [registrationStep, setRegistrationStep] = useState(1);
	const isRegistrationStep2 = registrationStep === 2;
	const [error, setError] = useState(null);

	const toggleForm = () => {
		setIsLogin(!isLogin);
		setLoginForm({ username: "", password: "" });
		setRegisterForm({ email: "", name: "", password: "" });
		setRegistrationStep(1);
		setError(null);
	};

	const handleRegistration = () => {
		const errors = {};

		if (isLogin) {
			if (!loginForm.username) {
				errors.username = "Username is required.";
			}
			if (!loginForm.password) {
				errors.password = "Password is required.";
			}
		} else {
			if (registrationStep === 1) {
				if (!registerForm.email || !/\S+@\S+\.\S+/.test(registerForm.email)) {
					errors.email = `The email address must contain the @ sign. Email address "${registerForm.email}" does not contain the @ sign.`;
				}
			} else if (registrationStep === 2) {
				if (
					!registerForm.name ||
					registerForm.name.length < 3 ||
					registerForm.name.length > 20 ||
					!/^[a-zA-Z0-9]+$/.test(registerForm.name)
				) {
					errors.name = "Username must have between 3 and 20 characters";
				}
				if (
					!registerForm.password ||
					registerForm.password.length < 8 ||
					!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/.test(registerForm.password)
				) {
					errors.password =
						"The password must contain at least 8 characters, including an uppercase letter, a lowercase letter, and a number.";
				}
			}
		}

		if (Object.keys(errors).length === 0) {
			setError(null);
			if (isLogin) {
				console.log("Logging in with data:", loginForm);
			} else {
				if (registrationStep === 1) {
					setRegistrationStep(2);
				} else if (registrationStep === 2) {
					console.log("Registering with data:", registerForm);
				}
			}
		} else {
			setError(errors);
		}
	};

	if (!isOpen) return null;

	return (
		<div className="login-window">
			<div className="login-window__container">
				{!isRegistrationStep2 && (
					<button className="login-window__close-button" onClick={onClose}>
						&times;
					</button>
				)}
				{isRegistrationStep2 && (
					<button
						className="login-window__button-back"
						onClick={() => setRegistrationStep(1)}
					>
						<svg
							rpl=""
							fill="#fff"
							height="40"
							icon-name="back-outline"
							viewBox="0 0 20 20"
							width="20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M19 9.375H2.51l7.932-7.933-.884-.884-9 9a.625.625 0 0 0 0 .884l9 9 .884-.884-7.933-7.933H19v-1.25Z"></path>
						</svg>
					</button>
				)}
				<div className="login-window__name">
					{!isRegistrationStep2
						? isLogin
							? "Log In"
							: "Sign Up"
						: "Create your username and password"}
				</div>
				<div className="login-window__description">
					{!isRegistrationStep2 ? (
						<span>
							By continuing, you agree to our <a href="#">User Agreement</a> and
							acknowledge that you understand the <a href="#">Privacy Policy</a>
							.
						</span>
					) : (
						<span>
							Connectopium is anonymous, so your username is what you’ll go by
							here. Choose wisely — because once you get a name, you can’t
							change it.
						</span>
					)}
				</div>
				{!isRegistrationStep2 && (
					<div className="login-window__button-google">
						<button onClick={login}>
							<svg
								aria-hidden="true"
								className="native svg-icon iconGoogle"
								width="18"
								height="18"
								viewBox="0 0 18 18"
							>
								<path
									fill="#4285F4"
									d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18Z"
								></path>
								<path
									fill="#34A853"
									d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 0 1-7.18-2.54H1.83v2.07A8 8 0 0 0 8.98 17Z"
								></path>
								<path
									fill="#FBBC05"
									d="M4.5 10.52a4.8 4.8 0 0 1 0-3.04V5.41H1.83a8 8 0 0 0 0 7.18l2.67-2.07Z"
								></path>
								<path
									fill="#EA4335"
									d="M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 0 0 1.83 5.4L4.5 7.49a4.77 4.77 0 0 1 4.48-3.3Z"
								></path>
							</svg>
							Sign in with Google
						</button>
					</div>
				)}
				{!isRegistrationStep2 && (
					<div className="login-window__separation">OR</div>
				)}
				{isLogin ? (
					<div className="login-window__inputs">
						<div className="login-window__username">
							<div className="login-window__input-container">
								<input
									type="text"
									name="username"
									id="username-label"
									value={loginForm.username}
									onChange={(e) =>
										setLoginForm({ ...loginForm, username: e.target.value })
									}
									required
								/>
								<label htmlFor="username-label">Username</label>
							</div>
							{error && error.username && (
								<div className="error-message">{error.username}</div>
							)}
						</div>
						<div className="login-window__password">
							<div className="login-window__input-container">
								<input
									type="password"
									name="password"
									id="password-label"
									value={loginForm.password}
									onChange={(e) =>
										setLoginForm({ ...loginForm, password: e.target.value })
									}
									required
								/>
								<label htmlFor="password-label">Password</label>
							</div>
							{error && error.password && (
								<div className="error-message">{error.password}</div>
							)}
						</div>
					</div>
				) : (
					<>
						{registrationStep === 1 ? (
							<div className="login-window__inputs">
								<div className="login-window__email">
									<div className="login-window__input-container">
										<input
											type="text"
											required
											name="email"
											id="email-label"
											value={registerForm.email}
											onChange={(e) =>
												setRegisterForm({
													...registerForm,
													email: e.target.value,
												})
											}
										/>
										<label htmlFor="email-label">Email</label>
									</div>
									{error && error.email && (
										<div className="error-message">{error.email}</div>
									)}
								</div>
							</div>
						) : (
							<div className="login-window__inputs">
								<div className="login-window__name-for-registration">
									<div className="login-window__input-container">
										<input
											type="text"
											name="name"
											id="name-label"
											value={registerForm.name}
											onChange={(e) =>
												setRegisterForm({
													...registerForm,
													name: e.target.value,
												})
											}
											required
										/>
										<label htmlFor="name-label">Name</label>
									</div>
									{error && error.name && (
										<div className="error-message">{error.name}</div>
									)}
								</div>

								<div className="login-window__password">
									<div className="login-window__input-container">
										<input
											type="password"
											name="password"
											id="password-label"
											value={registerForm.password}
											onChange={(e) =>
												setRegisterForm({
													...registerForm,
													password: e.target.value,
												})
											}
											required
										/>
										<label htmlFor="password-label">Password</label>
									</div>
									{error && error.password && (
										<div className="error-message">{error.password}</div>
									)}
								</div>
							</div>
						)}
					</>
				)}
				<div className="login-window__member">
					{!isRegistrationStep2 && (
						<span>
							{isLogin ? "New to Connectopium?" : "Already have an account?"}{" "}
							<a onClick={toggleForm}>{isLogin ? "Sign Up" : "Log In"}</a>
						</span>
					)}
				</div>
				{isLogin ? (
					<div className="login-window__remember-password">
						<span>
							Forgot your<a href="#"> password</a>?
						</span>
					</div>
				) : null}

				<button
					className="login-window__button-login"
					type="button"
					onClick={handleRegistration}
				>
					{isLogin
						? "Log In"
						: registrationStep === 1
						? "Continue"
						: "Register"}
				</button>
			</div>
		</div>
	);
};

export default LoginWindow;

// 	/* <svg
// 	aria-hidden="true"
// 	className="native svg-icon iconGoogle"
// 	width="18"
// 	height="18"
// 	viewBox="0 0 18 18"
// >
// 	<path
// 		fill="#4285F4"
// 		d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18Z"
// 	></path>
// 	<path
// 		fill="#34A853"
// 		d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 0 1-7.18-2.54H1.83v2.07A8 8 0 0 0 8.98 17Z"
// 	></path>
// 	<path
// 		fill="#FBBC05"
// 		d="M4.5 10.52a4.8 4.8 0 0 1 0-3.04V5.41H1.83a8 8 0 0 0 0 7.18l2.67-2.07Z"
// 	></path>
// 	<path
// 		fill="#EA4335"
// 		d="M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 0 0 1.83 5.4L4.5 7.49a4.77 4.77 0 0 1 4.48-3.3Z"
// 	></path>
// </svg>; */
