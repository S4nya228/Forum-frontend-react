import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './CreateGroup.scss'

const CreateGroup = ({ onClose }) => {
	const [isVisible, setIsVisible] = useState(true)

	const handleCloseClick = () => {
		setIsVisible(false)
		onClose()
	}
	return isVisible ? (
		<div className="create-group">
			<div className="create-group__container">
				<button
					className="create-group__close-button"
					onClick={handleCloseClick}
				>
					&times;
				</button>
				<div className="create-group__title">
					<span>Create a group</span>
				</div>
				<div className="create-group__name">
					<span>Name</span>
					<input type="text" placeholder="Name for your group" />
				</div>
				<div className="create-group__types">
					<span>Group type</span>
					<div className="create-group__list-types">
						<div className="create-group__type">
							<input type="radio" name="radio" />
							<div className="create-group__information">
								<div className="create-group__type-name">
									<img src="/image/public_icon.svg" alt="" />
									<p>Public</p>
								</div>
								<span>
									Anyone can view, post, and comment to this community
								</span>
							</div>
						</div>
						<div className="create-group__type">
							<input type="radio" name="radio" />
							<div className="create-group__information">
								<div className="create-group__type-name">
									<img src="/image/restricted_icon.svg" alt="" />
									<p>Restricted</p>
								</div>
								<span>
									Anyone can view this community, but only approved users can
									post
								</span>
							</div>
						</div>
						<div className="create-group__type">
							<input type="radio" name="radio" />
							<div className="create-group__information">
								<div className="create-group__type-name">
									<img src="/image/private_icon.svg" alt="" />
									<p>Private</p>
								</div>
								<span>
									Only approved users can view and submit to this community
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className="create-group__create-button">
					<button>Create</button>
				</div>
			</div>
		</div>
	) : null
}

CreateGroup.propTypes = {
	onClose: PropTypes.func.isRequired,
}

export default CreateGroup
