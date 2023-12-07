import React, { useState } from 'react'
import PropTypes from 'prop-types'

const VottingButtons = ({ upvotesCount }) => {
	const [arrowUpSrc, setArrowUpSrc] = useState('/image/ArrowUp.svg')
	const [arrowDownSrc, setArrowDownSrc] = useState('/image/ArrowDown.svg')

	const handleMouseOver = (arrowType) => {
		if (arrowType === 'up') {
			setArrowUpSrc('/image/ArrowUpOrange.svg')
		} else if (arrowType === 'down') {
			setArrowDownSrc('/image/ArrowDownOrange.svg')
		}
	}

	const handleMouseOut = (arrowType) => {
		if (arrowType === 'up') {
			setArrowUpSrc('/image/ArrowUp.svg')
		} else if (arrowType === 'down') {
			setArrowDownSrc('/image/ArrowDown.svg')
		}
	}
	const stopPropagation = (event) => {
		event.stopPropagation()
	}

	return (
		<div className="link-post__voting">
			<button className="link-post__vote-button" onClick={stopPropagation}>
				<img
					className="arrow-up"
					src={arrowUpSrc}
					onMouseOver={() => handleMouseOver('up')}
					onMouseOut={() => handleMouseOut('up')}
					alt="voting arrow "
				/>
			</button>
			<span>{upvotesCount}</span>
			<button className="link-post__vote-button" onClick={stopPropagation}>
				<img
					className="arrow-down"
					src={arrowDownSrc}
					onMouseOver={() => handleMouseOver('down')}
					onMouseOut={() => handleMouseOut('down')}
					alt="voting arrow"
				/>
			</button>
		</div>
	)
}

VottingButtons.propTypes = {
	upvotesCount: PropTypes.number.isRequired,
}

export default VottingButtons
