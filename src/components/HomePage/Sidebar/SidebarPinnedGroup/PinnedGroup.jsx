import React from 'react'

import '../SidebarPinnedGroup/PinnedGroup.scss'

const PinnedGroup = () => {
	return (
		<div className="pinned-group">
			<div className="pinned-group__container">
				<div className="pinned-group__title">
					<a href="#">
						Pinned Group <img src="/image/right_arrow.svg" alt="right_arrow" />
					</a>
				</div>
				<ul className="pinned-group__list">
					<li className="pinned-group__item">
						<div className="pinned-group__logo">
							<img src="/image/group_icon.svg" alt="group-icon" />
						</div>
						<div className="pinned-group__info-box">
							<div className="pinned-group__name">
								<span>#bitcoin</span>
							</div>
							<div className="pinned-group__description">
								<span>51,346 Posted by this tag</span>
							</div>
						</div>
					</li>
					<li className="pinned-group__item">
						<div className="pinned-group__logo">
							<img src="/image/group_icon.svg" alt="group-icon" />
						</div>
						<div className="pinned-group__info-box">
							<div className="pinned-group__name">
								<span>#design</span>
							</div>
							<div className="pinned-group__description">
								<span>51,346 Posted by this tag</span>
							</div>
						</div>
					</li>
					<li className="pinned-group__item">
						<div className="pinned-group__logo">
							<img src="/image/group_icon.svg" alt="group-icon" />
						</div>
						<div className="pinned-group__info-box">
							<div className="pinned-group__name">
								<span>#blogging</span>
							</div>
							<div className="pinned-group__description">
								<span>51,346 Posted by this tag</span>
							</div>
						</div>
					</li>
					<li className="pinned-group__item">
						<div className="pinned-group__logo">
							<img src="/image/group_icon.svg" alt="group-icon" />
						</div>
						<div className="pinned-group__info-box">
							<div className="pinned-group__name">
								<span>#tutorial</span>
							</div>
							<div className="pinned-group__description">
								<span>51,346 Posted by this tag</span>
							</div>
						</div>
					</li>
					<li className="pinned-group__item">
						<div className="pinned-group__logo">
							<img src="/image/group_icon.svg" alt="group-icon" />
						</div>
						<div className="pinned-group__info-box">
							<div className="pinned-group__name">
								<span>#java</span>
							</div>
							<div className="pinned-group__description">
								<span>51,346 Posted by this tag</span>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default PinnedGroup
