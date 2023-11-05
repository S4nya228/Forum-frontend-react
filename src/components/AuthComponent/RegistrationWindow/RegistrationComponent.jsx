import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleButton from "../GoggleButton/GoggleButton";
import {
	validateEmail,
	validateName,
	validatePasswordComplexity,
} from "../Validation/ValidationAuth";
import "../RegistrationWindow/RegistrationWindow.scss";

const RegistrationComponent = () => {
	const navigate = useNavigate();

	const handleBack = () => {
		navigate("/");
	};

	const [registerForm, setRegisterForm] = useState({
		email: "",
		name: "",
		password: "",
		confirmPassword: "",
	});
	const [registrationStep, setRegistrationStep] = useState(1);
	const isRegistrationStep2 = registrationStep === 2;
	const [error, setError] = useState(null);

	const handleRegistration = () => {
		const errors = {};

		if (registrationStep === 1) {
			const emailError = validateEmail(registerForm.email);
			if (emailError) {
				errors.email = emailError;
			}
		} else if (registrationStep === 2) {
			const nameError = validateName(registerForm.name);
			if (nameError) {
				errors.name = nameError;
			}
			const passwordComplexityError = validatePasswordComplexity(
				registerForm.password
			);
			if (passwordComplexityError) {
				errors.password = passwordComplexityError;
			}
			if (registerForm.password !== registerForm.confirmPassword) {
				errors.confirmPassword = "Passwords do not match.";
			}
		}

		if (Object.keys(errors).length === 0) {
			setError(null);
			if (registrationStep === 1) {
				// Якщо це перший крок, змінюємо на другий
				setRegistrationStep(2);
			} else {
				// Робіть реєстрацію або іншу логіку для другого кроку
			}
		} else {
			setError(errors);
		}
	};

	return (
		<div className="registration-window">
			<div className="registration-window__container">
				{!isRegistrationStep2 && (
					<button
						className="registration-window__close-button"
						onClick={handleBack}
					>
						&times;
					</button>
				)}
				{isRegistrationStep2 && (
					<button
						className="registration-window__button-back"
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
				<div className="registration-window__name">
					{!isRegistrationStep2
						? "Sign Up"
						: "Create your username and password"}
				</div>
				<div className="registration-window__description">
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
				{!isRegistrationStep2 ? <GoogleButton /> : null}
				{!isRegistrationStep2 && (
					<div className="registration-window__separation">OR</div>
				)}
				{registrationStep === 1 ? (
					<div className="registration-window__inputs">
						<div className="registration-window__email">
							<div
								className={`registration-window__input-container ${
									error && error.email ? "invalid-container" : ""
								}`}
							>
								<input
									autoComplete="off"
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
					<div className="registration-window__inputs">
						<div className="registration-window__name-for-registration">
							<div
								className={`registration-window__input-container ${
									error && error.name ? "invalid-container" : ""
								}`}
							>
								<input
									autoComplete="off"
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
						<div className="registration-window__password">
							<div
								className={`registration-window__input-container ${
									error && error.password ? "invalid-container" : ""
								}`}
							>
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
						<div className="registration-window__confirmed-password">
							<div
								className={`registration-window__input-container ${
									error && error.confirmPassword ? "invalid-container" : ""
								}`}
							>
								<input
									type="password"
									name="confirmPassword"
									id="confirm-password-label"
									value={registerForm.confirmPassword}
									onChange={(e) =>
										setRegisterForm({
											...registerForm,
											confirmPassword: e.target.value,
										})
									}
									required
									className={
										error && error.confirmPassword ? "invalid-input" : ""
									}
								/>
								<label htmlFor="confirm-password-label">Confirm Password</label>
							</div>
							{error && error.confirmPassword && (
								<div className="error-message">{error.confirmPassword}</div>
							)}
						</div>
					</div>
				)}
				<div className="registration-window__member">
					{!isRegistrationStep2 && (
						<span>
							Already have an account? <Link to="/login">Log In</Link>
						</span>
					)}
				</div>
				<button
					className="registration-window__button-register"
					type="button"
					onClick={handleRegistration}
				>
					{isRegistrationStep2 ? "Register" : "Continue"}
				</button>
			</div>
		</div>
	);
};

export default RegistrationComponent;
