import React from 'react'
import '../GroupCard/GroupCard.scss'

const GroupCard = () => {
	return (
		<div className="card-group">
			<div className="card-group__container">
				<div className="card-group__banner">
					<img src="/image/banner.jpg" alt="banner for group" />
				</div>
				<div className="card-group__title">
					<div className="card-group__avatar">
						<img src="/image/icon-group.svg" alt="avatar user" />
					</div>
					<div className="card-group__name">
						<span>Ukraine - its good</span>
					</div>
				</div>
				<div className="card-group__information-box">
					<div className="card-group__description">
						<span>
							Творчий ентузіаст з пасією до технологій. Вдосконалюю світ кодом
							та дизайном. Завжди готовий до викликів та пошуку нового.
						</span>
					</div>
					<div className="card-group__registration-date">
						<img src="/image/reg_day.svg" alt="icon for reg date" />
						<span>November 20, 2023</span>
					</div>
					<div className="card-group__more-info">
						<div className="card-group__count-posts">
							<img
								src="/image/icon_create-post.svg"
								alt="icon for count post"
							/>
							<span>314 posts</span>
						</div>
						<div className="card-group__count-followers">
							<img src="/image/public_icon.svg" alt="icon for followers" />
							<span>1,154,326 members</span>
						</div>
					</div>
					<div className="card-group__join">
						<button>Join</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default GroupCard

{
	/* <div className="card-group__settings">
					<img src="/image/settings.svg" alt="icon for settings" />
				</div> */
}
