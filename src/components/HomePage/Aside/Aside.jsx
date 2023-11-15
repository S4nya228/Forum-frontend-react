import React from 'react'

import '../Aside/Aside.scss'
import { Link } from 'react-router-dom'

const Aside = () => {
	return (
		<div className="aside">
			<div className="aside__container">
				<div className="aside__title">Popular group</div>
				<ul className="aside__list">
					<li className="aside__item">
						<div className="aside__icon-group">
							<img src="/image/group_icon.svg" alt="icon group" />
						</div>
						<div className="aside__info-box">
							<div className="aside__name">
								<span>Ukraine</span>
							</div>
							<div className="aside__description">
								<span>4,078,323 subscribers</span>
							</div>
						</div>
					</li>
					<li className="aside__item">
						<div className="aside__icon-group">
							<img src="/image/group_icon.svg" alt="icon group" />
						</div>
						<div className="aside__info-box">
							<div className="aside__name">
								<span>Ukraine</span>
							</div>
							<div className="aside__description">
								<span>7,348,323 subscribers</span>
							</div>
						</div>
					</li>
					<li className="aside__item">
						<div className="aside__icon-group">
							<img src="/image/group_icon.svg" alt="icon group" />
						</div>
						<div className="aside__info-box">
							<div className="aside__name">
								<span>Ukraine</span>
							</div>
							<div className="aside__description">
								<span>10,178,323 subscribers</span>
							</div>
						</div>
					</li>
					<li className="aside__item">
						<div className="aside__icon-group">
							<img src="/image/group_icon.svg" alt="icon group" />
						</div>
						<div className="aside__info-box">
							<div className="aside__name">
								<span>Ukraine</span>
							</div>
							<div className="aside__description">
								<span>41,078,323 subscribers</span>
							</div>
						</div>
					</li>
					<li className="aside__item">
						<div className="aside__icon-group">
							<img src="/image/group_icon.svg" alt="icon group" />
						</div>
						<div className="aside__info-box">
							<div className="aside__name">
								<span>Ukraine</span>
							</div>
							<div className="aside__description">
								<span>4,238,323 subscribers</span>
							</div>
						</div>
					</li>
				</ul>
				<div className="aside__see-more">
					<Link to="/group" className="aside__link">
						See more
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Aside
