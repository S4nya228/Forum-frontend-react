import React from 'react'
import ProfileMenu from './ProfileMenu/ProfileMenu'
import PostCard from '../HomePage/PostCard/PostCard'
import CardProfile from './CardProfile/CardProfile'

import '../ProfilePage/ProfilePage.scss'

const ProfilePage = () => {
	return (
		<div className="profile-page">
			<div className="profile-page__container">
				<div className="profile-page__main">
					<ProfileMenu />
					<PostCard />
				</div>
				<div className="profile-page__card-profile">
					<CardProfile />
				</div>
			</div>
		</div>
	)
}

export default ProfilePage
