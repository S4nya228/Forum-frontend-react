import React, { useEffect, useState } from 'react'
import axiosInstance from '../../../api/axiosInstance'
import '../Aside/Aside.scss'

const Aside = () => {
	const [groups, setGroups] = useState([])
	const [showAllGroups, setShowAllGroups] = useState(false)

	useEffect(() => {
		const fetchGroups = async () => {
			try {
				const response = await axiosInstance.get('/client/community')
				setGroups(response.data.data)
			} catch (error) {
				console.log('Error:', error)
			}
		}
		fetchGroups()
	}, [])

	const sortedGroups = groups
		.slice()
		.sort((a, b) => b.subcriber_count - a.subcriber_count)

	const displayedGroups = showAllGroups
		? sortedGroups
		: sortedGroups.slice(0, 6)

	return (
		<div className="aside">
			<div className="aside__container">
				<div className="aside__title">Popular group</div>
				<ul className="aside__list">
					{displayedGroups.map((group) => (
						<li key={group.community_id} className="aside__item">
							<div className="aside__icon-group">
								<img src="/image/group_icon.svg" alt="icon group" />
							</div>
							<div className="aside__info-box">
								<div className="aside__name">
									<span>{group.name}</span>
								</div>
								<div className="aside__description">
									<span>{`${group.subcriber_count} subscribers`}</span>
								</div>
							</div>
						</li>
					))}
				</ul>
				<div className="aside__see-more">
					<div
						to="/group"
						onClick={() => setShowAllGroups(!showAllGroups)}
						className="aside__link"
					>
						{showAllGroups ? 'See less' : 'See more'}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Aside
