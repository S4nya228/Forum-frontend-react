import React, { useState } from 'react'
import { validateEmail } from '../../../validations/ValidationAuth'
import { Link, useNavigate } from 'react-router-dom'
import '../ForgotPassword/ForgotPassword.scss'

const ForgotPassword = () => {
	const [forgotPasswordForm, setforgotPasswordForm] = useState({
		username: '',
		email: '',
	})

	const [error, setError] = useState(null)

	const navigate = useNavigate()

	const handleBack = () => {
		navigate('/login')
	}

	const handleSubmit = () => {
		const errors = {}

		const emailError = validateEmail(forgotPasswordForm.email)
		if (emailError) {
			errors.email = emailError
		}

		if (emailError) {
			setError({
				email: emailError,
			})
		} else {
			setError(null)
		}
	}

	return (
		<div className="forgot-password-window">
			<div className="forgot-password-window__container">
				<button
					className="forgot-password-window__button-back"
					onClick={handleBack}
				>
					<img src="/image/icon_button-back.svg" alt="button back" />
				</button>
				<div className="forgot-password-window__name">Reset your password</div>
				<div className="forgot-password-window__description">
					<span>
						Tell us the username and email address associated with your Reddit
						account, and we’ll send you an email with a link to reset your
						password.
					</span>
				</div>
				<div className="forgot-password-window__inputs">
					<div className="forgot-password-window__email">
						<div
							className={`forgot-password-window__input-container ${
								error && error.email ? 'invalid-container' : ''
							}`}
						>
							<input
								autoComplete="off"
								type="text"
								required
								name="email"
								id="email-label"
								value={forgotPasswordForm.email}
								onChange={(e) =>
									setforgotPasswordForm({
										...forgotPasswordForm,
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

				<div className="forgot-password-window__link">
					<Link to="/login">Sign In</Link> • <Link to="/register">Sign Up</Link>
				</div>
				<button
					className="forgot-password-window__button-reset"
					type="button"
					onClick={handleSubmit}
				>
					Resset Password
				</button>
			</div>
		</div>
	)
}

export default ForgotPassword
