import React from 'react'
import '../AsideForPost/AsideForPost.scss'
import GroupCard from '../../GroupCard/GroupCard'

const AsideForPost = () => {
	return (
		<div className="aside-post">
			<div className="aside-post__container">
				<GroupCard />
			</div>
		</div>
	)
}

export default AsideForPost
