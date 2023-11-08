import React from 'react'

import '../SidebarTrends/Trends.scss'

const Trends = () => {
	return (
		<div className="trends">
			<div className="trends__container">
				<ul className="trends__list">
					<li className="trends__new">
						<div className="trends__logo">
							<img src="/image/sidebar_new.svg" alt="new" />
						</div>
						<div className="trends__info-box">
							<div className="trends__title">
								<span>Newest and Recent</span>
							</div>
							<div className="trends__description">
								<span>Find the latest update</span>
							</div>
						</div>
					</li>
					<li className="trends__popular">
						<div className="trends__logo">
							<img src="/image/sidebar_popular.svg" alt="new" />
						</div>
						<div className="trends__info-box">
							<div className="trends__title">
								<span>Popular of the day</span>
							</div>
							<div className="trends__description">
								<span>Shots featured today by curators</span>
							</div>
						</div>
					</li>
					<li className="trends__following">
						<div className="trends__logo">
							<img src="/image/sidebar_following.svg" alt="new" />
						</div>
						<div className="trends__info-box">
							<div className="trends__title">
								<span>Following</span>
							</div>
							<div className="trends__description">
								<span>Explore from your favorite person</span>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Trends
