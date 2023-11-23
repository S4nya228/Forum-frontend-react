import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setUser } from '../../store/userSlise'
import '../Header/Header.scss'
import '../AuthComponent/LoginWindow/LoginWindow.scss'
import axiosInstance from '../../api/axiosInstance'

const Header = () => {
	const token = useSelector((state) => state.auth.token)
	const user = useSelector((state) => state.user.user)
	const dispatch = useDispatch()

	useEffect(() => {
		const fetchUserData = async () => {
			try {
				const response = await axiosInstance.get('/user', {
					headers: {
						Authorization: `Bearer ${token}`,
						'Content-Type': 'application/json',
					},
				})

				dispatch(setUser(response.data))
			} catch (error) {
				console.error('Error fetching user data:', error)
			}
		}

		if (token && (!user || user.name === null)) {
			fetchUserData()
		}
	}, [token, user, dispatch])

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
						<Link to="/profile" className="header__auth-user">
							{user && user.avatar ? (
								<img
									src={`http://ec2-51-20-87-96.eu-north-1.compute.amazonaws.com${user.avatar}`}
									alt="avatar user"
								/>
							) : (
								<img src="/image/Avatar.svg" alt="default avatar" />
							)}
							<span>{user ? user.name : ''}</span>
						</Link>
					) : (
						<Link to="login" className="header__login-link">
							Log In
						</Link>
					)}
				</div>
			</div>
		</header>
	)
}

export default Header
