import React from 'react'
import ProfileMenu from './ProfileMenu/ProfileMenu'
import PostCard from '../HomePage/PostCard/PostCard'
import CardProfile from './CardProfile/CardProfile'
import { useParams } from 'react-router-dom'

import '../ProfilePage/ProfilePage.scss'

const ProfilePage = () => {
	const { userId } = useParams()
	return (
		<div className="profile-page">
			<div className="profile-page__container">
				<div className="profile-page__main">
					<ProfileMenu />
					<PostCard userPosts={userId ? true : false} />
				</div>
				<div className="profile-page__card-profile">
					<CardProfile userId={userId} />
				</div>
			</div>
		</div>
	)
}

export default ProfilePage
