import React, { useState } from "react";
import GoogleButton from "../GoggleButton/GoggleButton";
import { Link, useNavigate } from "react-router-dom";
import {
	validateUsername,
	validatePassword,
} from "../Validation/ValidationAuth";
import "../LoginWindow/LoginWindow.scss";

const LoginComponent = () => {
	const navigate = useNavigate();

	const handleBack = () => {
		navigate("/");
	};
	const [loginForm, setLoginForm] = useState({ username: "", password: "" });
	const [error, setError] = useState(null);

	const handleLogin = () => {
		const errors = {};

		const usernameError = validateUsername(loginForm.username);
		if (usernameError) {
			errors.username = usernameError;
		}

		const passwordError = validatePassword(loginForm.password);
		if (passwordError) {
			errors.password = passwordError;
		}

		if (Object.keys(errors).length === 0) {
			setError(null);
		} else {
			setError(errors);
		}
	};

	return (
		<div className="login-window">
			<div className="login-window__container">
				<button className="login-window__close-button" onClick={handleBack}>
					&times;
				</button>
				<div className="login-window__name">Log In</div>
				<div className="login-window__description">
					<span>
						By continuing, you agree to our <a href="#">User Agreement</a> and
						acknowledge that you understand the <a href="#">Privacy Policy</a>.
					</span>
				</div>
				<GoogleButton />
				<div className="login-window__separation">OR</div>
				<div className="login-window__inputs">
					<div className="login-window__username">
						<div
							className={`login-window__input-container ${
								error && error.username ? "invalid-container" : ""
							}`}
						>
							<input
								autoComplete="off"
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
						<div
							className={`login-window__input-container ${
								error && error.password ? "invalid-container" : ""
							}`}
						>
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
				<div className="login-window__member">
					<span>
						New to Connectopium? <Link to="/register">Sign Up</Link>
					</span>
				</div>
				<div className="login-window__remember-password">
					<span>
						Forgot your <Link to="/forgot_password">password</Link>?
					</span>
				</div>
				<button
					className="login-window__button-login"
					type="button"
					onClick={handleLogin}
				>
					Log In
				</button>
			</div>
		</div>
	);
};

export default LoginComponent;
