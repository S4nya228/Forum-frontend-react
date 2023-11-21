import React, { useState } from 'react'
import CreateGroup from '../../CreateGroup/CreateGroup'
import { useDispatch } from 'react-redux'
import { logout } from '../../../store/actions'
import '../CardProfile/CardProfile.scss'
import { Link, useNavigate } from 'react-router-dom'

const CardProfile = () => {
	const [isCreateGroupVisible, setCreateGroupVisible] = useState(false)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const handleLogout = () => {
		dispatch(logout())
		navigate('/')
	}

	const handleCreateGroupClick = () => {
		setCreateGroupVisible(true)
		document.body.style.overflow = 'hidden'
	}

	const handleCloseCreateGroup = () => {
		setCreateGroupVisible(false)
		document.body.style.overflow = 'auto'
	}

	return (
		<div className="card-profile">
			<div className="card-profile__container">
				<div className="card-profile__image-box">
					<div className="card-profile__banner">
						<img src="/image/banner.jpg" alt="banner for profile" />
					</div>
					<div className="card-profile__avatar">
						<img src="/image/avatar.svg" alt="avatar user" />
					</div>
				</div>
				<div className="card-profile__settings">
					<img src="/image/settings.svg" alt="icon for settings" />
				</div>
				<div className="card-profile__information-box">
					<div className="card-profile__nickname">
						<span>Sanya_228</span>
					</div>
					<div className="card-profile__description">
						<span>
							Творчий ентузіаст з пасією до технологій. Вдосконалюю світ кодом
							та дизайном. Завжди готовий до викликів та пошуку нового.
						</span>
					</div>
					<div className="card-profile__more-info">
						<div className="card-profile__count-posts">
							<img
								src="/image/icon_create-post.svg"
								alt="icon for count post"
							/>
							<span>314 posts</span>
						</div>
						<div className="card-profile__registration-date">
							<img src="/image/reg_day.svg" alt="icon for reg date" />
							<span>November 20, 2023</span>
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

export default CardProfile
