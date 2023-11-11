import React from 'react'

import Trends from './Sidebar/SidebarTrends/Trends'
import PopularTags from './Sidebar/SidebarPopularTags/PopularTags'
import PinnedGroup from './Sidebar/SidebarPinnedGroup/PinnedGroup'
import CreatePost from './CreatePost/CreatePost'
import PostCard from './PostCard/PostCard'

const HomePage = () => {
	return (
		<div className="home-page">
			<div className="home-page__container">
				<div className="home-page__sidebar">
					<Trends />
					<PopularTags />
					<PinnedGroup />
				</div>
				<div className="home-page__main">
					<CreatePost />
					<PostCard />
				</div>
			</div>
		</div>
	)
}

export default HomePage
