import React from 'react'

import '../CardProfile/CardProfile.scss'

const CardProfile = () => {
	return (
		<div className="card-profile">
			<div className="card-profile__container">
				<div className="card-profile__image-box">
					<div className="card-profile__banner">
						<img src="/image/banner.jpg" alt="banner for profile" />
					</div>
					<div className="card-profile__avatar">
						<img src="/image/avatar.svg" alt="avatar user" />
					</div>
				</div>
				<div className="card-profile__settings">
					<img src="/image/settings.svg" alt="icon for settings" />
				</div>
				<div className="card-profile__information-box">
					<div className="card-profile__nickname">
						<span>Sanya_228</span>
					</div>
					<div className="card-profile__description">
						<span>
							Творчий ентузіаст з пасією до технологій. Вдосконалюю світ кодом
							та дизайном. Завжди готовий до викликів та пошуку нового.
						</span>
					</div>
					<div className="card-profile__more-info">
						<div className="card-profile__count-posts">
							<img
								src="/image/icon_create-post.svg"
								alt="icon for count post"
							/>
							<span>314 posts</span>
						</div>
						<div className="card-profile__registration-date">
							<img src="/image/reg_day.svg" alt="icon for reg date" />
							<span>November 20, 2023</span>
						</div>
					</div>
				</div>
				<div className="card-profile__button-actions">
					<div className="card-profile__create-group">
						<button>Create group</button>
					</div>
					<div className="card-profile__create-post">
						<button>Create post</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CardProfile
