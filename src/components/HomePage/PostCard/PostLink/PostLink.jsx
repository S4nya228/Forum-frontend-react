import React from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

const PostLink = ({ postId, children }) => {
	const navigate = useNavigate()

	const navigateToPostInformation = () => {
		navigate(`/post/id/${postId}`)
	}

	return (
		<div onClick={navigateToPostInformation} className="link-post">
			{children}
		</div>
	)
}

PostLink.propTypes = {
	postId: PropTypes.number.isRequired,
	children: PropTypes.node.isRequired,
	onClick: PropTypes.func,
}

export default PostLink
