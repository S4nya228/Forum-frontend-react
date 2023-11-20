import React from 'react'

import './ProfileMenu.scss'

const ProfileMenu = () => {
	return (
		<div className="profile-menu">
			<div className="profile-menu__container">
				<ul className="profile-menu__action-list">
					<li className="profile-menu__item-list">
						<div className="profile-menu__title">
							<img src="/image/icon_create-post.svg" alt="" />
							<span>Posts</span>
						</div>
					</li>
					<li className="profile-menu__item-list">
						<div className="profile-menu__title">
							<img src="/image/myComments.svg" alt="" />
							<span>Comments</span>
						</div>
					</li>
					<li className="profile-menu__item-list">
						<div className="profile-menu__title">
							<img src="/image/mySaved.svg" alt="" />
							<span>Saved</span>
						</div>
					</li>
					<li className="profile-menu__item-list">
						<div className="profile-menu__title">
							<img src="/image/myHidden.svg" alt="" />
							<span>Hidden</span>
						</div>
					</li>
					<li className="profile-menu__item-list">
						<div className="profile-menu__title">
							<img src="/image/myVotes.svg" alt="" />
							<span>Votes</span>
						</div>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default ProfileMenu
