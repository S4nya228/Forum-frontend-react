import React from 'react'
import { Link } from 'react-router-dom'

import '../MobileMenu/Menu.scss'

const Menu = () => {
	return (
		<div className="menu">
			<div className="menu__container">
				<div className="menu__actions-list">
					<Link to="/" className="menu__action">
						<img src="/image/mob_icon_home.svg" alt="icon home" />
					</Link>
					<Link className="menu__action">
						<img src="/image/mob_icon_group.svg" alt="" />
					</Link>
					<Link className="menu__action">
						<img src="/image/mob_icon_create.svg" alt="icon create post" />
					</Link>
					<Link className="menu__action">
						<img src="/image/mob_icon_bell.svg" alt="icon group" />
					</Link>
					<Link to="/profile" className="menu__action">
						<img src="/image/mob_icon_account.svg" alt="" />
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Menu
