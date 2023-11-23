import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setToken } from '../../../store/authSlise'
import GoogleButton from '../GoggleButton/GoggleButton'
import { Link, useNavigate } from 'react-router-dom'
import axiosInstance from '../../../api/axiosInstance'
import { validatePassword, validateEmail } from '../Validation/ValidationAuth'
import '../LoginWindow/LoginWindow.scss'

const LoginComponent = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const handleBack = () => {
		navigate('/')
	}
	const [loginForm, setLoginForm] = useState({ email: '', password: '' })
	const [error, setError] = useState(null)

	const handleLogin = async () => {
		const errors = {}

		const emailError = validateEmail(loginForm.email)
		if (emailError) {
			errors.email = emailError
		}

		const passwordError = validatePassword(loginForm.password)
		if (passwordError) {
			errors.password = passwordError
		}

		if (Object.keys(errors).length === 0) {
			setError(null)
			try {
				const response = await axiosInstance.post('/login', {
					email: loginForm.email,
					password: loginForm.password,
				})

				const { token } = response.data
				dispatch(setToken(token))
				navigate('/')
			} catch (error) {
				console.error('Login failed:', error.response.data)
			}
		} else {
			setError(errors)
		}
	}

	return (
		<div className="login-window">
			<div className="login-window__container">
				<button className="login-window__close-button" onClick={handleBack}>
					&times;
				</button>
				<div className="login-window__name">Log In</div>
				<div className="login-window__description">
					<span>
						By continuing, you agree to our{' '}
						<Link to="/agreement">User Agreement</Link> and acknowledge that you
						understand the <Link to="/policy">Privacy Policy</Link>.
					</span>
				</div>
				<GoogleButton />
				<div className="login-window__separation">OR</div>
				<div className="login-window__inputs">
					<div className="login-window__email">
						<div
							className={`login-window__input-container ${
								error && error.email ? 'invalid-container' : ''
							}`}
						>
							<input
								type="text"
								name="email"
								id="email-label"
								value={loginForm.email}
								onChange={(e) =>
									setLoginForm({ ...loginForm, email: e.target.value })
								}
								required
							/>
							<label htmlFor="email-label">Email</label>
						</div>
						{error && error.email && (
							<div className="error-message">{error.email}</div>
						)}
					</div>
					<div className="login-window__password">
						<div
							className={`login-window__input-container ${
								error && error.password ? 'invalid-container' : ''
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
						Forgot your <Link to="/forgot-password">password</Link>?
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
	)
}

export default LoginComponent
