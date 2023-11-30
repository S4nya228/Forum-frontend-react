import React from 'react'
import PropTypes from 'prop-types'

const ButtonAnother = ({
	handleButtonClickWithTwoEvents,
	isListOpen,
	stopPropagation,
	getDropdownStyles,
}) => {
	return (
		<div className="link-post__another">
			<button
				type="button"
				onClick={(event) => handleButtonClickWithTwoEvents(event)}
			>
				•••
			</button>
			{isListOpen && (
				<ul
					className="link-post__action-list"
					onClick={stopPropagation}
					style={getDropdownStyles()}
				>
					<li className="link-post__list-item-save">
						<img src="/image/savePost.svg" alt="icon for save post" />{' '}
						<span>Save</span>
					</li>
					<li className="link-post__list-item">
						<img src="/image/mute_group.svg" alt="icon for mute group" />{' '}
						<span>Mute group</span>
					</li>
					<li className="link-post__list-item">
						<img src="/image/hide_post.svg" alt="icon for hide post" />{' '}
						<span>Hide</span>
					</li>
					<li className="link-post__list-item">
						<img src="/image/report_post.svg" alt="icon for report post" />{' '}
						<span>Report</span>
					</li>
				</ul>
			)}
		</div>
	)
}

ButtonAnother.propTypes = {
	handleButtonClickWithTwoEvents: PropTypes.func.isRequired,
	isListOpen: PropTypes.bool.isRequired,
	stopPropagation: PropTypes.func.isRequired,
	getDropdownStyles: PropTypes.func.isRequired,
}

export default ButtonAnother
