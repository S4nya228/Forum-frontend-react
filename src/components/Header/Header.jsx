import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import '../Header/Header.scss'
import '../AuthComponent/LoginWindow/LoginWindow.scss'

const Header = () => {
	const token = useSelector((state) => state.auth.token)
	return (
		<header className="header">
			<div className="header__container">
				<div className="header__logo">
					<div className="header__logo-img">
						<Link to="/">
							<img src="/image/logo.jpg" alt="logo" />
						</Link>
					</div>
					<div className="header__logo-name">Connectopium</div>
				</div>
				<div className="header__search">
					<input
						className="header__search-input"
						type="text"
						placeholder="Type here to search..."
					/>
					<svg
						width="20"
						height="21"
						viewBox="0 0 20 21"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<circle cx="9" cy="9" r="8" stroke="#858EAD" strokeWidth="2" />
						<path
							d="M14.5 15.5L18.5 19.5"
							stroke="#858EAD"
							strokeWidth="2"
							strokeLinecap="round"
						/>
					</svg>
				</div>
				<div className="header__login">
					{token ? (
						<Link to="login" className="header__login-link">
							Log In
						</Link>
					) : (
						<Link to="/profile" className="header__auth-user">
							<img src="/image/avatar.svg" alt="avatar user" />
							<span>Sanya228</span>
						</Link>
					)}
				</div>
			</div>
		</header>
	)
}

export default Header
