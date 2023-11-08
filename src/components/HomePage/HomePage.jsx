import React from 'react'

import Trends from './Sidebar/SidebarTrends/Trends'
import PopularTags from './Sidebar/SidebarPopularTags/PopularTags'
import PinnedGroup from './Sidebar/SidebarPinnedGroup/PinnedGroup'

const HomePage = () => {
	return (
		<div className="home-page">
			<div className="home-page__container">
				<div className="home-page__sidebar">
					<Trends />
					<PopularTags />
					<PinnedGroup />
				</div>
			</div>
		</div>
	)
}

export default HomePage
