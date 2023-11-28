import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const UserAccount = ({ userId, userName, onClick }) => {
	const handleLinkClick = (event) => {
		event.stopPropagation()
		if (onClick) {
			onClick()
		}
	}
	return (
		<Link to={`/user/id/${userId}`} onClick={handleLinkClick}>
			{userName}
		</Link>
	)
}

UserAccount.propTypes = {
	userId: PropTypes.number.isRequired,
	userName: PropTypes.string.isRequired,
	onClick: PropTypes.func,
}

export default UserAccount
