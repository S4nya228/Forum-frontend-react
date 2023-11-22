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
							<input type="radio" name="groupType" id="public" />
							<label htmlFor="public" className="create-group__radio-label">
								<div className="create-group__information">
									<div className="create-group__type-name">
										<img src="/image/public_icon.svg" alt="" />
										<p>Public</p>
									</div>
									<span>
										Anyone can view, post, and comment to this community
									</span>
								</div>
							</label>
						</div>
						<div className="create-group__type">
							<input type="radio" name="groupType" id="restricted" />
							<label htmlFor="restricted" className="create-group__radio-label">
								<div className="create-group__information">
									<div className="create-group__type-name">
										<img src="/image/restricted_icon.svg" alt="" />
										<p>Restricted</p>
									</div>
									<span>Only approved members can view and participate</span>
								</div>
							</label>
						</div>
						<div className="create-group__type">
							<input type="radio" name="groupType" id="private" />
							<label htmlFor="private" className="create-group__radio-label">
								<div className="create-group__information">
									<div className="create-group__type-name">
										<img src="/image/private_icon.svg" alt="" />
										<p>Private</p>
									</div>
									<span>Only approved members can view and participate</span>
								</div>
							</label>
						</div>
					</div>
				</div>
				<div className="create-group__nsfw">
					<span>NSFW content</span>
					<div className="create-group__nsfw-checkbox">
						<input type="checkbox" id="nsfwCheckbox" />
						<label
							htmlFor="nsfwCheckbox"
							className="create-group__checkmark"
						></label>
						<p>18+ year old community</p>
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
