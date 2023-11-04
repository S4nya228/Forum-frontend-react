import React, { useState } from "react";
import LoginWindow from "../LoginWindow/LoginComponent";
const Header = () => {
	const [isLoginWindowOpen, setIsLoginWindowOpen] = useState(false);

	const openLoginWindow = () => {
		setIsLoginWindowOpen(true);
	};

	const closeLoginWindow = () => {
		setIsLoginWindowOpen(false);
	};

	return (
		<header className="header">
			<div className="header__container">
				<div className="header__logo">
					<div className="header__logo-img">
						<img src="/logo.jpg" alt="logo" />
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
					<a className="header__login-link" href="#" onClick={openLoginWindow}>
						Log in
					</a>
				</div>
			</div>
			<LoginWindow isOpen={isLoginWindowOpen} onClose={closeLoginWindow} />
		</header>
	);
};

export default Header;
