import React, { useEffect, useState } from 'react'
import CreateGroup from '../../CreateGroup/CreateGroup'
import '../CardProfile/CardProfile.scss'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axiosInstance from '../../../api/axiosInstance'
import { clearToken } from '../../../store/authSlise'
import { clearUser } from '../../../store/userSlise'
import PropTypes from 'prop-types'

const CardProfile = ({ userId }) => {
	const [isCreateGroupVisible, setCreateGroupVisible] = useState(false)
	const [userData, setUserData] = useState(null)
	const token = useSelector((state) => state.auth.token)
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const handleLogout = async () => {
		try {
			if (!token) {
				console.error('Token is missing or empty.')
				return
			}

			const headers = { Authorization: `Bearer ${token}` }

			await Promise.all([
				axiosInstance.post('/logout', null, { headers }),
				navigate('/'),
			])

			dispatch(clearToken())
			dispatch(clearUser())
		} catch (error) {
			console.error('Logout failed:', error)
		}
	}

	const handleCreateGroupClick = () => {
		setCreateGroupVisible(true)
		document.body.style.overflow = 'hidden'
	}

	const handleCloseCreateGroup = () => {
		setCreateGroupVisible(false)
		document.body.style.overflow = 'auto'
	}

	useEffect(() => {
		const fetchUserData = async () => {
			try {
				const response = await axiosInstance.get(`/user/id/${userId}`)

				const createdDate = new Date(response.data.data.created_at)

				const formattedDate = createdDate.toLocaleDateString('en-US', {
					month: 'long',
					day: 'numeric',
					year: 'numeric',
				})

				if (response.data.data) {
					setUserData({ ...response.data.data, formattedDate: formattedDate })
				} else {
					console.error('Дані користувача не отримані.')
				}
			} catch (error) {
				console.error('Помилка при отриманні даних користувача:', error)
			}
		}

		fetchUserData()
	}, [userId])

	return (
		<div className="card-profile">
			<div className="card-profile__container">
				<div className="card-profile__image-box">
					<div className="card-profile__banner">
						<img src="/image/banner.jpg" alt="banner for profile" />
					</div>
					<div className="card-profile__avatar">
						<img src="/image/Avatar.svg" alt="avatar user" />
					</div>
				</div>
				<div className="card-profile__settings">
					<img src="/image/settings.svg" alt="icon for settings" />
				</div>
				<div className="card-profile__information-box">
					<div className="card-profile__nickname">
						{userData && <span>{userData.name}</span>}
					</div>
					<div className="card-profile__description">
						{userData && <span>{userData.description}</span>}
					</div>
					<div className="card-profile__more-info">
						<div className="card-profile__count-posts">
							<img
								src="/image/icon_create-post.svg"
								alt="icon for count post"
							/>
							{userData && <span>{userData.posts_count} posts</span>}
						</div>
						<div className="card-profile__registration-date">
							<img src="/image/reg_day.svg" alt="icon for reg date" />
							{userData && <span>{userData.formattedDate}</span>}
						</div>
					</div>
				</div>
				<div className="card-profile__button-actions">
					<div
						className="card-profile__create-group"
						onClick={handleCreateGroupClick}
					>
						<button onClick={handleCreateGroupClick}>Create group</button>
					</div>
					<Link to="/create-post" className="card-profile__create-post">
						<button>Create post</button>
					</Link>
				</div>
				{isCreateGroupVisible && (
					<CreateGroup onClose={handleCloseCreateGroup} />
				)}
				<div className="card-profile__logout">
					<button
						className="card-profile__logout-button"
						onClick={handleLogout}
					>
						<img src="/image/logout.svg" alt="icon for logout" />
						<span>Log out</span>
					</button>
				</div>
			</div>
		</div>
	)
}

CardProfile.propTypes = {
	userId: PropTypes.number.isRequired,
}

export default CardProfile
