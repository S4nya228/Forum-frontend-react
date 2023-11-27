import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

const DescriptionPost = ({ children }) => {
	const ref = useRef(null)

	useEffect(() => {
		const autoHeightDiv = ref.current

		if (
			autoHeightDiv &&
			autoHeightDiv.scrollHeight > 300 &&
			autoHeightDiv.scrollHeight !== autoHeightDiv.clientHeight
		) {
			autoHeightDiv.classList.add('tall')
		} else {
			autoHeightDiv.classList.remove('tall')
		}
	}, [children])

	return (
		<div className="link-post__text" ref={ref}>
			{children}
		</div>
	)
}

DescriptionPost.propTypes = {
	children: PropTypes.node.isRequired,
}

export default DescriptionPost
